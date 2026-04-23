/**
 * Hero Section
 *
 * ヒーローセクション - メインビジュアルとキャッチコピー
 */

import { Box, Container, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import neko from "../../../assets/neko3.svg";
import { AppStats, Br } from "../../../components";

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
				<AppStats />
			</Container>
		</Box>
	);
}
