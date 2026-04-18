/**
 * Features データ定義
 *
 * ABOUT LYNX セクションと FEATURES セクションの両方で使用
 */

import type { ReactNode } from "react";
import { Mark, Text } from "@chakra-ui/react";
import { Br } from "../components";
import { formatRounded, totals } from "./apps";

// icons
import { FaLink, FaMobileScreen } from "react-icons/fa6";
import { LuBookOpenText, LuFileText, LuListTree, LuRotate3D } from "react-icons/lu";
import { ClassNames } from "storybook/theming";

export type Feature = {
	id: string;
	icon: React.ComponentType;
	color: string;
	label: string;
	/** ABOUT LYNX セクション用の短い説明 */
	shortDesc: ReactNode;
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
		shortDesc: (
			<>
				<Mark>問題集×用語集×参考書</Mark>
				の役割をアプリ1つに凝縮。一つのアプリで横断的に学べるから、<Mark>総合的な理解</Mark>
				が<Mark>快適に</Mark>身につきます。
			</>
		),
		subtitle: "3つの役割が、1つにつながる",
		description: (
			<>
				問題を解いて疑問が生まれたら、すぐに詳しい解説へ。
				気になる用語はタップひとつで背景まで理解。
				<Br />
				3冊分の役割が
				<Mark>シームレスにつながる</Mark>ことで、
				<Mark>紙の教材では得られない学習体験</Mark>を実現します。
			</>
		),
	},
	{
		id: "explanation",
		icon: LuFileText,
		color: "red.600",
		label: "超充実の解説",
		shortDesc: (
			<>
				地理・歴史・公民合計<Mark>300万字以上</Mark>
				の解説で、「なぜ？」まで理解をサポート。
				<Mark>新学習指導要領に対応</Mark>し、教科書の内容すべてをカバーします。
			</>
		),
		subtitle: "「なぜ？」がわかる、体系的な解説",
		description: (
			<>
				<Text as="span" bg="gray.50" py="1" pr="3">
					地理・歴史・公民合計300万字以上。
					<Mark>社会科アプリNo.1※のコンテンツ量</Mark>
					による、「わかりやすさ」が好評です。
					<Br />
					<Mark>新学習指導要領に対応し、中学教科書の内容を網羅</Mark>しています。
					<Text as="span" variant="labelSm" color="gray.500" display="block" mt={4}>
						※ 学習アプリの解説の総文字数を比較。Antares Works調べ。
					</Text>
				</Text>
			</>
		),
	},
	{
		id: "related",
		icon: FaLink,
		color: "blue.600",
		label: "関連学習でバッチリ理解",
		shortDesc: (
			<>
				問題や用語に関わりのある項目を表示し、簡単に解説を確認できます。つながりや流れの理解が、社会科学習の質を劇的に高めます。
			</>
		),
		description: (
			<>
				社会科の学習は、前提となる知識や、その影響で何がどうなったか？など、つながりを理解することがとても大切です。LYNXは、問題や用語に関連する知識をリンクで次々とたどって確認していける設計です。そのため、暗記で終わらない深い理解が可能です。
			</>
		),
	},
	{
		id: "flexible-range",
		icon: LuListTree,
		color: "orange.600",
		label: "自由に選べる学習範囲",
		shortDesc: (
			<>
				大きな単元から細かいテーマまで、
				<Mark>{formatRounded(totals.stages, 10)}以上のステージ</Mark>
				から自由に選択。授業の進度に合わせた予習・復習も、苦手分野のピンポイント対策も
				<Mark>思いのまま</Mark>です。
			</>
		),
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
		shortDesc: (
			<>
				予習・演習・復習のサイクルが自然にできる設計です。通知機能や進捗管理など、継続をサポートする機能も充実。
			</>
		),
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
		shortDesc: (
			<>
				苦手な項目をわかりやすく一覧表示する「苦手ビュー」や、苦手優先出題機能など、LYNXは苦手克服を徹底してフォローします。
			</>
		),
	},
	// {
	// 	id: "smart-ui",
	// 	icon: RiSparklingFill,
	// 	color: "pink.600",
	// 	label: "スマートなUI設計",
	// 	shortDesc: <>学習に集中できる、スマートなUI設計。見やすく直感的な画面設計で、知りたい情報にすぐアクセス。</>,
	// },
];
