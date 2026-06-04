/**
 * FeatureDetails Component
 *
 * Feature セクション内の詳細グループコンポーネント
 * Context + Compound Component パターンで親から子に layout, iconColor を伝播
 *
 * @example
 * // Column レイアウト（3カラム Grid、デフォルト）
 * <FeatureDetails layout="column" iconColor={features[0].color}>
 *   <FeatureDetails.Item title="..." description="..." image={questionImage} footer={<StatCard />} />
 *   <FeatureDetails.Item title="..." description="..." image={glossaryImage} />
 * </FeatureDetails>
 *
 * // Column レイアウト（2カラム Grid）
 * <FeatureDetails layout="column" columns={2} iconColor={features[0].color}>
 *   <FeatureDetails.Item title="..." description="..." />
 *   <FeatureDetails.Item title="..." description="..." />
 * </FeatureDetails>
 *
 * // Row レイアウト（縦積み Stack）
 * <FeatureDetails layout="row" iconColor={features[1].color}>
 *   <FeatureDetails.Item title="..." description="..." />
 * </FeatureDetails>
 */

import { Box, Flex, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { createContext, type ReactNode, useContext } from "react";
import { FaStar } from "react-icons/fa6";

// ============================================================================
// Constants
// ============================================================================

const LAYOUTS = ["column", "row"] as const;
const COLUMNS = [2, 3] as const;

// ============================================================================
// Context
// ============================================================================

type FeatureDetailsContextValue = {
	layout: (typeof LAYOUTS)[number];
	iconColor?: string;
};

const FeatureDetailsContext = createContext<FeatureDetailsContextValue | null>(null);

// ============================================================================
// FeatureDetails (親コンポーネント)
// ============================================================================

type FeatureDetailsProps = {
	/** レイアウト: column（Grid）または row（Stack） */
	layout?: (typeof LAYOUTS)[number];
	/** column レイアウト時のカラム数（デフォルト: 3） */
	columns?: (typeof COLUMNS)[number];
	/** アイコンの色（子に伝播） */
	iconColor?: string;
	children: ReactNode;
	pt?: number | string;
	pb?: number | string;
	py?: number | string;
};

// ルートコンテナ
function FeatureDetailsRoot({
	layout = "column",
	columns = 3,
	iconColor,
	children,
	pt = 12,
	pb,
	py,
}: FeatureDetailsProps) {
	return (
		<FeatureDetailsContext.Provider value={{ layout, iconColor }}>
			{layout === "column" ? (
				<Grid
					data-gsap="details"
					templateColumns={{ base: "1fr", md: `repeat(${columns}, 1fr)` }}
					gap={5}
					pt={pt ?? py}
					pb={pb ?? py}
				>
					{children}
				</Grid>
			) : (
				<Stack data-gsap="details" gap={8}>{children}</Stack>
			)}
		</FeatureDetailsContext.Provider>
	);
}

// ============================================================================
// FeatureDetails.Item (子コンポーネント)
// ============================================================================

type FeatureDetailItemProps = {
	/** 見出しテキスト */
	title: ReactNode;
	/** 説明文（ReactNode で Mark 等を含められる） */
	description: ReactNode;
	/** 画像パス。"placeholder" でグレーボックス、省略時は画像エリアなし */
	image?: string | "placeholder";
	/** 画像ラベル（オプション） */
	imageLabel?: string;
	/** 画像のアスペクト比（デフォルト: 1/1） */
	imageAspectRatio?: number;
	/** アイコンの色（Context からの上書き用） */
	iconColor?: string;
	/** フッター要素（StatCard など、オプション） */
	footer?: ReactNode;
	/** レイアウト（Context からの上書き用） */
	layout?: (typeof LAYOUTS)[number];
};

// ============================================================================
// Item Styles（column/row 共通のあしらい）
// ============================================================================

function FeatureDetailItem({
	title,
	description,
	image,
	imageLabel,
	imageAspectRatio = 1,
	iconColor: iconColorProp,
	footer,
	layout: layoutProp,
}: FeatureDetailItemProps) {
	// Context から取得、props で上書き可能
	const context = useContext(FeatureDetailsContext);
	const layout = layoutProp ?? context?.layout ?? "column";
	const iconColor = iconColorProp ?? context?.iconColor ?? "blue.400";

	//  共通: Item コンテナの共通スタイル
	const ITEM_CONTAINER_STYLES = {
		bg: "white/40",
		borderRadius: "md",
		// p: 4,
		shadow: "neuMd",
	};

	// 共通: アイコン + タイトル
	const headerContent = (
		<Flex gap={2} bg="blue.700/7" px={4} py={4} roundedTop="md">
			<Icon color={iconColor} mt="0.45rem" animation="spin 4s linear infinite">
				<FaStar />
			</Icon>
			<Heading as="h4" variant="titleLg" color="blue.800">
				{title}
			</Heading>
		</Flex>
	);

	// 共通: 説明文
	const descriptionContent = (
		<Text variant="bodyMd" textAlign="justify">
			{description}
		</Text>
	);

	// 共通: 画像 + ラベル（image 未設定時は null）
	const imageContent = image ? (
		<Box>
			{image === "placeholder" ? (
				<Box
					bg="gray.200"
					aspectRatio={imageAspectRatio}
					borderRadius="md"
					mb={imageLabel ? 2 : 0}
				/>
			) : (
				<Image
					src={image}
					aspectRatio={imageAspectRatio}
					borderRadius="md"
					mb={imageLabel ? 2 : 0}
					bgColor="gray.200"
				/>
			)}
			{imageLabel && <Text variant="labelLg">{imageLabel}</Text>}
		</Box>
	) : null;

	// Column レイアウト
	if (layout === "column") {
		return (
			<Flex direction="column" {...ITEM_CONTAINER_STYLES}>
				<Box>{headerContent}</Box>
				{/* <Separator borderColor="gray.300" /> */}
				<Flex flex={1} p={4} justify="flex-end" direction="column">
					<Box flex={1}>{descriptionContent}</Box>
					{imageContent && <Box mt={4}>{imageContent}</Box>}
					{footer && <Box mt={4}>{footer}</Box>}
				</Flex>
			</Flex>
		);
	}

	// Row レイアウト
	return (
		<Flex
			{...ITEM_CONTAINER_STYLES}
			direction={{ base: "column", md: "row" }}
			gap={{ base: 4, md: 8 }}
			align="flex-start"
		>
			{/* 左: テキストコンテンツ */}
			<Flex direction="column" flex={1}>
				{headerContent}
				{/* <Separator /> */}
				{descriptionContent}
				{footer}
			</Flex>
			{/* 右: 画像コンテンツ */}
			<Box flex={1}>{imageContent}</Box>
		</Flex>
	);
}

// ============================================================================
// Compound Component Export
// ============================================================================

export const FeatureDetails = Object.assign(FeatureDetailsRoot, {
	Item: FeatureDetailItem,
});
