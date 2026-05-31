/**
 * Hero Section
 *
 * ヒーローセクション - メインビジュアルとキャッチコピー
 */

import { Box, Container, Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import neko from "../../../assets/neko3.svg";
import { AppStats, Br } from "../../../components";

export function Hero() {
	return (
		<Flex
			as="section"
			id="hero"
			bg="blue.500"
			// py={28}
			h={{ base: "700px", sm: "800px", md: "800px" }}
			color="white"
			position="relative"
			overflow="hidden"
			align="center"
		>
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
				opacity={0.3}
				mixBlendMode="normal"
				pointerEvents="none"
			/>

			{/* コンテンツ */}
			<Container maxW="breakpoint-lg" px={{ base: 5, md: 8 }} position="relative" zIndex={10}>
				{/* ロゴ・タイトル部分 */}
				<VStack as="h1" mb={6} textAlign="center" gap={0}>
					<Text as="span" variant="headlineMd" letterSpacing="wide" pb="3">
						中学社会の勉強アプリなら
					</Text>
					{/* SVG を React コンポーネントとしてインポート */}
					<Icon
						w={{ base: 150, md: 232 }}
						h="auto"
						color="inherit"
						asChild
						pb="2"
						aria-label="LYNX"
					>
						<LynxLogo />
					</Icon>
					<Text as="span" variant="titleLg" letterSpacing="wider">
						リンクス
					</Text>
				</VStack>

				<Box mb={10} textAlign="center">
					<Text
						opacity={0.9}
						letterSpacing="wider"
						textAlign={{ base: "justify", sm: "center" }}
						fontSize={{ base: "14px", sm: "16px" }}
					>
						地理・歴史・公民の学習を、手軽に楽しく、きちんと理解しよう。
						<Br showFrom="sm" />
						最高峰の学習体験で、定期テストから高校受験まで、学習を強力にサポートします。
					</Text>
				</Box>

				{/* アプリアイコン・統計 */}
				<AppStats />
			</Container>
		</Flex>
	);
}
