export const OWNER = {
	name: "アンタレスワークス",
	nameEn: "Antares Works",
	address: "",
	tel: "",
	telLink: "",
	fax: "",
	email: "",
} as const;

export const LEGAL = {
	copyrightStartYear: 2021,
	privacyPolicyPath: "/privacy",
	termsPath: "/terms",
} as const;

export const SEO = {
	titleSeparator: " | ",
	twitterHandle: "",
	twitterCardType: "summary_large_image" as const,
	bingSiteVerification: "",
} as const;

export const ANALYTICS = {
	googleAnalyticsId: import.meta.env.VITE_GA_ID ?? "",
	googleTagManagerId: import.meta.env.VITE_GTM_ID ?? "",
	facebookPixelId: import.meta.env.VITE_FB_PIXEL_ID ?? "",
} as const;

// ============================================
// 外部サービス
// ============================================

export const EXTERNAL_SERVICES = {
	formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? "",
	recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "",
} as const;

/** Google Analyticsが有効か */
export const hasAnalytics = () => ANALYTICS.googleAnalyticsId !== "";

/** reCAPTCHAが有効か */
export const hasRecaptcha = () => EXTERNAL_SERVICES.recaptchaSiteKey !== "";

export const SITE = {
	name: "中学社会LYNX",
	nameEn: "Chugaku Shakai LYNX",
	seriesName: "LYNXシリーズ",
	description:
		"中学社会（歴史・地理・公民）の勉強アプリLYNX（リンクス）。社会科アプリNo.1の詳しい解説で、暗記だけでなく「つながり」まで理解できます。定期テスト・高校受験対策に。問題集×用語集×参考書が1つに。",
	url: "https://lynx-study.pages.dev",
	lang: "ja",
	ogImage: "/images/og-image.jpg",
	keywords: [
		"中学社会 アプリ",
		"社会 勉強アプリ",
		"中学生 社会 学習",
		"歴史 アプリ 中学",
		"地理 アプリ 中学",
		"公民 アプリ 中学",
		"定期テスト 社会 対策",
		"高校受験 社会 アプリ",
		"社会 解説 アプリ",
		"LYNX",
	],
	theme: {
		primaryColor: "#1f2937",
		accentColor: "#3b82f6",
	},
} as const;

export type SocialPlatform =
	| "twitter"
	| "facebook"
	| "instagram"
	| "youtube"
	| "line"
	| "linkedin"
	| "github";

export const SOCIAL_LINKS: Record<SocialPlatform, string> = {
	twitter: "",
	facebook: "",
	instagram: "",
	youtube: "",
	line: "",
	linkedin: "",
	github: "",
};

// ============================================
// ナビゲーション
// ============================================

export const NAV_ITEMS = [
	{ labelEn: "ABOUT", labelJa: "LYNXについて", href: "#about" },
	{ labelEn: "FEATURES", labelJa: "選ばれる理由", href: "#features" },
	{ labelEn: "VOICES", labelJa: "ユーザーの声", href: "#voices" },
	// { labelEn: "FAQ", labelJa: "よくある質問", href: "#faq" },
] as const;

// ============================================
// アプリストア
// ============================================

export const APP_STORE = {
	android: {
		developer: "https://play.google.com/store/apps/developer?id=Antares+Works&hl=ja",
		history:
			"https://play.google.com/store/apps/details?id=com.ANTARESWORKS.HistoryChugaku&hl=ja",
		geography:
			"https://play.google.com/store/apps/details?id=com.ANTARESWORKS.GeographyChugaku&hl=ja",
		civics: "https://play.google.com/store/apps/details?id=com.ANTARESWORKS.CivicsChugaku",
	},
	ios: {
		developer: "https://apps.apple.com/jp/developer/kyohei-murakami/id1582281078",
		history: "https://apps.apple.com/jp/app/ANTARESWORKS.HistoryChugaku/id1582281076",
		geography: "https://apps.apple.com/jp/app/com.ANTARESWORKS.GeographyChugaku/id6746703358",
		civics: "https://apps.apple.com/jp/app/com.ANTARESWORKS.CivicsChugaku/id6755511163",
	},
} as const;

export type AppSubject = "history" | "geography" | "civics";

/** 教科ごとに両プラットフォームのURLを取得 */
export const getAppLinks = (subject: AppSubject) => ({
	android: APP_STORE.android[subject],
	ios: APP_STORE.ios[subject],
});

// ============================================
// ヘルパー関数
// ============================================

/** SNSリンクが1つでも設定されているか */
export const hasSocialLinks = () => Object.values(SOCIAL_LINKS).some((v) => v !== "");

/** 有効なSNSリンクを取得 */
export const getActiveSocialLinks = () =>
	Object.entries(SOCIAL_LINKS)
		.filter(([, value]) => value !== "")
		.map(([platform, url]) => ({
			platform: platform as SocialPlatform,
			url,
		}));

// ============================================
// 著作権
// ============================================

/** 著作権表示を生成 */
export const getCopyright = () => {
	const start = LEGAL.copyrightStartYear;
	const current = new Date().getFullYear();
	const yearText = start === current ? String(current) : `${start}-${current}`;
	return `© ${yearText} ${OWNER.nameEn || SITE.name}`;
};

// ============================================
// URL
// ============================================

/** JSON-LD 構造化データを生成（@graph パターン：WebSite + MobileApplication × 3） */
export const generateJsonLd = () => {
	const appSubjects = [
		{ label: "歴史", android: APP_STORE.android.history, ios: APP_STORE.ios.history },
		{ label: "地理", android: APP_STORE.android.geography, ios: APP_STORE.ios.geography },
		{ label: "公民", android: APP_STORE.android.civics, ios: APP_STORE.ios.civics },
	];

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				name: SITE.name,
				url: SITE.url,
				description: SITE.description,
				inLanguage: SITE.lang,
				publisher: { "@type": "Organization", name: OWNER.nameEn },
			},
			...appSubjects.map((subject) => ({
				"@type": "MobileApplication",
				name: `${SITE.name} ${subject.label}`,
				operatingSystem: "Android, iOS",
				applicationCategory: "EducationApplication",
				inLanguage: SITE.lang,
				offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
				installUrl: [subject.android, subject.ios],
			})),
		],
	};
};

/** OGP用の絶対URLを生成 */
export const getAbsoluteUrl = (path: string) => {
	const baseUrl = SITE.url.replace(/\/$/, "");
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${baseUrl}${cleanPath}`;
};
