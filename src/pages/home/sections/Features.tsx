/**
 * Features Section
 *
 * FEATURES セクション（概要カード + 詳細機能紹介）
 */

import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Mark,
	Separator,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { Br, FeatureDetails, FeatureItem, StatCard } from "../../../components";
import { apps } from "../../../data/apps";
import { features } from "../../../data/features";

import questionImage from "../../../assets/1x/question.png";
import glossaryImage from "../../../assets/1x/glossary.png";
import stagesImage from "../../../assets/1x/stages.png";
import explanationImage from "../../../assets/1x/explanation01.png";
import explanationFade from "../../../assets/explanation_fade.png";
import explanationFade2x from "../../../assets/explanation_fade@2x.png";
import explanationFade3x from "../../../assets/explanation_fade@3x.png";

export function Features() {
	return (
		<Box as="section">
			{/* 概要セクション（青背景） */}
			<Box bg="blue.600" color="white" py={28}>
				<Container maxW="breakpoint-xl">
					{/* ヘッダー */}
					<Text
						fontFamily="en.poppins"
						fontSize="3xl"
						mb={1}
						color="blue.300"
						fontWeight="bold"
						textAlign="center"
					>
						FEATURES
					</Text>
					<Heading as="h2" mb={4} letterSpacing="wide" textAlign="center">
						LYNXが選ばれる理由
					</Heading>
					<Text variant="bodyMd" mb={10} textAlign="center">
						最高峰の学習体験で、快適でありながら、深い理解をつちかいます。
						<Br />
						社会科を楽しくマスターしよう！
					</Text>

					{/* 特徴カード */}
					<Flex color="black" wrap="wrap" gap={3} justifyContent="center">
						{features.map((feature, index) => (
							<Box
								key={feature.id}
								bg="white"
								px={6}
								borderRadius="lg"
								shadow="lg"
								flexBasis={{
									base: "100%",
									sm: "calc(50% - 6px)",
									md: "calc(33.333% - 8px)",
								}}
								maxW={{
									base: "100%",
									sm: "calc(50% - 6px)",
									md: "calc(33.333% - 8px)",
								}}
							>
								<Flex py={5} align="start">
									<Text
										fontFamily="en.poppins"
										variant="displayMd"
										color="gray.300"
										lineHeight="0"
										mr="4"
										flexShrink={0}
										mt="13px"
									>
										{String(index + 1).padStart(2, "0")}
									</Text>
									<Heading as="h3" variant="headlineMd">
										{feature.label}
									</Heading>
									<Spacer />
								</Flex>
								<Separator />
								<Text
									variant="bodyMd"
									letterSpacing="wide"
									textAlign="justify"
									pt={3}
									pb={5}
								>
									{feature.shortDesc}
								</Text>
							</Box>
						))}
					</Flex>

					{/* 注釈 */}
					<Text variant="labelMd" color="whiteAlpha.700" my={8} textAlign="center">
						※
						学習アプリの解説の総文字数を比較。LYNXは、地理・歴史・公民分野を合計して300万字以上の解説を収録しています。
					</Text>
				</Container>
			</Box>

			{/* 詳細セクション（グレー背景） */}
			<Box bg="gray.50" color="gray.900" py={28}>
				<Container maxW="breakpoint-xl">
					{/* Feature 1: 問題集×用語集×参考書 */}
					<FeatureItem index={0}>
						<FeatureDetails iconColor={features[0].color}>
							<FeatureDetails.Item
								title="テストに強い問題集"
								description={
									<>
										<Mark>定期テストから高校受験まで</Mark>
										幅広く収録。自分のレベルに合わせて段階的に挑戦でき、疑問が生まれたら
										<Mark>間違えた選択肢も含めて解説で確認</Mark>できます。
									</>
								}
								image={questionImage}
								imageLabel="問題一覧画面"
								footer={
									<StatCard label="問題数" appDataKey="questions" apps={apps} />
								}
							/>
							<FeatureDetails.Item
								title="スマートな用語集"
								description={
									<>
										選択した範囲の用語を、
										<Mark>重要度別に自動でリストアップ</Mark>
										。ステージ挑戦前はもちろん、問題演習の合間やステージ終了時など、
										<Mark>様々なタイミング</Mark>
										でタップひとつで用語解説を確認できます。
									</>
								}
								image={glossaryImage}
								imageLabel="用語集画面"
								footer={<StatCard label="用語数" appDataKey="terms" apps={apps} />}
							/>
							<FeatureDetails.Item
								title="参考書レベルの解説"
								description={
									<>
										概略だけでなく、<Mark>背景や流れまで</Mark>
										丁寧に解説。問題を解いて生まれた疑問も、用語の深い意味も、すぐに確認できます。
										<Mark>暗記で終わらない、応用力を育てる</Mark>解説です。
									</>
								}
								image={stagesImage}
								imageLabel="範囲選択画面"
								footer={
									<StatCard
										label="コンテンツ文字数"
										appDataKey="totalChars"
										apps={apps}
									/>
								}
							/>
						</FeatureDetails>
					</FeatureItem>

					{/* Feature 2: 超充実の解説 */}
					<FeatureItem
						index={1}
						bgImage={
							<Image
								src={explanationFade}
								srcSet={`${explanationFade} 1x, ${explanationFade2x} 2x, ${explanationFade3x} 3x`}
								position="absolute"
								top={0}
								right={0}
								w="1/3"
								h="auto"
								zIndex={0}
								pointerEvents="none"
								display={{ base: "none", md: "block" }}
							/>
						}
					>
						<FeatureDetails iconColor={features[1].color}>
							<FeatureDetails.Item
								title="「なぜ？」がわかる、体系的な解説"
								description="概要に加えて、学習のポイントや関連する内容、流れを理解するために必要な情報など、様々な角度から理解を深められるように解説を構成しています。応用問題にも対応できる力をつちかいます。"
							/>
							<FeatureDetails.Item
								title="幅広いレベルに対応。受験に強い！"
								description="発展的な解説までカバーしているため、定期テストから難関高校受験まで活用できます。"
							/>
							<FeatureDetails.Item
								title="見やすいUIも好評です"
								description="重要ポイントはマーカーで強調。関連用語もナビゲート。ステージへの挑戦前も、挑戦後も、間違えた選択肢も。解説にすぐアクセスできます。"
							/>
						</FeatureDetails>
						<Box></Box>
					</FeatureItem>

					{/* Feature 3: 関連学習 */}
					<FeatureItem index={2}>
						<FeatureDetails iconColor={features[2].color}>
							<FeatureDetails.Item
								title="用語同士の関連"
								description="関連する用語をタップで確認。知識のつながりを意識した学習ができます。"
								image={explanationImage}
								imageAspectRatio={16 / 9}
								imageLabel="関連用語"
							/>
							<FeatureDetails.Item
								title="選択肢の関連"
								description="すべての選択肢に解説が付いているから、一問で複数の知識が身につきます。"
								image="placeholder"
								imageAspectRatio={16 / 9}
								imageLabel="選択肢解説"
							/>
							<FeatureDetails.Item
								title="興味の赴くまま、詳しい解説を次々にたどれる！"
								description="理解や興味の連鎖。知りたいことをどんどん深掘りできます。"
								image="placeholder"
								imageAspectRatio={16 / 9}
								imageLabel="リンク機能"
							/>
						</FeatureDetails>
					</FeatureItem>

					{/* Feature 4: 理解が定着する学習サイクル */}
					<FeatureItem index={3} isLast>
						<FeatureDetails layout="row" iconColor={features[3].color}>
							<FeatureDetails.Item
								title="予習"
								description="範囲を選ぶと、その範囲の重要度ごとの用語一覧や、間違えたことのある用語一覧が表示されます。詳しい解説にアクセスして、挑戦の準備をしましょう。"
								image="placeholder"
								imageAspectRatio={16 / 9}
								imageLabel="予習画面"
							/>
							<FeatureDetails.Item
								title="演習"
								description="ステージでは、1問挑戦ごとに解説が表示され、復習ができます。間違えた選択肢や、その他の選択肢の解説も確認できるため、理解が深まります。"
								image="placeholder"
								imageAspectRatio={16 / 9}
								imageLabel="演習画面"
							/>
							<FeatureDetails.Item
								title="復習"
								description="ステージ挑戦後も全体の復習ができます。間違えた問題はよく確認して次の挑戦にそなえましょう。理解度や進捗率もチェックして、マスターを目指そう。"
								image="placeholder"
								imageAspectRatio={16 / 9}
								imageLabel="復習画面"
							/>
						</FeatureDetails>
					</FeatureItem>
				</Container>
			</Box>
		</Box>
	);
}
