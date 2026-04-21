/**
 * Problems Section
 *
 * 課題提起セクション「こんな経験ありませんか？」
 */

import {
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Mark,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Br } from "../../../components";

export function Problems() {
	return (
		<Box as="section" bg="gray.100" color="gray.900" py={20}>
			<Container maxW="breakpoint-xl">
				{/* ヘッダー */}
				<Text
					fontFamily="en.poppins"
					fontSize="3xl"
					mb={1}
					color="gray.300"
					fontWeight="bold"
					textAlign="center"
				>
					Problems
				</Text>
				<Heading as="h2" mb={10} letterSpacing="wide" textAlign="center">
					こんな経験があれば
					<Br />
					いちどLYNXを使ってみよう
				</Heading>

				{/* 3つの課題カード */}
				<Grid
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
						<Box shadow="lg" borderRadius="lg" overflow="hidden">
							<Box bg="blue.600" px={4} py={3}>
								<Heading as="h3" variant="titleMd" color="white" textAlign="center">
									学習アプリの場合
								</Heading>
							</Box>
							<Box bg="white" px={4}>
								<VStack
									divideY="1px"
									divideColor="gray.300"
									gap={0}
									align="stretch"
								>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											<Mark>解説が簡潔</Mark>
											すぎて
											<Br />
											深い理解が得られない
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											間違えた選択肢に解説がなく
											<Br />
											<Mark>「なぜ？」がわからずモヤモヤ</Mark>
											する
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											内容が
											<Mark>教科書や受験</Mark>
											に
											<Br />
											マッチしていない
										</Text>
									</Flex>
								</VStack>
							</Box>
						</Box>
					</GridItem>

					{/* 参考書の場合 */}
					<GridItem>
						<Box shadow="lg" borderRadius="lg" overflow="hidden">
							<Box bg="blue.600" px={4} py={3}>
								<Heading as="h3" variant="titleMd" color="white" textAlign="center">
									参考書の場合
								</Heading>
							</Box>
							<Box bg="white" px={4}>
								<VStack
									divideY="1px"
									divideColor="gray.300"
									gap={0}
									align="stretch"
								>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											参考書・問題集・用語集など
											<Br />
											<Mark>たくさんの本を横断</Mark>
											するうちに
											<Mark>集中力が途切れる</Mark>
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											章ごとや用語ごとに解説されるため
											<Br />
											<Mark>つながりや流れが見えにくい</Mark>
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											スキマ時間に
											<Mark>手軽に勉強</Mark>
											しづらく
											<Br />
											学習間隔が空いて内容を忘れてしまう
										</Text>
									</Flex>
								</VStack>
							</Box>
						</Box>
					</GridItem>

					{/* 塾の場合 */}
					<GridItem
						colSpan={{ sm: 2, lg: 1 }}
						justifySelf={{ sm: "center", lg: "stretch" }}
					>
						<Box
							w={{ sm: "breakpoint-sm", lg: "full" }}
							shadow="lg"
							borderRadius="lg"
							overflow="hidden"
						>
							<Box bg="blue.600" px={4} py={3}>
								<Heading as="h3" variant="titleMd" color="white" textAlign="center">
									塾の場合
								</Heading>
							</Box>
							<Box bg="white" px={4}>
								<VStack
									divideY="1px"
									divideColor="gray.300"
									gap={0}
									align="stretch"
								>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											聞き逃した部分を
											<Mark>
												後から確認できず
												<Br />
												理解しないまま進んでしまう
											</Mark>
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											<Mark>予習・復習のペース</Mark>
											を作るのが難しく
											<Br />
											授業が<Mark>一方的に聞くだけ</Mark>
											になってしまいがち
											<Br />
										</Text>
									</Flex>
									<Flex h={28} align="center" justify="center" textAlign="center">
										<Text variant="titleLg">
											成績アップに注力するため
											<Br />
											<Mark>興味関心</Mark>
											が広がりにくい
										</Text>
									</Flex>
								</VStack>
							</Box>
						</Box>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
}
