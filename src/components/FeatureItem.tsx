/**
 * FeatureItem Component
 *
 * 個別Feature用のラッパーコンポーネント
 * セマンティックHTML: <article> を使用
 * features 配列から index で label を取得
 * subtitle と description は Features.tsx から直接渡す
 * Container を内包し、FeatureItemごとに背景色を設定可能
 *
 * @example
 * <FeatureItem
 *   index={0}
 *   bg="gray.50"
 *   subtitle="サブタイトル"
 *   description={<>説明文</>}
 * >
 *   {children}
 * </FeatureItem>
 */

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
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
	/** サブタイトル（Features.tsx から渡す） */
	subtitle?: ReactNode;
	/** 説明テキスト（Features.tsx から渡す） */
	description?: ReactNode;
	/** 背景色 */
	bg?: string;
	/** テキスト色 */
	color?: string;
	/** 垂直方向のpadding */
	pt?: number | string;
	pb?: number | string;
	py?: number | string;
};

export function FeatureItem({
	index,
	children,
	isLast = false,
	bgImage,
	subtitle,
	description,
	bg = "gray.100",
	color = "gray.900",
	pt,
	pb,
	py = 20,
}: FeatureItemProps) {
	const feature = features[index];
	const { label } = feature;
	return (
		<Box as="article" position="relative" bg={bg} color={color}>
			{/* Container でコンテンツを中央揃え */}
			<Container
				maxW="breakpoint-xl"
				position="relative"
				zIndex={1}
				pt={pt ?? py}
				pb={pb ?? py}
				borderBottomWidth={isLast ? 0 : "1px"}
				borderColor="gray.300"
			>
				{/* 背景要素（最背面） */}
				{bgImage}
				<Box position="relative" zIndex={2}>
					{/* 番号 */}
					<Text
						fontFamily="en.poppins"
						fontSize="8xl"
						color="blue.200"
						fontWeight="semibold"
						lineHeight={1}
						mb={3}
					>
						{String(index + 1).padStart(2, "0")}
					</Text>
					{/* タイトル */}
					<Heading as="h3" variant="displaySm" mb={8}>
						{label}
					</Heading>
					{/* サブタイトル */}
					{subtitle && (
						<Heading as="h4" variant="headlineLg" mb={2}>
							{subtitle}
						</Heading>
					)}
					{/* 説明テキスト */}
					{description && <Text variant="bodyMd">{description}</Text>}
					{/* コンテンツ */}
					{children}
				</Box>
			</Container>
		</Box>
	);
}
