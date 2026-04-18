import { defineGlobalStyles } from "@chakra-ui/react";

/**
 * グローバルCSS定義
 *
 * - font-feature-settings: "palt" - 日本語プロポーショナルメトリクス
 * - フォントアンチエイリアス
 * - スムーズスクロール
 * - 日本語の折り返し設定
 */
export const globalCss = defineGlobalStyles({
	// Chakra の * セレクタで cv11 が設定されているので、同じセレクタで上書き
	"*": {
		fontFeatureSettings: '"cv11", "palt"',
	},
	"html, body": {
		scrollBehavior: "smooth",
	},
	// Chakra UIのコンポーネントはbodyを継承しないため、直接指定
	"p, h1, h2, h3, h4, h5, h6": {
		wordBreak: "normal",
		overflowWrap: "anywhere",
		lineBreak: "strict",
	},
});
