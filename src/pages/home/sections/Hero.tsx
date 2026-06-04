/**
 * Hero Section
 *
 * ヒーローセクション - メインビジュアルとキャッチコピー
 */

import { Box, Container, Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { AppStats, Br } from "../../../components";
import { gsap, SplitText } from "../../../lib/gsap";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import neko from "../../../assets/neko3.svg";

type HeroProps = {
	isReady: boolean;
};

export function Hero({ isReady }: HeroProps) {
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isReady || !heroRef.current) return;

		const ctx = gsap.context((self) => {
			const q = (attr: string) => self.selector?.(`[data-gsap="${attr}"]`)?.[0];

			gsap.set(q("logo"), { opacity: 0, y: 20 });
			gsap.set(q("tagline"), { opacity: 0, y: 0 });
			gsap.set([q("description"), q("stats")], { height: 0, overflow: "hidden", opacity: 0 });
			gsap.set(q("title-group"), { scale: 1.25, transformOrigin: "center center" });
			gsap.set(q("bg-image"), { opacity: 0, scale: 1.25 });

			const split = new SplitText(q("main-copy"), { type: "chars" });
			gsap.set(q("main-copy"), { opacity: 1 });
			gsap.set(split.chars, { opacity: 0, y: 20 });

			const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

			tl.to(split.chars, {
				opacity: 1,
				y: 0,
				duration: 0.4,
				stagger: 0.05,
				ease: "power3.out",
			})
				.to(q("logo"), { opacity: 1, y: 0, duration: 1 })
				.to(q("tagline"), { opacity: 1, y: 0, duration: 0.3 }, "-=0.5")
				.to(q("title-group"), { scale: 1, duration: 0.6, ease: "power3.inOut" }, "+=0.2")
				.to(q("description"), { height: "auto", opacity: 1, duration: 0.55 }, "<0.3")
				.to(q("title-group"), { color: "white", duration: 0.3, ease: "power3.inOut" }, "<")
				.to(
					q("bg-color"),
					{
						backgroundColor: "var(--chakra-colors-blue-500)",
						duration: 0.3,
						ease: "power3.inOut",
					},
					"<",
				)
				.to(q("bg-image"), { opacity: 0.3, duration: 1.2, ease: "sine.inOut" }, "<")
				.to(q("bg-image"), { scale: 1, duration: 20, ease: "sine.inOut" }, "<")
				.to(q("stats"), { height: "auto", opacity: 1, duration: 1 }, "<");
		}, heroRef);

		return () => ctx.revert();
	}, [isReady]);

	return (
		<Flex
			ref={heroRef}
			as="section"
			id="hero"
			h="100dvh"
			position="relative"
			overflow="hidden"
			align="center"
		>
			{/* 背景色レイヤー */}
			<Box data-gsap="bg-color" position="absolute" inset={0} bg="white" zIndex={0} />
			{/* 背景画像レイヤー */}
			<Box
				data-gsap="bg-image"
				position="absolute"
				inset={-6}
				opacity={0}
				mixBlendMode="normal"
				pointerEvents="none"
			>
				<Image
					src={neko}
					w="100%"
					h="100%"
					objectFit="cover"
					objectPosition={{ base: "22% center", lg: "47% center" }}
				/>
			</Box>

			{/* コンテンツ */}
			<Container maxW="breakpoint-lg" px={{ base: 5, md: 8 }} position="relative" zIndex={10}>
				{/* ロゴ・タイトル部分 */}
				<VStack
					data-gsap="title-group"
					as="h1"
					color="blue.600"
					mb={6}
					textAlign="center"
					gap={0}
					style={{ transform: "scale(1.5)", transformOrigin: "center center" }}
				>
					<Text
						data-gsap="main-copy"
						as="span"
						variant="headlineMd"
						letterSpacing="wide"
						pb="3"
						opacity={0}
					>
						中学社会の勉強アプリなら
					</Text>
					{/* SVG を React コンポーネントとしてインポート */}
					<Icon
						data-gsap="logo"
						w={{ base: 150, md: 232 }}
						h="auto"
						color="inherit"
						asChild
						pb="2"
						aria-label="LYNX"
						opacity={0}
					>
						<LynxLogo />
					</Icon>
					<Text
						data-gsap="tagline"
						as="span"
						variant="titleLg"
						letterSpacing="wider"
						opacity={0}
					>
						リンクス
					</Text>
				</VStack>

				<Box
					data-gsap="description"
					mb={10}
					textAlign="center"
					color="white"
					style={{ height: 0, overflow: "hidden", opacity: 0 }}
				>
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
				<Box
					data-gsap="stats"
					color="white"
					style={{ height: 0, overflow: "hidden", opacity: 0 }}
				>
					<AppStats size="lg" />
				</Box>
			</Container>
		</Flex>
	);
}
