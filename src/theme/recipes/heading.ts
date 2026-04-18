import { defineRecipe } from "@chakra-ui/react";
import { TYPOGRAPHY_VARIANTS } from "./_typography-variants";

/**
 * Heading レシピ
 *
 * Material Design 3 ベースの15バリアント + as ベースのデフォルト
 *
 * 使用例:
 * <Heading as="h1">自動的に h1 スタイル</Heading>
 * <Heading as="h2" variant="displayLg">オーバーライド</Heading>
 */
export const headingRecipe = defineRecipe({
	className: "heading",
	base: {
		fontWeight: "bold",
		letterSpacing: "normal",
		lineHeight: "short",
		// as ベースのデフォルト（lineHeight も明示的に指定）
		"&:is(h1)": { fontSize: "4xl", lineHeight: "short" },
		"&:is(h2)": { fontSize: "3xl", lineHeight: "short" },
		"&:is(h3)": { fontSize: "2xl", lineHeight: "short" },
		"&:is(h4)": { fontSize: "xl", lineHeight: "short" },
		"&:is(h5)": { fontSize: "lg", fontWeight: "semibold", lineHeight: "moderate" },
		"&:is(h6)": { fontSize: "md", fontWeight: "semibold", lineHeight: "moderate" },
	},
	variants: {
		variant: TYPOGRAPHY_VARIANTS,
	},
});
