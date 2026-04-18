/**
 * Faq Section
 *
 * FAQ セクション
 */

import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";

export function Faq() {
	return (
		<Box as="section" bg="gray.100" color="gray.900" py={28}>
			<Container maxW="breakpoint-xl">
				{/* ヘッダー */}
				<Text
					fontFamily="en.poppins"
					fontSize="xl"
					mb={1}
					fontWeight="bold"
					textAlign="center"
				>
					FAQ
				</Text>
				<Heading as="h2" mb={16} textAlign="center">
					よくあるご質問
				</Heading>

				{/* FAQ カード */}
				<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
					<Box>
						<Heading as="h3" variant="headlineMd" mb={3}>
							無料で使えますか？
						</Heading>
						<Text variant="bodyMd">
							はい、基本機能は無料でお使いいただけます。
							一部の高度な機能はプレミアムプランでご利用いただけます。
						</Text>
					</Box>
					<Box>
						<Heading as="h3" variant="headlineMd" mb={3}>
							どの教科書に対応していますか？
						</Heading>
						<Text variant="bodyMd">
							新学習指導要領に準拠しており、主要な教科書に対応しています。
							定期テスト対策から高校受験まで幅広くカバーしています。
						</Text>
					</Box>
					<Box>
						<Heading as="h3" variant="headlineMd" mb={3}>
							オフラインでも使えますか？
						</Heading>
						<Text variant="bodyMd" mb={3}>
							一度ダウンロードしたコンテンツはオフラインでも利用可能です。
							通学中や移動中でも学習を続けられます。
						</Text>
						<Text variant="labelSm" color="gray.500">
							※ 一部機能はオンライン環境が必要です。
						</Text>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
}
