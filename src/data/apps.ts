/**
 * LYNXシリーズ アプリデータ
 *
 * 各アプリの統計情報を一元管理
 * 表示時は formatXxx 関数で適切に丸める
 */

import hisIcon from "../assets/his_icon_store.png";
import geoIcon from "../assets/geo_icon_store.png";
import civIcon from "../assets/civ_icon_store.png";

// ============================================
// 型定義
// ============================================

export type App = {
	id: string;
	name: string;
	icon: string;
	/** ステージ数 */
	stages: number;
	/** 問題数 */
	questions: number;
	/** 用語数 */
	terms: number;
	/** 解説総文字数 */
	chars: number;
	/** 用語同士の関連数 (RelationIds合計) */
	relations: number;
	/** 問題文字数 (title + choices) */
	questionChars: number;
	/** 問題に紐づくキーワード数 (問題と用語の連携数) */
	questionKeywords: number;
};

// ============================================
// データ定義（正確な値）
// ============================================

export const apps: readonly App[] = [
	{
		id: "his",
		name: "歴史",
		icon: hisIcon,
		stages: 268,
		questions: 1271,
		terms: 1245,
		chars: 849454,
		relations: 4256,
		questionChars: 70002,
		questionKeywords: 4082,
	},
	{
		id: "geo",
		name: "地理",
		icon: geoIcon,
		stages: 179,
		questions: 2049,
		terms: 1654,
		chars: 869836,
		relations: 8727,
		questionChars: 138264,
		questionKeywords: 5699,
	},
	{
		id: "civ",
		name: "公民",
		icon: civIcon,
		stages: 112,
		questions: 1086,
		terms: 922,
		chars: 1165483,
		relations: 7313,
		questionChars: 82470,
		questionKeywords: 2246,
	},
] as const;

// ============================================
// 集計ヘルパー
// ============================================

/** 指定キーの合計を算出 */
export const getTotal = (key: keyof Omit<App, "id" | "name" | "icon">): number =>
	apps.reduce((sum, app) => sum + app[key], 0);

// ============================================
// フォーマット関数
// ============================================

/** 数値をカンマ区切りでフォーマット */
export const formatNumber = (n: number): string => n.toLocaleString();

/**
 * 表示用に丸める（数値を返す）
 * @param value - 元の値
 * @param unit - 丸める単位（10, 100, 10000 など）
 * @returns 丸めた値
 */
export const roundDown = (value: number, unit: number): number =>
	Math.floor(value / unit) * unit;

/**
 * 数値を指定単位で丸めてフォーマット
 * @param value - 元の値
 * @param unit - 丸める単位（10, 100, 10000 など）
 * @param divideBy - 表示時に割る数（万単位表示なら 10000）。省略時は丸め後の値をそのまま表示
 * @returns フォーマットされた文字列
 *
 * @example
 * formatRounded(559, 10)           // → "550"（ステージ数）
 * formatRounded(4406, 100)         // → "4,400"（問題数・用語数）
 * formatRounded(2884773, 10000, 10000) // → "288"（万単位）
 */
export const formatRounded = (
	value: number,
	unit: number,
	divideBy?: number,
): string => {
	const rounded = roundDown(value, unit);
	const displayValue = divideBy ? Math.floor(rounded / divideBy) : rounded;
	return formatNumber(displayValue);
};

// ============================================
// 事前計算された合計値（パフォーマンス用）
// ============================================

export const totals = {
	stages: getTotal("stages"), // 559
	questions: getTotal("questions"), // 4406
	terms: getTotal("terms"), // 3821
	chars: getTotal("chars"), // 2884773
	relations: getTotal("relations"), // 20296
	questionChars: getTotal("questionChars"), // 290736
	questionKeywords: getTotal("questionKeywords"), // 12027
	/** コンテンツ総文字数（解説 + 問題文） */
	totalChars: getTotal("chars") + getTotal("questionChars"), // 3175509
} as const;
