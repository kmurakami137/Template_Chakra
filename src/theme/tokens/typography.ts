import { defineTokens } from "@chakra-ui/react";

/**
 * ラインハイトトークン定義
 *
 * デフォルト（日本語向け）- Chakra デフォルトをオーバーライド:
 * | トークン | 値 | 用途 |
 * |----------|-----|------|
 * | shorter | 1.5 | 見出し・短文 |
 * | short | 1.625 | やや詰め |
 * | moderate | 1.75 | 標準 |
 * | tall | 1.875 | ゆったり |
 * | taller | 2.25 | 長文向け |
 *
 * 欧文向け（en）:
 * | トークン | 値 |
 * |----------|-----|
 * | en.shorter | 1.25 |
 * | en.short | 1.375 |
 * | en.moderate | 1.5 |
 * | en.tall | 1.625 |
 * | en.taller | 2 |
 */
export const lineHeights = defineTokens.lineHeights({
	// デフォルト：日本語向け（Chakra デフォルトをオーバーライド）
	shorter: { value: "1.375" },
	short: { value: "1.5" },
	moderate: { value: "1.625" },
	tall: { value: "1.75" },
	taller: { value: "2" },
	// 欧文向け（Chakra 元のデフォルト値）
	en: {
		shorter: { value: "1.25" },
		short: { value: "1.375" },
		moderate: { value: "1.5" },
		tall: { value: "1.625" },
		taller: { value: "2" },
	},
});
