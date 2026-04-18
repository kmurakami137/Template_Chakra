import { defineRecipe } from "@chakra-ui/react";

/**
 * Separator レシピ
 *
 * 区切り線のデフォルトスタイル
 */
export const separatorRecipe = defineRecipe({
	className: "separator",
	base: {
		borderColor: "gray.400",
	},
});
