import type { TypographyVariant } from "../theme/recipes/_typography-variants";

/**
 * Chakra UI v3 のカスタムレシピ型拡張
 *
 * カスタム variant を Heading / Text コンポーネントで使用するための型定義
 */
declare module "@chakra-ui/react" {
	interface HeadingProps {
		variant?: TypographyVariant;
	}

	interface TextProps {
		variant?: TypographyVariant;
	}
}
