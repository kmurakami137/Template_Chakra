/**
 * Intro Section
 *
 * 「暗記の先を行く」セクション - 3つの特徴カード
 */

import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Icon,
	Text,
} from "@chakra-ui/react";
import { Br } from "../../../components";

import { LiaCrownSolid } from "react-icons/lia";

export function Intro() {
	return (
		<Box as="section" bg="white" color="black" py={20}>
			<Container maxW="breakpoint-xl">
				{/* ヘッダー */}
				<Box mb={8} textAlign="center">
					<Heading as="h2" mb={4}>
						「暗記」の先を行く、「理解」する学習で、
						<Br />
						スキマ時間に成績アップしよう！
					</Heading>
					<Text
						variant="bodyMd"
						letterSpacing="wide"
						textAlign={{ base: "justify", md: "center" }}
					>
						LYNXは暗記学習にとどまらず、「知識のつながり」や「文脈の把握」を通じて、
						<Br />
						深い理解を可能にする勉強アプリです。
					</Text>
				</Box>

				{/* 3つの特徴カード */}
				<Container maxW="breakpoint-lg" color="white">
					<Grid
						templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
						gap={4}
						alignItems="stretch"
					>
						{/* カード1 */}
						<GridItem>
							<Box
								p={4}
								borderRadius="xl"
								bgImage="gradients.blue"
								shadow="lg"
								textAlign="center"
								py={8}
								h="full"
							>
								<Icon fontSize="4xl" mb={2}>
									<LiaCrownSolid />
								</Icon>
								<Text variant="titleMd" letterSpacing="wide" mb={1}>
									社会科アプリNo.1の
								</Text>
								<Heading as="h3">詳しい解説</Heading>
							</Box>
						</GridItem>

						{/* カード2 */}
						<GridItem>
							<Box
								p={4}
								borderRadius="xl"
								bgImage="gradients.green"
								shadow="lg"
								textAlign="center"
								py={8}
								h="full"
							>
								<Icon fontSize="4xl" mb={2}>
									<LiaCrownSolid />
								</Icon>
								<Text variant="titleMd" letterSpacing="wide" mb={1}>
									定期テストから高校受験まで
								</Text>
								<Heading as="h3">テストに強い</Heading>
							</Box>
						</GridItem>

						{/* カード3 */}
						<GridItem>
							<Box
								p={4}
								borderRadius="xl"
								bgImage="gradients.purple"
								shadow="lg"
								textAlign="center"
								py={8}
								h="full"
							>
								<Icon fontSize="4xl" mb={2}>
									<LiaCrownSolid />
								</Icon>
								<Text variant="titleMd" letterSpacing="wide" mb={1}>
									問題集×用語集×参考書
								</Text>
								<Heading as="h3">快適な学習体験</Heading>
							</Box>
						</GridItem>
					</Grid>
				</Container>
				<Container maxW="breakpoint-md" mt={10}>
					<Box
						borderRadius="full"
						py={3}
						px={2}
						borderWidth={1}
						borderColor="black"
						textAlign="center"
					>
						<Text variant="headlineMd" fontWeight="black" color="black">
							新学習指導要領対応 / 学校教科書対応 / 高校受験対応
						</Text>
					</Box>
				</Container>

				{/* 注釈 */}
				<Text variant="labelMd" my={8} textAlign="center">
					※
					学習アプリの解説の平均文字数を比較。LYNXは、地理・歴史・公民分野を総合して、平均700字以上、合計300万字以上の解説を収録しています。
				</Text>
			</Container>
		</Box>
	);
}
