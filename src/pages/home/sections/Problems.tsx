/**
 * Problems Section
 *
 * 課題提起セクション「こんな経験ありませんか？」
 */
import {
	Box,
	type BoxProps,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	Mark,
	Text,
	VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MdArrowDropDown } from "react-icons/md";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import { Br, Section, SectionHeader } from "../../../components";
import { useStaggerReveal } from "../../../hooks/useStaggerReveal";

// ラッパー
function ProblemCard({
	title,
	children,
	...rest
}: { title: string; children: ReactNode } & BoxProps) {
	return (
		<Box shadow="neuMdWithInner" borderRadius="lg" overflow="hidden" {...rest}>
			{/* ヘッダー */}
			<Box px={4} py={3} bgImage="gradients.blue">
				<Heading as="h3" variant="titleMd" color="white" textAlign="center">
					{title}
				</Heading>
			</Box>
			{/* 下部Problems部分 */}
			<Box bg="white/50" px={4}>
				<VStack divideY="1px" divideColor="gray.300" gap={0} align="stretch">
					{children}
				</VStack>
			</Box>
		</Box>
	);
}
// 個別の内容
function CardItem({ children }: { children: ReactNode }) {
	return (
		<Flex h={"110px"} align="center" justify="center" textAlign="center">
			<Text variant="titleMd" color="gray.700">
				{children}
			</Text>
		</Flex>
	);
}

export function Problems() {
	const cardsRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.12, distance: 30, duration: 0.6 });

	return (
		<Section id="problems" bg="gray.200/80" backgroundSize="cover" backgroundPosition="center">
			<Container maxW="breakpoint-xl">
				<SectionHeader
					titleEn="Problems"
					titleJa="こんな経験ありませんか？"
					labelColor="black/20"
					titleColor="blue.500"
				/>

				{/* 3つの課題カード */}
				<Grid
					ref={cardsRef}
					templateColumns={{
						base: "1fr",
						sm: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={4}
					fontWeight="bold"
				>
					{/* 学習アプリの場合 */}
					<GridItem>
						<ProblemCard title="学習アプリの場合">
							<CardItem>
								<Mark>解説が簡潔</Mark>
								すぎて
								<Br />
								深い理解が得られない
							</CardItem>
							<CardItem>
								間違えた選択肢に解説がなく
								<Br />
								<Mark>「なぜ？」がわからずモヤモヤ</Mark>
								する
							</CardItem>
							<CardItem>
								内容が
								<Mark>教科書や受験</Mark>
								に
								<Br />
								マッチしていない
							</CardItem>
						</ProblemCard>
					</GridItem>

					{/* 参考書の場合 */}
					<GridItem>
						<ProblemCard title="参考書の場合">
							<CardItem>
								参考書・問題集・用語集など
								<Br />
								<Mark>たくさんの本を横断</Mark>
								するうちに
								<Mark>集中力が途切れる</Mark>
							</CardItem>
							<CardItem>
								章ごとや用語ごとに解説されるため
								<Br />
								<Mark>つながりや流れが見えにくい</Mark>
							</CardItem>
							<CardItem>
								スキマ時間に
								<Mark>手軽に勉強</Mark>
								しづらく
								<Br />
								学習間隔が空いて内容を忘れてしまう
							</CardItem>
						</ProblemCard>
					</GridItem>

					{/* 塾の場合 */}
					<GridItem
						colSpan={{ sm: 2, lg: 1 }}
						justifySelf={{ sm: "center", lg: "stretch" }}
					>
						<ProblemCard title="塾の場合" w={{ sm: "breakpoint-sm", lg: "full" }}>
							<CardItem>
								聞き逃した部分を
								<Mark>
									後から確認できず
									<Br />
									理解しないまま進んでしまう
								</Mark>
							</CardItem>
							<CardItem>
								<Mark>予習・復習のペース</Mark>
								を作るのが難しく
								<Br />
								授業が<Mark>一方的に聞くだけ</Mark>
								になってしまいがち
							</CardItem>
							<CardItem>
								成績アップに注力するため
								<Br />
								<Mark>興味関心</Mark>
								が広がりにくい
							</CardItem>
						</ProblemCard>
					</GridItem>
				</Grid>
				<Icon w={16} h="auto" color="blue.500" mt={6} display="block" mx="auto">
					<MdArrowDropDown />
				</Icon>
				<Flex align="end" justify="center" color="blue.500">
					<Mark>
						<Icon
							h="auto"
							w={100}
							color="inherit"
							asChild
							pr="2"
							pb={1.5}
							aria-label="LYNX"
						>
							<LynxLogo />
						</Icon>
					</Mark>
					<Mark>
						<Text variant="headlineMd">で解決しよう</Text>
					</Mark>
				</Flex>
			</Container>
		</Section>
	);
}
