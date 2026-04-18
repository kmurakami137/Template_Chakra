import { defineRecipe } from "@chakra-ui/react";
import { TYPOGRAPHY_VARIANTS } from "./_typography-variants";

/**
 * Text レシピ
 *
 * Material Design 3 ベースの15バリアント + as ベースのデフォルト
 *
 * 使用例:
 * <Text>デフォルトで bodyMd</Text>
 * <Text variant="labelSm">キャプション</Text>
 * <Text variant="displayLg">大きな装飾テキスト（非見出し）</Text>
 */
export const textRecipe = defineRecipe({
	className: "text",
	base: {
		fontWeight: "moderate",
		letterSpacing: "moderate",
		lineHeight: "relaxed",
		// as ベースのデフォルト
		"&:is(p)": { fontSize: "md", lineHeight: "moderate" },
		"&:is(span)": { fontSize: "inherit", lineHeight: "inherit" },
		"&:is(label)": { fontSize: "sm", fontWeight: "medium", lineHeight: "moderate" },
		"&:is(small)": { fontSize: "xs", lineHeight: "moderate" },
	},
	variants: {
		variant: TYPOGRAPHY_VARIANTS,
	},
});
