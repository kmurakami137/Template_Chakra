import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Text } from "@chakra-ui/react";
import { Br } from "./Br";

const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"] as const;

const meta = {
	title: "Components/Br",
	component: Br,
	tags: ["autodocs"],
	argTypes: {
		showFrom: {
			options: [undefined, ...BREAKPOINTS],
			control: { type: "inline-radio" },
			description: "このブレークポイント以上で改行を表示",
		},
		hideFrom: {
			options: [undefined, ...BREAKPOINTS],
			control: { type: "inline-radio" },
			description: "このブレークポイント以上で改行を非表示",
		},
	},
	decorators: [
		(Story) => (
			<Box p={4} bg="gray.100" borderRadius="md">
				<Text>
					テキストの前半部分
					<Story />
					テキストの後半部分
				</Text>
			</Box>
		),
	],
} satisfies Meta<typeof Br>;

export default meta;
type Story = StoryObj<typeof meta>;

/** デフォルト（md 以上で改行） */
export const Default: Story = {};

/** lg 以上で改行を表示 */
export const ShowFromLg: Story = {
	args: {
		showFrom: "lg",
	},
};

/** md 以上で改行を非表示（モバイルのみ改行） */
export const HideFromMd: Story = {
	args: {
		hideFrom: "md",
	},
};

/** 実際の使用例 */
export const UsageExample: Story = {
	render: () => (
		<Box p={4}>
			<Text variant="bodyLg" mb={4}>
				<Text as="span" fontWeight="bold">デフォルト（md以上で改行）:</Text>
			</Text>
			<Box bg="blue.50" p={3} borderRadius="md" mb={6}>
				<Text>
					地理・歴史・公民の学習を、手軽に楽しく、
					<Br />
					きちんと理解しよう。
				</Text>
			</Box>

			<Text variant="bodyLg" mb={4}>
				<Text as="span" fontWeight="bold">hideFrom="md":</Text>
				{" "}モバイルでは改行、デスクトップでは1行
			</Text>
			<Box bg="green.50" p={3} borderRadius="md">
				<Text>
					最高峰の学習体験で、定期テストから高校受験まで、
					<Br hideFrom="md" />
					学習を強力にサポートします。
				</Text>
			</Box>
		</Box>
	),
};
