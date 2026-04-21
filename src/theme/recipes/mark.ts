import { defineRecipe } from "@chakra-ui/react";

/**
 * Mark レシピ
 *
 * テキストのハイライト表示用
 *
 * 使用例:
 * <Mark>強調したいテキスト</Mark>
 */
export const markRecipe = defineRecipe({
	className: "mark",
	base: {
		display: "inline",
		bg: "#efe596",
		color: "inherit",
		fontWeight: "inherit",
		px: 1,
		pb: 0.25,
		rounded: "xs",
		// Chakra UIデフォルトの nowrap を上書きして改行を許可
		whiteSpace: "normal",
		// 複数行にわたる場合、各行で装飾を適用
		boxDecorationBreak: "clone",
	},
});
