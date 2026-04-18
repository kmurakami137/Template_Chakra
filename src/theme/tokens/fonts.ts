import { defineTokens } from "@chakra-ui/react";

/**
 * フォントトークン定義
 *
 * デフォルト（日本語向け）:
 * - heading / body: Noto Sans JP → 欧文フォールバック
 *
 * 欧文向け（en.xxx）:
 * - en.inter: ネオグロテスク、UI向け
 * - en.jost: 幾何学的サンセリフ、Futura風
 * - en.poppins: 幾何学的サンセリフ、丸みのある現代的
 */
export const fonts = defineTokens.fonts({
	// デフォルト：日本語向け（Noto Sans JP 優先）
	heading: {
		value: '"Noto Sans JP", "Inter", sans-serif',
	},
	body: {
		value: '"Noto Sans JP", "Inter", sans-serif',
	},
	// 欧文向け（フォント名で選択）
	en: {
		inter: { value: '"Inter", "Noto Sans JP", sans-serif' },
		jost: { value: '"Jost", "Noto Sans JP", sans-serif' },
		poppins: { value: '"Poppins", "Noto Sans JP", sans-serif' },
	},
});
