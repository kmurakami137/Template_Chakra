/**
 * FeatureItem Component
 *
 * 個別Feature用のラッパーコンポーネント
 * セマンティックHTML: <article> を使用
 * features 配列から index でデータを取得
 *
 * @example
 * <FeatureItem index={0}>
 *   {children}
 * </FeatureItem>
 */

import type { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { features } from "../data/features";

type FeatureItemProps = {
	/** features 配列のインデックス（0始まり） */
	index: number;
	/** コンテンツ */
	children: ReactNode;
	/** 最後のアイテムかどうか（border-bottomを制御） */
	isLast?: boolean;
	/** 背景要素（position: absolute で配置される） */
	bgImage?: ReactNode;
};

export function FeatureItem({ index, children, isLast = false, bgImage }: FeatureItemProps) {
	const feature = features[index];
	const { label, subtitle, description } = feature;

	return (
		<Box
			as="article"
			position="relative"
			py={12}
			borderBottomWidth={isLast ? 0 : "1px"}
			borderColor="gray.200"
		>
			{/* 背景要素（最背面） */}
			{bgImage}
			{/* コンテンツ（前面） */}
			<Box position="relative" zIndex={1}>
				{/* 番号 */}
				<Text
					fontFamily="en.poppins"
					fontSize="8xl"
					color="gray.200"
					fontWeight="semibold"
					lineHeight={1}
				>
					{String(index + 1).padStart(2, "0")}
				</Text>
				{/* タイトル */}
				<Heading as="h3" variant="displaySm" mb={6}>
					{label}
				</Heading>
				{/* サブタイトル */}
				{subtitle && (
					<Heading as="h4" variant="headlineLg" mb={2}>
						{subtitle}
					</Heading>
				)}
				{/* 説明テキスト */}
				{description && (
					<Text variant="bodyMd" mb={12}>
						{description}
					</Text>
				)}
				{/* コンテンツ */}
				{children}
			</Box>
		</Box>
	);
}
