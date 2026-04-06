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

## Storybook ガイドライン

### 基本方針

**Autodocs を中心に据える** - TypeScript 型と JSDoc から自動生成されるドキュメントを活用。

### ストーリーの命名規則

| 種類 | 命名 | 用途 |
|------|------|------|
| 基本 | `Default` | デフォルト props 状態 |
| バリエーション | `All{PropName}s` | 特定 props の全値を一覧表示 |
| 機能有効化 | `With{Feature}` | 特定機能を ON にした状態 |
| 使用例 | `{UseCase}Example` | 実際の使用シナリオ |

### JSDoc コメントの徹底

```tsx
/**
 * Card Component
 *
 * コンテンツをグループ化するカードコンポーネント。
 */
export function Card({
  /** カードのタイトル */
  title,
  /** カードの内容 */
  children,
}: CardProps) {
```

### 標準テンプレート

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./ComponentName";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

/** デフォルト状態 */
export const Default: Story = {
  args: {
    children: "Content",
  },
};
```

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
