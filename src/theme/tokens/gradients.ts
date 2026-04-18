import { defineTokens } from "@chakra-ui/react";

/**
 * グラデーショントークン定義
 *
 * | トークン名 | 色設定 | 用途 |
 * |------------|--------|------|
 * | blue | cyan.500 → blue.600 → blue.500 | 「詳しい解説」カード |
 * | green | teal.400 → teal.700 → teal.600 | 「テストに強い」カード |
 * | purple | purple.300 → purple.600 → purple.500 | 「快適な学習体験」カード |
 */
export const gradients = defineTokens.gradients({
	blue: {
		value: "linear-gradient(to bottom right, var(--chakra-colors-cyan-500), var(--chakra-colors-blue-600), var(--chakra-colors-blue-500))",
	},
	green: {
		value: "linear-gradient(to bottom right, var(--chakra-colors-teal-400), var(--chakra-colors-teal-700), var(--chakra-colors-teal-600))",
	},
	purple: {
		value: "linear-gradient(to bottom right, var(--chakra-colors-purple-300), var(--chakra-colors-purple-600), var(--chakra-colors-purple-500))",
	},
});
