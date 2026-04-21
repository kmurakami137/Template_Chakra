/**
 * Features Section
 *
 * FEATURES セクション（概要カード + 詳細機能紹介）
 */

import { Box, Container, Flex, Heading, Image, Mark, Text } from "@chakra-ui/react";
import glossaryImage from "../../../assets/1x/glossary.png";
import questionImage from "../../../assets/1x/question.png";
import stagesImage from "../../../assets/1x/stages.png";
import explanationFade2x from "../../../assets/explanation_fade@2x.png";
import explanationFade3x from "../../../assets/explanation_fade@3x.png";
import explanationFade from "../../../assets/explanation_fade.png";
import relation01 from "../../../assets/1x/relation01_1.png";
import relation02 from "../../../assets/1x/relation02.png";
import relation03 from "../../../assets/1x/relation03.png";
import {
	Br,
	ExplanationShowcase,
	FeatureDetails,
	FeatureItem,
	FeatureSummaryCard,
	StatCard,
} from "../../../components";
import { apps, formatRounded, totals } from "../../../data/apps";
import { explanationExamples } from "../../../data/explanation";
import { features } from "../../../data/features";

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
						<FeatureSummaryCard index={0}>
							<Mark>問題集×用語集×参考書</Mark>
							の役割をアプリ1つに凝縮。一つのアプリで横断的に学べるから、
							<Mark>総合的な理解</Mark>が<Mark>快適に</Mark>身につきます。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={1}>
							地理・歴史・公民合計<Mark>300万字以上</Mark>
							の解説で、「なぜ？」まで理解をサポート。
							<Mark>新学習指導要領に対応</Mark>し、教科書の内容すべてをカバーします。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={2}>
							問題や用語に関わりのある項目を表示し、簡単に解説を確認できます。つながりや流れの理解が、社会科学習の質を劇的に高めます。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={3}>
							大きな単元から細かいテーマまで、
							<Mark>{formatRounded(totals.stages, 10)}以上のステージ</Mark>
							から自由に選択。授業の進度に合わせた予習・復習も、苦手分野のピンポイント対策も
							<Mark>思いのまま</Mark>です。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={4}>
							予習・演習・復習のサイクルが自然にできる設計です。通知機能や進捗管理など、継続をサポートする機能も充実。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={5}>
							苦手な項目をわかりやすく一覧表示する「苦手ビュー」や、苦手優先出題機能など、LYNXは苦手克服を徹底してフォローします。
						</FeatureSummaryCard>
					</Flex>

					{/* 注釈 */}
					<Text variant="labelMd" color="whiteAlpha.700" my={8} textAlign="center">
						※
						学習アプリの解説の総文字数を比較。LYNXは、地理・歴史・公民分野を合計して300万字以上の解説を収録しています。
					</Text>
				</Container>
			</Box>

			{/* 詳細セクション */}
			{/* Feature 1: 問題集×用語集×参考書 */}
			<FeatureItem
				index={0}
				bg="gray.50"
				subtitle="3つの役割が、1つにつながる"
				description={
					<>
						問題を解いて疑問が生まれたら、すぐに詳しい解説へ。
						気になる用語はタップひとつで背景まで理解。
						<Br />
						3冊分の役割が
						<Mark>シームレスにつながる</Mark>ことで、
						<Mark>紙の教材では得られない学習体験</Mark>を実現します。
					</>
				}
			>
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
						footer={<StatCard label="問題数" appDataKey="questions" apps={apps} />}
					/>
					<FeatureDetails.Item
						title="スマートな用語集"
						description={
							<>
								選択した範囲の用語を、
								<Mark>重要度別に自動でリストアップ</Mark>
								。ステージ挑戦前後や、問題演習の合間など、
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
								概要だけでなく、<Mark>背景や流れまで</Mark>
								丁寧に解説。問題を解いて生まれた疑問も、用語の深い意味も、すぐに確認できます。
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
				bg="white"
				subtitle="「なぜ？」がわかる、体系的な解説"
				description={
					<Text as="span" bg="gray.50" py="1" pr="3">
						地理・歴史・公民合計300万字以上。
						<Mark>社会科アプリNo.1※のコンテンツ量</Mark>
						による、「わかりやすさ」が好評です。
						<Br />
						<Mark>新学習指導要領に対応し、中学教科書の内容を網羅</Mark>
						しています。
					</Text>
				}
				bgImage={
					<Image
						src={explanationFade}
						srcSet={`${explanationFade} 1x, ${explanationFade2x} 2x, ${explanationFade3x} 3x`}
						position="absolute"
						top={0}
						right={0}
						w="2/5"
						h="auto"
						zIndex={0}
						pointerEvents="none"
						display={{ base: "none", md: "block" }}
					/>
				}
			>
				<Text as="span" variant="labelSm" color="gray.500" display="block" mt={4}>
					※ 学習アプリの解説の総文字数を比較。Antares Works調べ。
				</Text>
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
			</FeatureItem>

			{/* 解説の実例 */}
			<ExplanationShowcase examples={explanationExamples} />

			{/* Feature 3: 関連学習 */}
			<FeatureItem
				index={2}
				bg="gray.50"
				description={
					<>
						社会科の学習は、何がきっかけとなったのか？その影響で何が起こったか？など、つながりを理解することがとても大切です。
						<Br />
						丸暗記では理解が難しい「つながり」の理解を、関連学習がサポートします。
					</>
				}
			>
				<FeatureDetails iconColor={features[2].color}>
					<FeatureDetails.Item
						title="関連キーワード機能"
						description="関連する用語をタップで確認。知識のつながりを意識した学習ができます。"
						image={relation01}
						imageAspectRatio={3 / 2}
						imageLabel="関連用語"
					/>
					<FeatureDetails.Item
						title="正解以外の選択肢にも解説"
						description="間違えた選択肢の解説を確認できるから、「なぜ？」までわかる。一問で複数の知識が身につきます。"
						image={relation02}
						imageAspectRatio={3 / 2}
						imageLabel="選択肢解説"
					/>
					<FeatureDetails.Item
						title="興味の赴くまま、詳しい解説を次々にたどれる！"
						description="理解や興味の連鎖。知りたいことをどんどん深掘りできます。"
						image={relation03}
						imageAspectRatio={3 / 2}
						imageLabel="リンク機能"
					/>
				</FeatureDetails>
			</FeatureItem>

			{/* Feature 4: 自由に選べる学習範囲 */}
			<FeatureItem
				index={3}
				bg="white"
				isLast
				subtitle="大きな範囲も、小さな範囲も、自由自在"
				description={
					<>
						LYNXは独自の<Mark>ツリー構造</Mark>で学習範囲を管理。
						「世界地理」のような大きな単元から「ヨーロッパの農業」のような細かいテーマまで、
						<Mark>自分のペースに合わせて自由に選択</Mark>できます。
						<Br />
						選んだ範囲の用語や解説を<Mark>挑戦前に確認</Mark>できるから、
						予習も復習も効率的に進められます。
					</>
				}
			>
				<FeatureDetails iconColor={features[3].color}>
					<FeatureDetails.Item
						title="自由な範囲選択"
						description="「日本の地域」のような大単元から「関東地方の自然」のような細かいテーマまで、ツリー構造で自在に絞り込み"
						image="placeholder"
						imageAspectRatio={16 / 9}
						imageLabel="予習画面"
					/>
					<FeatureDetails.Item
						title="テスト対策に最適"
						description="定期テストは学習範囲を絞って効率的に。受験対策は広い範囲でまとめて復習。目的に合わせた使い分けができる"
						image="placeholder"
						imageAspectRatio={16 / 9}
						imageLabel="演習画面"
					/>
					<FeatureDetails.Item
						title="挑戦前の確認"
						description="選んだ範囲の用語一覧や解説を事前にチェック。知識を整理してから挑戦できるので、予習にも復習にも効果的"
						image="placeholder"
						imageAspectRatio={16 / 9}
						imageLabel="復習画面"
					/>
				</FeatureDetails>
			</FeatureItem>

			{/* Feature 5: 理解が定着する学習サイクル */}
			<FeatureItem
				index={4}
				bg="gray.100"
				isLast
				subtitle="大きな範囲も、小さな範囲も、自由自在"
				description={
					<>
						LYNXは独自の<Mark>ツリー構造</Mark>で学習範囲を管理。
						「世界地理」のような大きな単元から「ヨーロッパの農業」のような細かいテーマまで、
						<Mark>自分のペースに合わせて自由に選択</Mark>できます。
						<Br />
						選んだ範囲の用語や解説を<Mark>挑戦前に確認</Mark>できるから、
						予習も復習も効率的に進められます。
					</>
				}
			>
				<FeatureDetails iconColor={features[4].color}>
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
		</Box>
	);
}
