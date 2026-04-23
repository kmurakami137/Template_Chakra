/**
 * レビューデータ
 *
 * App Store / Google Play のユーザーレビューを一元管理
 */

// ============================================
// 型定義
// ============================================

export type Subject = "history" | "geography" | "civics";
export type Store = "app-store" | "google-play";

export type Review = {
	rating: number;
	subject: Subject;
	content: string;
	author?: string;
	date?: string;
	store?: Store;
};

// ============================================
// 科目メタデータ
// ============================================

export const SUBJECT_LABELS: Record<Subject, string> = {
	history: "歴史",
	geography: "地理",
	civics: "公民",
};

/** Chakra カラートークン */
export const SUBJECT_COLORS: Record<Subject, string> = {
	history: "red.500",
	geography: "teal.500",
	civics: "blue.500",
};

// ============================================
// レビューデータ
// ============================================

export const REVIEWS: Review[] = [
	{
		rating: 5,
		subject: "history",
		content:
			"あの、本当に最高です。中三受験生です。苦手な歴史もこのアプリなら自分から進んで勉強することが出来ます！！いつも歴史を勉強する際はほかの出来事との関連をいちいち調べたり分からない語句を調べるのが面倒くさくて頭に入らないのですが、このアプリなら回答のあと詳しーーい説明を入れて毎回納得できるのでほんとに最高です。受験まであと1ヶ月なのでこのアプリで頑張ります。公民地理も使っています！！ほかの教科も出たらいいな",
		date: "2026/01/29",
		store: "app-store",
	},
	{
		rating: 5,
		subject: "history",
		content: "内容は最高すぎるんですが、音楽をバックグラウンドで聴けないのが少し残念です",
		date: "2026/01/25",
		store: "app-store",
	},
	{
		rating: 5,
		subject: "history",
		content: "わかりやすい！こんなのはじめて",
		date: "2026/01/29",
		store: "app-store",
	},
	{
		rating: 5,
		subject: "history",
		content:
			"難しい問題があるアプリを探していたのでインストール。内容としては発展的なものから標準的なものまでかなり幅広い。自分の苦手なキーワードなども分析してくれる。デメリットは読み込みが遅すぎる。二回くらい再起動しないと問題が始まらない時があるのでそこを改善してほしい。それ以外は最高。",
		date: "2025/09/20",
		store: "app-store",
	},
	{
		rating: 5,
		subject: "history",
		content: "答えにもしっかりとした解説があって、設定で選択問題と自分で答えを書くのと選べるのがすごくいい",
		date: "2022/01/24",
		store: "google-play",
	},
	{
		rating: 5,
		subject: "history",
		content: "UIが美しく、機能設計も最高です、他の科目も欲しくなってしまう良アプリ✨ ひとまず課金してやりこみます！",
		date: "2025/04/26",
		store: "google-play",
	},
	{
		rating: 5,
		subject: "history",
		content:
			"最近ダウンロードしていいアプリ見つけた！と思ったんですが、選択肢の誤植が気になってました。レビュー見たらだいぶ前に指摘されてるし最終更新は去年。これは修正ないのかな…と思ってたんですが、昨日アップデートに気付きました。嬉しいです。他の学習アプリと比べても使いやすいしとてもいいアプリだと思います。これからも開発頑張ってください。応援してます。",
		date: "2024/10/12",
		store: "google-play",
	},
	{
		rating: 5,
		subject: "history",
		content:
			"今まで使っていたアプリよりも使いやすいです！使いやすいUIや、とても丁寧でわかりやすい解説があるので、しっかり覚えられます！特に解説は重要単語にマーカーが引かれているので覚えやすいです！",
		date: "2026/01/31",
		store: "google-play",
	},
	{
		rating: 5,
		subject: "geography",
		content: "地図や図表を使った問題が多くて、実際のテストに役立ちます。都道府県の特徴も覚えやすいです。",
		author: "中学3年生の保護者",
		date: "2024/02/20",
		store: "google-play",
	},
	{
		rating: 5,
		subject: "civics",
		content: "公民は難しいと思っていましたが、このアプリで基礎から学べて理解が深まりました。受験対策にもなります。",
		author: "受験生",
		date: "2024/03/10",
		store: "app-store",
	},
];
