# Template_Chakra

Chakra UI v3 ベースの React テンプレート。Props ベースの型安全なスタイリングを採用。

## 原則

### クリーンアーキテクチャ優先

責務を明確に分離し、適切なディレクトリに配置する。Co-location よりも再利用性・保守性を優先。

```
src/
├── components/     # UI コンポーネント
├── features/       # 機能単位のモジュール
├── hooks/          # カスタムフック
├── theme/          # Chakra テーマカスタマイズ
├── types/          # 共有型定義
└── utils/          # ユーティリティ関数
```

### Single Source of Truth

定義は一箇所に集約し、重複を避ける。Chakra のテーマシステムを活用して、色・spacing・typography を一元管理する。

### 既存の再利用

新規作成前に既存の型・コンポーネント・ユーティリティを探し、再利用する。Chakra が提供するコンポーネントを最大限活用し、不要なラッパーを作らない。

## 制約

### コードを読む・書くたびにチェックすること

- 責務の分離（型定義、ロジック、UIが適切に分かれているか）
- 依存の方向（下位レイヤーが上位に依存していないか）
- 不要な複雑さ（過剰な抽象化、使われていないコード）

### スタイリング

#### Chakra の Props を直接使う

```tsx
// ✅ 正しい: Chakra Props を直接使用
<Box bg="blue.500" p={4} borderRadius="md" />

// ❌ 避ける: 独自の Props 変換レイヤー
<MyBox bgColor="primary" size="md" />
```

#### カスタマイズはテーマで行う

```tsx
// ✅ 正しい: テーマでトークンを定義
// theme/index.ts
const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: { value: "#0066cc" },
      },
    },
  },
});

// 使用時
<Box bg="brand" />

// ❌ 避ける: コンポーネント内でハードコード
<Box bg="#0066cc" />
```

#### css prop は最終手段

```tsx
// ✅ 基本: Style Props で書く
<Box bg="blue.500" _hover={{ bg: "blue.600" }} />

// ⚠️ 必要な場合のみ: css prop
<Box css={{ clipPath: "polygon(...)" }} />
```

### コンポーネント設計

- **Chakra コンポーネントをそのまま使う** のが基本
- **カスタムコンポーネント** は、複数箇所で同じ Props の組み合わせを使う場合のみ作成
- **variant** は Chakra のレシピ機能で定義（コンポーネント内で条件分岐しない）
- **親子連動が必要な場合**: Context + Compound Component パターンを使用

```tsx
// ✅ 正しい: Chakra をそのまま使う
<Button colorPalette="blue" size="lg">Submit</Button>

// ✅ 正しい: 繰り返しパターンをコンポーネント化
export const PrimaryButton = (props: ButtonProps) => (
  <Button colorPalette="blue" {...props} />
);

// ❌ 避ける: 不要なラッパー
export const MyButton = ({ variant, ...props }) => {
  const colorPalette = variant === "primary" ? "blue" : "gray";
  return <Button colorPalette={colorPalette} {...props} />;
};
```

---

## `<head>` 管理方針

**基準: JSが実行される前に必要かどうか**

| 項目 | 場所 | 理由 |
|---|---|---|
| `charset` | `index.html` のみ | HTML解析の開始時点で必要 |
| `viewport` | `index.html` のみ | JS前にモバイルレイアウトが崩れる |
| `lang` 属性 | `index.html` のみ | クローラー・スクリーンリーダーがJS前に参照 |
| Google Fonts | `index.html` のみ | JS前にフォント読み込みを開始しないと `document.fonts.ready` の完了が遅れる |
| `<title>` | `<Helmet>` のみ | ページ固有・JS後でも問題なし |
| favicon | `<Helmet>` のみ | JS後でも実用上問題なし |
| description / OGP / Twitter Card | `<Helmet>` のみ | ページ固有のSEOメタ情報 |

**ルール: 同じ項目を両方に書かない（Single Source of Truth）**

```html
<!-- ✅ index.html: JS前に必要なものだけ -->
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Google Fonts のみ許可 -->
  </head>
```

```tsx
// ✅ <Helmet>: title・favicon・SEOメタ情報
<Helmet>
  <title>{SITE.name}</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="description" content={SITE.description} />
  {/* OGP, Twitter Card ... */}
</Helmet>
```

---

## Storybook ガイドライン

### 基本方針

**Autodocs を中心に据える** - TypeScript 型と JSDoc から自動生成されるドキュメントを活用。

### 配置ルール

**Co-location**: 実装ファイルと同じディレクトリに配置する。

```
src/theme/recipes/
├── heading.ts
├── heading.stories.tsx    ← 同階層
├── text.ts
└── text.stories.tsx
```

### title 階層構造

```
Theme/
├── Recipes/          ← Chakra レシピ（Heading, Text）
│   ├── Heading
│   └── Text
├── Tokens/           ← トークン展示（Colors, Spacing, etc.）
└── Components/       ← カスタムコンポーネント
```

### ストーリーの命名規則

| 種類 | 命名 | 用途 |
|------|------|------|
| 基本 | `Default` | デフォルト props 状態 |
| バリエーション | `All{PropName}s` | 特定 props の全値を一覧表示 |
| 機能有効化 | `With{Feature}` | 特定機能を ON にした状態 |
| 使用例 | `{UseCase}Example` | 実際の使用シナリオ |

### argTypes で options を明示する

TypeScript 型はコンパイル時に消えるため、Storybook の Controls には配列を渡す必要がある。

```tsx
import { TYPOGRAPHY_VARIANTS, type TypographyVariant } from "./_typography-variants";

const variantNames = Object.keys(TYPOGRAPHY_VARIANTS) as TypographyVariant[];

const meta = {
  argTypes: {
    variant: {
      options: [undefined, ...variantNames],
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof Heading>;
```

### Control Type の基本方針

**`inline-radio` を優先** - 一覧性を重視し、選択肢が多くても `inline-radio` を使用する。

### 標準テンプレート

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { TYPOGRAPHY_VARIANTS, type TypographyVariant } from "./_typography-variants";

const variantNames = Object.keys(TYPOGRAPHY_VARIANTS) as TypographyVariant[];

const meta = {
  title: "Theme/Recipes/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [undefined, ...variantNames],
      control: { type: "inline-radio" },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** デフォルト状態 */
export const Default: Story = {
  args: {
    children: "見出しテキスト",
    as: "h2",
  },
};

/** 全バリアント一覧（カテゴリ別） */
export const AllVariants: Story = {
  render: () => (
    <VStack align="start" gap={8}>
      <Box>
        <Heading as="h3" variant="titleMd" mb={3} color="gray.500">Display</Heading>
        <VStack align="start" gap={2}>
          <Heading as="h2" variant="displayLg">displayLg</Heading>
          <Heading as="h2" variant="displayMd">displayMd</Heading>
          <Heading as="h2" variant="displaySm">displaySm</Heading>
        </VStack>
      </Box>
      {/* Headline, Title, Body, Label も同様にグループ化 */}
    </VStack>
  ),
};
```

### チェックリスト

新しいストーリーを作成する際：

- [ ] `tags: ["autodocs"]` を設定した
- [ ] 配列ベースの Props を argTypes で options 指定した
- [ ] `Default` Story を作成した
- [ ] バリエーション展示用の Story を作成した

---

## Git

### コミットメッセージ

- **日本語で記述する**
- 簡潔に変更内容を説明する

```
feat: ログイン機能を追加
fix: ボタンのスタイル崩れを修正
refactor: 認証ロジックを分離
```

---

## コミュニケーション

- 忖度せずベストプラクティスを提案すること
- 複数の選択肢がある場合も、推奨を明示すること
- 問題点や改善点があれば率直に指摘すること
- Chakra の機能で解決できることは、独自実装を避けるよう指摘すること
