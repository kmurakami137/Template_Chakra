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

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
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
	rightArea?: ReactNode;
	subtitle?: ReactNode;
	/** 説明テキスト（Features.tsx から渡す） */
	description?: ReactNode;
	/** 背景色 */
	bg?: string;
	/** カバー背景画像URL */
	bgImageUrl?: string;
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
	bgImageUrl,
	rightArea,
	subtitle,
	description,
	bg = "blue.50",
	color = "gray.900",
	pt,
	pb,
	py = 20,
}: FeatureItemProps) {
	const feature = features[index];
	const { label } = feature;

	return (
		<Box
			as="article"
			data-gsap-item
			position="relative"
			color={color}
			overflow="hidden"
			borderBottomWidth="1px"
			borderColor="gray.300"
		>
			<Box
				data-gsap="bg"
				// bg={bg}
				backgroundImage={bgImageUrl ? `url(${bgImageUrl})` : undefined}
				backgroundSize={bgImageUrl ? "cover" : undefined}
				backgroundPosition={bgImageUrl ? "center" : undefined}
				position="absolute"
				inset={0}
				overflow="hidden"
				zIndex={0}
			/>
			{/* Container でコンテンツを中央揃え */}
			<Container
				maxW="breakpoint-xl"
				position="relative"
				zIndex={1}
				pt={pt ?? py}
				pb={pb ?? py}
			>
				{/* 背景要素（最背面） */}
				{bgImage}
				<Box position="relative" zIndex={2}>
					{/* 上段: 左エリア（テキスト群）+ 右エリア */}
					<Flex
						direction={{ base: "column", lg: "row" }}
						align={{ base: "stretch", lg: "center" }}
						gap={8}
						textAlign={{ base: "center", lg: "start" }}
					>
						<Box flex="1">
							<Flex
								data-gsap="number"
								fontFamily="en.poppins"
								color="blue.600"
								mb={4}
								direction="column"
								position="relative"
							>
								<Text
									fontSize="32px"
									lineHeight={1}
									fontWeight="bold"
									pl={1}
									mb={-1}
								>
									Feature
								</Text>
								{/* 番号 */}
								<Text fontSize="110px" lineHeight={1} fontWeight="bold">
									{String(index + 1).padStart(2, "0")}
								</Text>
							</Flex>
							{/* タイトル */}
							<Heading data-gsap="heading" as="h3" variant="displaySm" mb={8}>
								{label}
							</Heading>
							{/* サブタイトル */}
							{subtitle && (
								<Heading as="h4" variant="headlineMd" mb={2}>
									{subtitle}
								</Heading>
							)}
							{/* 説明テキスト */}
							{description && (
								<Text
									data-gsap="description"
									variant="bodyMd"
									textAlign={{ base: "center", lg: "justify" }}
								>
									{description}
								</Text>
							)}
						</Box>
						{rightArea && (
							<Box
								data-gsap="right"
								flexShrink={0}
								w={{ base: "full", lg: "auto" }}
								minW={{ base: 0, lg: 380 }}
								display="flex"
								justifyContent={{ base: "center", lg: "flex-start" }}
							>
								{rightArea}
							</Box>
						)}
					</Flex>
					{/* 下段: コンテンツ（全幅） */}
					{children}
				</Box>
			</Container>
		</Box>
	);
}
