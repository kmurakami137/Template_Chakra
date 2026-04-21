/**
 * Hero Section
 *
 * ヒーローセクション - メインビジュアルとキャッチコピー
 */

import { Box, Container, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { RiSparklingFill } from "react-icons/ri";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import neko from "../../../assets/neko3.svg";
import { Br } from "../../../components";
import { apps } from "../../../data/apps";

// ヒーローに表示する統計情報
const heroStats = [
	{ key: "rating", label: "ストア平均評価", value: "4.7" },
	{ key: "downloads", label: "ダウンロード数", value: "5.5", unit: "万" },
	{ key: "price", label: "アプリ内課金", value: "Free" },
] as const;

export function Hero() {
	return (
		<Box as="section" bg="blue.600" py={28} color="white" position="relative" overflow="hidden">
			{/* 背景 SVG - 親要素より大きく配置してはみ出しをclip */}
			<Image
				src={neko}
				position="absolute"
				top="46%"
				left="47%"
				transform="translate(-50%, -50%)"
				minW="113%"
				minH="113%"
				w="auto"
				h="auto"
				opacity={0.5}
				mixBlendMode="normal"
				pointerEvents="none"
			/>

			{/* コンテンツ */}
			<Container maxW="breakpoint-lg" px={8} position="relative" zIndex={10}>
				{/* ロゴ・タイトル部分 */}
				<VStack as="h1" mb={10} textAlign="center" gap={0}>
					<Text as="span" variant="headlineMd" letterSpacing="wide" pb="3">
						中学社会の勉強アプリなら
					</Text>
					{/* SVG を React コンポーネントとしてインポート */}
					<Icon w={232} h="auto" color="inherit" asChild pb="2" aria-label="LYNX">
						<LynxLogo />
					</Icon>
					<Text as="span" variant="titleLg" letterSpacing="wider">
						リンクス
					</Text>
				</VStack>

				{/* キャッチコピー */}
				<Box mb={12} textAlign="center">
					<Heading as="h2" letterSpacing="wider" mb={4}>
						中学社会科の学習を、
						<Br />
						もっと楽しく快適に。
					</Heading>
					<Text
						variant="bodyLg"
						opacity={0.9}
						letterSpacing="wider"
						textAlign={{ base: "justify", md: "center" }}
					>
						地理・歴史・公民の学習を、手軽に楽しく、きちんと理解しよう。
						<Br />
						最高峰の学習体験で、定期テストから高校受験まで、学習を強力にサポートします。
					</Text>
				</Box>

				{/* アプリアイコン・統計 */}
				<Box textAlign="center">
					{/* アプリアイコン */}
					<HStack justify="center" gap={5} mb={6}>
						{apps.map((app) => (
							<Image
								key={app.id}
								src={app.icon}
								alt={`${app.name}アイコン`}
								w={20}
								h={20}
								borderRadius="2xl"
								border="1px solid"
								borderColor="whiteAlpha.500"
								objectFit="cover"
							/>
						))}
					</HStack>

					{/* 統計 */}
					<HStack justify="center" gap={{ base: 4, md: 8 }}>
						{heroStats.map((stat) => (
							<Box key={stat.key}>
								{stat.key === "price" ? (
									<HStack gap={1} justify="center">
										<Icon size="lg" mb={1}>
											<RiSparklingFill />
										</Icon>
										<Text variant="displaySm" fontFamily="en.poppins">
											{stat.value}
										</Text>
									</HStack>
								) : (
									<Text variant="displaySm" fontFamily="en.poppins">
										{stat.value}
										{"unit" in stat && (
											<Text as="span" variant="headlineMd" mx={0.5}>
												{stat.unit}
											</Text>
										)}
										+
									</Text>
								)}
								<Text variant="labelLg" opacity={0.8} fontWeight="medium">
									{stat.label}
								</Text>
							</Box>
						))}
					</HStack>
				</Box>
			</Container>
		</Box>
	);
}
