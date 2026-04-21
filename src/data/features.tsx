/**
 * Features データ定義
 *
 * FEATURES セクションで使用
 */

import { Mark } from "@chakra-ui/react";
import type { ReactNode } from "react";
// icons
import { FaLink, FaMobileScreen } from "react-icons/fa6";
import { LuBookOpenText, LuFileText, LuListTree, LuRotate3D } from "react-icons/lu";
import { Br } from "../components";

export type Feature = {
	id: string;
	icon: React.ComponentType;
	color: string;
	label: string;
	/** FEATURES セクション用のサブタイトル */
	subtitle?: string;
	/** FEATURES セクション用の詳細説明 */
	description?: ReactNode;
};

export const features: Feature[] = [
	{
		id: "cross-reference",
		icon: LuBookOpenText,
		color: "cyan.600",
		label: "問題集×用語集×参考書",
	},
	{
		id: "explanation",
		icon: LuFileText,
		color: "red.600",
		label: "超充実の解説",
	},
	{
		id: "related",
		icon: FaLink,
		color: "blue.600",
		label: "関連学習でつながりを理解",
	},
	{
		id: "flexible-range",
		icon: LuListTree,
		color: "orange.600",
		label: "自由に選べる学習範囲",
		subtitle: "大きな範囲も、小さな範囲も、自由自在",
		description: (
			<>
				LYNXは独自の<Mark>ツリー構造</Mark>で学習範囲を管理。
				「世界地理」のような大きな単元から「ヨーロッパの農業」のような細かいテーマまで、
				<Mark>自分のペースに合わせて自由に選択</Mark>できます。
				<Br />
				選んだ範囲の用語や解説を<Mark>挑戦前に確認</Mark>できるから、
				予習も復習も効率的に進められます。
			</>
		),
	},
	{
		id: "learning-cycle",
		icon: LuRotate3D,
		color: "green.600",
		label: "理解が定着する学習サイクル",
		description: (
			<>
				一つのアプリで、「予習」・「演習」・「復習」の学習サイクルが完結します。
				通知機能や進捗管理、苦手分析など、継続学習を強力にサポートする機能も充実。
			</>
		),
	},
	{
		id: "anytime-anywhere",
		icon: FaMobileScreen,
		color: "purple.600",
		label: "苦手克服を手厚くサポート",
	},
];
