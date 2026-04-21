/**
 * 解説実例の型定義
 */

export interface ExplanationExample {
	/** 一意識別子 */
	id: string;
	/** 用語名 */
	title: string;
	/** 読み仮名 */
	kana: string;
	/** 時代（歴史の場合のみ） */
	era?: string;
	/** 重要度 1-5 */
	importance: number;
	/** 解説本文（Markdown風フォーマット） */
	comment: string;
}

/**
 * 教科別に構造化された解説実例
 */
export interface ExplanationExamples {
	/** 歴史 */
	history: ExplanationExample[];
	/** 地理 */
	geography: ExplanationExample[];
	/** 公民 */
	civics: ExplanationExample[];
}
