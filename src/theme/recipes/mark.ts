import { defineRecipe } from "@chakra-ui/react";

const HIGHLIGHT_COLOR = "rgb(255, 238, 0, 0.5)";

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
		color: "inherit",
		fontWeight: "inherit",
		whiteSpace: "normal",
		boxDecorationBreak: "clone",
	},
	variants: {
		variant: {
			/** 下線マーカー（デフォルト）: テキスト下部のみハイライト */
			underline: {
				background: `linear-gradient(transparent 55%, ${HIGHLIGHT_COLOR} 40%)`,
			},
			/** 全面マーカー: テキスト全体をハイライト */
			solid: {
				bg: HIGHLIGHT_COLOR,
				px: 1,
				pb: 0.25,
				rounded: "xs",
			},
		},
	},
	defaultVariants: {
		variant: "underline",
	},
});
