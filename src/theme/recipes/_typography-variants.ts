/**
 * 共有タイポグラフィバリアント
 *
 * Heading と Text の両方で使用される共通のスタイル定義
 * Material Design 3 ベースの15バリアント
 *
 * "&& で詳細度を上げ、base の &:is(hN) や &:is(p) セレクタを上書きする
 */

export const TYPOGRAPHY_VARIANTS = {
	// ============================================
	// Display - ヒーロー、大見出し
	// ============================================
	displayLg: { "&&": { fontSize: "5xl", fontWeight: "bold", lineHeight: "short" } },
	displayMd: { "&&": { fontSize: "4xl", fontWeight: "bold", lineHeight: "short" } },
	displaySm: { "&&": { fontSize: "3xl", fontWeight: "bold", lineHeight: "short" } },

	// ============================================
	// Headline - セクション見出し
	// ============================================
	headlineLg: { "&&": { fontSize: "2xl", fontWeight: "bold", lineHeight: "short" } },
	headlineMd: { "&&": { fontSize: "xl", fontWeight: "bold", lineHeight: "short" } },
	headlineSm: { "&&": { fontSize: "lg", fontWeight: "bold", lineHeight: "short" } },

	// ============================================
	// Title - カードタイトル、サブセクション
	// ============================================
	titleLg: { "&&": { fontSize: "lg", fontWeight: "semibold", lineHeight: "moderate" } },
	titleMd: { "&&": { fontSize: "md", fontWeight: "semibold", lineHeight: "moderate" } },
	titleSm: { "&&": { fontSize: "sm", fontWeight: "semibold", lineHeight: "moderate" } },

	// ============================================
	// Body - 本文（両端揃え）
	// ============================================
	bodyLg: {
		"&&": {
			fontSize: "lg",
			fontWeight: "moderate",
			lineHeight: "taller",
			letterSpacing: "wide",
			textAlign: "justify",
		},
	},
	bodyMd: {
		"&&": { fontSize: "md", fontWeight: "moderate", lineHeight: "tall", textAlign: "justify" },
	},
	bodySm: {
		"&&": { fontSize: "sm", fontWeight: "moderate", lineHeight: "tall", textAlign: "justify" },
	},

	// ============================================
	// Label - ラベル、キャプション、注釈（両端揃え）
	// ============================================
	labelLg: {
		"&&": {
			fontSize: "sm",
			fontWeight: "normal",
			lineHeight: "moderate",
			letterSpacing: "wide",
			textAlign: "justify",
		},
	},
	labelMd: {
		"&&": {
			fontSize: "xs",
			fontWeight: "normal",
			lineHeight: "moderate",
			letterSpacing: "wide",
			textAlign: "justify",
		},
	},
	labelSm: {
		"&&": {
			fontSize: "2xs",
			fontWeight: "normal",
			lineHeight: "moderate",
			letterSpacing: "wide",
			textAlign: "justify",
		},
	},
} as const;

/** バリアント名の型 */
export type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANTS;
