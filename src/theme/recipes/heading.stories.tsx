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

// ============================================
// Stories
// ============================================

/** デフォルト状態 - as に応じた自動スタイリング */
export const Default: Story = {
	args: {
		children: "見出しテキスト",
		as: "h2",
	},
};

/** as ベースのデフォルトスタイル一覧 */
export const AllAsDefaults: Story = {
	render: () => (
		<VStack align="start" gap={4}>
			<Heading as="h1">h1 - 自動的に fontSize: 4xl</Heading>
			<Heading as="h2">h2 - 自動的に fontSize: 3xl</Heading>
			<Heading as="h3">h3 - 自動的に fontSize: 2xl</Heading>
			<Heading as="h4">h4 - 自動的に fontSize: xl</Heading>
			<Heading as="h5">h5 - 自動的に fontSize: lg, semibold</Heading>
			<Heading as="h6">h6 - 自動的に fontSize: md, semibold</Heading>
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
					<Heading as="h2" variant="displayLg">
						displayLg - ヒーロー大
					</Heading>
					<Heading as="h2" variant="displayMd">
						displayMd - ヒーロー中
					</Heading>
					<Heading as="h2" variant="displaySm">
						displaySm - ヒーロー小
					</Heading>
				</VStack>
			</Box>

			{/* Headline */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Headline
				</Heading>
				<VStack align="start" gap={2}>
					<Heading as="h2" variant="headlineLg">
						headlineLg - セクション大
					</Heading>
					<Heading as="h2" variant="headlineMd">
						headlineMd - セクション中
					</Heading>
					<Heading as="h2" variant="headlineSm">
						headlineSm - セクション小
					</Heading>
				</VStack>
			</Box>

			{/* Title */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Title
				</Heading>
				<VStack align="start" gap={2}>
					<Heading as="h2" variant="titleLg">
						titleLg - カード大
					</Heading>
					<Heading as="h2" variant="titleMd">
						titleMd - カード中
					</Heading>
					<Heading as="h2" variant="titleSm">
						titleSm - カード小
					</Heading>
				</VStack>
			</Box>

			{/* Body */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Body
				</Heading>
				<VStack align="start" gap={2}>
					<Heading as="h2" variant="bodyLg">
						bodyLg - 本文大
					</Heading>
					<Heading as="h2" variant="bodyMd">
						bodyMd - 本文中
					</Heading>
					<Heading as="h2" variant="bodySm">
						bodySm - 本文小
					</Heading>
				</VStack>
			</Box>

			{/* Label */}
			<Box>
				<Heading as="h3" variant="titleMd" mb={3} color="gray.500">
					Label
				</Heading>
				<VStack align="start" gap={2}>
					<Heading as="h2" variant="labelLg">
						labelLg - ラベル大
					</Heading>
					<Heading as="h2" variant="labelMd">
						labelMd - ラベル中
					</Heading>
					<Heading as="h2" variant="labelSm">
						labelSm - ラベル小
					</Heading>
				</VStack>
			</Box>
		</VStack>
	),
};

/** variant で as のデフォルトをオーバーライド */
export const VariantOverrideExample: Story = {
	render: () => (
		<VStack align="start" gap={4}>
			<Heading as="h3">h3 デフォルト（2xl）</Heading>
			<Heading as="h3" variant="displayLg">
				h3 + variant="displayLg"（5xl にオーバーライド）
			</Heading>
			<Heading as="h3" variant="titleSm">
				h3 + variant="titleSm"（sm にオーバーライド）
			</Heading>
		</VStack>
	),
};
