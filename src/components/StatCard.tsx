/**
 * StatCard Component
 *
 * 左右分割のスタットカード
 * 左側にラベル+合計値（自動計算）、右側にアプリごとの内訳を表示
 *
 * @example
 * <StatCard
 *   label="問題数"
 *   appDataKey="questions"
 *   apps={apps}
 * />
 *
 * // コンテンツ文字数（万単位で表示）
 * <StatCard
 *   label="コンテンツ文字数"
 *   appDataKey="totalChars"
 *   apps={apps}
 * />
 */

import { Box, Flex, Text } from "@chakra-ui/react";
import type { App } from "../data/apps";
import { formatRounded } from "../data/apps";

const APP_DATA_KEYS = ["stages", "questions", "terms", "chars", "totalChars"] as const;
type AppDataKey = (typeof APP_DATA_KEYS)[number];

type StatCardProps = {
	/** ラベル（例: "問題数"） */
	label: string;
	/** アプリデータのキー */
	appDataKey: AppDataKey;
	/** アプリデータ配列 */
	apps: readonly App[];
};

/** アプリから値を取得（totalChars は計算） */
const getValue = (app: App, key: AppDataKey): number => {
	if (key === "totalChars") {
		return app.chars + app.questionChars;
	}
	return app[key];
};

/** 丸め単位を取得 */
const getRoundUnit = (key: AppDataKey): number => {
	switch (key) {
		case "stages":
			return 10; // 10の位で丸め
		case "questions":
		case "terms":
			return 100; // 100の位で丸め
		case "chars":
		case "totalChars":
			return 10000; // 万単位
	}
};

/** 合計値をフォーマット */
const formatTotal = (total: number, key: AppDataKey): string => {
	const unit = getRoundUnit(key);
	if (key === "chars" || key === "totalChars") {
		return formatRounded(total, unit, 10000);
	}
	return formatRounded(total, unit);
};

/** 個別値をフォーマット（単位付き、丸め適用） */
const formatIndividual = (value: number, key: AppDataKey): string => {
	const unit = getRoundUnit(key);
	const unitLabels: Record<AppDataKey, string> = {
		stages: "",
		questions: "問",
		terms: "語",
		chars: "万字",
		totalChars: "万字",
	};
	if (key === "chars" || key === "totalChars") {
		return `${formatRounded(value, unit, 10000)}${unitLabels[key]}+`;
	}
	return `${formatRounded(value, unit)}${unitLabels[key]}+`;
};

/** 合計表示用の単位を取得 */
const getUnit = (key: AppDataKey): string => {
	switch (key) {
		case "stages":
			return "";
		case "questions":
			return "問";
		case "terms":
			return "語";
		case "chars":
		case "totalChars":
			return "万";
	}
};

export function StatCard({ label, appDataKey, apps }: StatCardProps) {
	// 合計を自動計算
	const total = apps.reduce((sum, app) => sum + getValue(app, appDataKey), 0);
	const unit = getUnit(appDataKey);

	return (
		<Flex direction="row" bg="gray.100" color="blue.500" rounded="lg" overflow="hidden" mt="6">
			{/* 左: ラベル+数値 */}
			<Flex
				flex={1}
				direction="column"
				align="center"
				justify="center"
				py={2}
				borderRightWidth="1px"
				borderColor="gray.300"
			>
				<Box bg="blue.500" color="white" rounded="full" px={4} py={0.5} mb={1}>
					<Text fontSize={13} fontWeight="bold">
						{label}
					</Text>
				</Box>
				<Text variant="displaySm" fontFamily="en.poppins">
					{formatTotal(total, appDataKey)}
					{unit && (
						<Text as="span" variant="titleLg" mx={0.5}>
							{unit}
						</Text>
					)}
					+
				</Text>
			</Flex>
			{/* 右: 内訳表 */}
			<Flex direction="column" flex={1}>
				{apps.map((app, index) => (
					<Flex key={app.id} flex={1}>
						<Flex
							flex={1}
							// bg={index % 2 === 0 ? "gray.300/55" : "gray.200/40"}
							borderBottomWidth={index % 2 === 1 ? "1px" : 0}
							borderTopWidth={index % 2 === 1 ? "1px" : 0}
							// borderRightWidth="1px"
							py={1.5}
							align="center"
							justify="center"
							borderColor="gray.300"
						>
							<Text variant="bodySm" fontWeight="bold">
								{app.name}
							</Text>
						</Flex>
						<Flex
							flex={1}
							// bg={index % 2 === 0 ? "gray.300/30" : "gray.100/30"}
							borderBottomWidth={index % 2 === 1 ? "1px" : 0}
							borderTopWidth={index % 2 === 1 ? "1px" : 0}
							px={3}
							align="center"
							justify="flex-end"
							borderColor="gray.300"
						>
							<Text variant="bodySm" fontWeight="bold">
								{formatIndividual(getValue(app, appDataKey), appDataKey)}
							</Text>
						</Flex>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
}
