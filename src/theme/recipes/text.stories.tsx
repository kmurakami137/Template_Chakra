import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { TYPOGRAPHY_VARIANTS, type TypographyVariant } from "./_typography-variants";

const variantNames = Object.keys(TYPOGRAPHY_VARIANTS) as TypographyVariant[];

const meta = {
	title: "Theme/Recipes/Text",
	component: Text,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: [undefined, ...variantNames],
			control: { type: "inline-radio" },
		},
		as: {
			options: ["p", "span", "label", "small"],
			control: { type: "inline-radio" },
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Stories
// ============================================

/** デフォルト状態 */
export const Default: Story = {
	args: {
		children: "テキストコンテンツ",
	},
};

/** as ベースのデフォルトスタイル一覧 */
export const AllAsDefaults: Story = {
	render: () => (
		<VStack align="start" gap={4}>
			<Text as="p">p - デフォルト本文スタイル</Text>
			<Text as="span">span - 継承スタイル</Text>
			<Text as="label">label - ラベルスタイル（sm, medium）</Text>
			<Text as="small">small - 小さいテキスト（xs）</Text>
		</VStack>
	),
};

/** 全バリアント一覧（カテゴリ別） */
export const AllVariants: Story = {
	render: () => (
		<VStack align="start" gap={8}>
			{/* Display */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Display
				</Heading>
				<VStack align="start" gap={2}>
					<Text variant="displayLg">displayLg - ヒーロー大</Text>
					<Text variant="displayMd">displayMd - ヒーロー中</Text>
					<Text variant="displaySm">displaySm - ヒーロー小</Text>
				</VStack>
			</Box>

			{/* Headline */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Headline
				</Heading>
				<VStack align="start" gap={2}>
					<Text variant="headlineLg">headlineLg - セクション大</Text>
					<Text variant="headlineMd">headlineMd - セクション中</Text>
					<Text variant="headlineSm">headlineSm - セクション小</Text>
				</VStack>
			</Box>

			{/* Title */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Title
				</Heading>
				<VStack align="start" gap={2}>
					<Text variant="titleLg">titleLg - カード大</Text>
					<Text variant="titleMd">titleMd - カード中</Text>
					<Text variant="titleSm">titleSm - カード小</Text>
				</VStack>
			</Box>

			{/* Body */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Body
				</Heading>
				<VStack align="start" gap={2}>
					<Text variant="bodyLg">
						bodyLg - 大きめの本文。長い文章や強調したい段落に使用します。
					</Text>
					<Text variant="bodyMd">
						bodyMd - 標準の本文サイズ。一般的な記事やコンテンツの本文に使用します。
					</Text>
					<Text variant="bodySm">bodySm - 小さめの本文。補足説明や注釈などに使用します。</Text>
				</VStack>
			</Box>

			{/* Label */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Label
				</Heading>
				<VStack align="start" gap={2}>
					<Text variant="labelLg">labelLg - 大きめのラベル</Text>
					<Text variant="labelMd">labelMd - 標準のラベル</Text>
					<Text variant="labelSm">labelSm - 小さいラベル・キャプション</Text>
				</VStack>
			</Box>
		</VStack>
	),
};

/** 大きなサイズで非見出しテキストを表示 */
export const LargeNonHeadingExample: Story = {
	render: () => (
		<VStack align="start" gap={4}>
			<Text variant="displayLg">セマンティックには段落だが、視覚的にはヒーローサイズ</Text>
			<Text variant="headlineMd">サブキャッチコピーなど、見出しではないが目立たせたいテキスト</Text>
		</VStack>
	),
};
