/**
 * Intro Section
 *
 * 「暗記の先を行く」セクション - 3つの特徴カード
 */

import { Box, Container, Flex, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import { LiaCrownSolid } from "react-icons/lia";

import { Br, Section, SectionHeader } from "../../../components";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import { useStaggerReveal } from "../../../hooks/useStaggerReveal";

export function Intro() {
	const cardsRef = useStaggerReveal<HTMLDivElement>({ stagger: 0.1, distance: 30, duration: 0.6 });

	return (
		<Section id="about" bg="gray.100" color="black">
			<Container maxW="breakpoint-xl">
				<SectionHeader
					titleEn="About LYNX"
					titleJa={
						<Flex align="end" justify={"center"}>
							<Icon
								h={9}
								w="auto"
								color="inherit"
								asChild
								pr="2"
								pb={2}
								aria-label="LYNX"
							>
								<LynxLogo />
							</Icon>
							で「暗記」の先へ
						</Flex>
					}
					description={
						<>
							LYNXは暗記学習にとどまらず、「知識のつながり」や「文脈の把握」を通じて、
							<Br />
							深い理解を可能にする勉強アプリです。
						</>
					}
					mb={8}
					titleColor="blue.600"
				/>

				{/* 3つの特徴カード */}
				<Container maxW="breakpoint-lg" color="white">
					<Grid
						ref={cardsRef}
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
								textAlign="center"
								py={8}
								h="full"
								shadow="neuMdWithInner"
							>
								<Icon fontSize="4xl" mb={2}>
									<LiaCrownSolid />
								</Icon>
								<Text variant="titleMd" letterSpacing="wide" mb={1}>
									社会科アプリNo.1<Text as="sup">※</Text>の
								</Text>
								<Heading as="h3">詳しい解説</Heading>
							</Box>
						</GridItem>

						{/* カード2 */}
						<GridItem>
							<Box
								p={4}
								borderRadius="xl"
								bgImage="gradients.blue"
								textAlign="center"
								py={8}
								h="full"
								shadow="neuMdWithInner"
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
								bgImage="gradients.blue"
								textAlign="center"
								py={8}
								h="full"
								shadow="neuMdWithInner"
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
						// borderWidth={1}
						// borderColor="blue.600"
						textAlign="center"
						bg="blue.100"
						shadow="neuMdWithInner"
					>
						<Text variant="headlineSm" fontWeight="black" color="blue.600">
							新学習指導要領対応 / 学校教科書対応 / 高校受験対応
						</Text>
					</Box>
				</Container>

				{/* 注釈 */}
				<Text variant="labelMd" mt={10} textAlign="center" color="black/60">
					※ 学習アプリの解説の平均文字数を比較。（Antares Works調べ）
					<Br />
					LYNXは、地理・歴史・公民分野を総合して、平均700字以上、合計300万字以上の解説を収録しています。
				</Text>
			</Container>
		</Section>
	);
}
