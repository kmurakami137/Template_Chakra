import { Box, Container, Flex, Icon, Image, Mark, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../../lib/gsap";
import { useParallax } from "../../../hooks/useParallax";
import { useStaggerReveal } from "../../../hooks/useStaggerReveal";

import ab01 from "../../../assets/iklas-7PdkAgRP69Y-unsplash_custom2.jpg";
// import ab09 from "../../../assets/iklas-qlW7RwHZVG8-unsplash.jpg";
import img01 from "../../../assets/img01.png";
import img02 from "../../../assets/img02.png";
import img05 from "../../../assets/img05_trim.png";
import img06 from "../../../assets/img06.png";
import img07 from "../../../assets/img07-2.png";
import LynxLogo from "../../../assets/Lynx-Logo.svg?react";
import img08 from "../../../assets/nigate02.png";
import relation01 from "../../../assets/relation01-2.png";
import relation02 from "../../../assets/relation02-2.png";
import relation03 from "../../../assets/relation03.jpg";
import {
	Br,
	ExplanationShowcase,
	FeatureDetails,
	FeatureItem,
	FeatureSummaryCard,
	Section,
	SectionHeader,
	StatCard,
} from "../../../components";
import { apps, formatRounded, totals } from "../../../data/apps";
import { explanationExamples } from "../../../data/explanation";
// import { features } from "../../../data/features";

export function Features() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const overviewBgRef = useParallax<HTMLDivElement>({ speed: 0.6, scrub: 1.2 });
	const cardsRef = useStaggerReveal<HTMLDivElement>({
		stagger: 0.07,
		distance: 24,
		duration: 0.55,
	});

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			const items = self.selector?.("[data-gsap-item]") ?? [];
			for (const item of items) {
				const q = (attr: string) => item.querySelector(`[data-gsap="${attr}"]`);

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: q("number"),
						start: "top 70%",
						toggleActions: "play none none reverse",
					},
				});

				tl.fromTo(q("number"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
				if (q("heading")) {
					tl.fromTo(
						q("heading"),
						{ opacity: 0, y: 40 },
						{ opacity: 1, y: 0, duration: 0.7 },
						"<0.1",
					);
				}
				if (q("right")) {
					tl.fromTo(
						q("right"),
						{ opacity: 0, x: 40 },
						{ opacity: 1, x: 0, duration: 0.7 },
						"<0.15",
					);
				}
				if (q("description")) {
					tl.fromTo(
						q("description"),
						{ opacity: 0, y: 20 },
						{ opacity: 1, y: 0, duration: 0.7, delay: 0.25 },
						"<0.1",
					);
				}
				if (q("details")) {
					tl.fromTo(
						q("details"),
						{ opacity: 0, y: 30 },
						{ opacity: 1, y: 0, duration: 0.6, delay: 0.5 },
						"<0.2",
					);
				}

				// 背景レイヤー: 矩形 → 大三角形 → 小三角形 を1つの動きとして
				if (q("bg")) {
					tl.set(
						q("bg"),
						{
							clipPath: "polygon(0 0, 100vw 0, 100vw 100%, 0 100%)",
							backgroundColor: "#fff",
						},
						0,
					).to(
						q("bg"),
						{
							ease: "power4.inOut",
							keyframes: [
								{
									clipPath: "polygon(0 0, 100vw 0, 100vw 100%, 0 100%)",
									backgroundColor: "rgb(200 233 255)",
									duration: 0.05,
								},
								{
									// ① 準備（矩形→大三角形）: 短く
									clipPath: "polygon(0 0, 100vw 0, 0% 100vw, 0 100%)",
									backgroundColor: "rgb(200 233 255)",
									duration: 0.1,
									ease: "none",
								},
								{
									// ② メイン（大三角形→小三角形）: 長く
									clipPath: "polygon(0 0, 27dvw 0, 0% 27dvw, 0 0%)",
									backgroundColor: "rgb(200 233 255)",
									duration: 0.9,
									ease: "none",
								},
								{
									// ② メイン（大三角形→小三角形）: 長く
									clipPath: "polygon(0 0, 30dvw 0, 0% 30dvw, 0 0%)",
									duration: 0.3,
									ease: "none",
								},
							],
						},
						0,
					);
				}
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<Box ref={sectionRef}>
			{/* 概要セクション（青背景） */}
			<Section id="features" color="gray.800" position="relative" overflow="hidden">
				{/* パララックス背景レイヤー: 親より大きくして y 方向に移動させる */}
				<Box ref={overviewBgRef} position="absolute" zIndex={0} overflow="hidden">
					<Image
						src={ab01}
						position="absolute"
						inset={0}
						w="100%"
						h="100%"
						objectFit="cover"
						objectPosition="center"
					/>
				</Box>
				{/* オーバーレイ */}
				{/* <Box position="absolute" inset={0} bg="blue.600/20" zIndex={1} /> */}
				<Container maxW="breakpoint-xl" position="relative" zIndex={2}>
					<SectionHeader
						titleEn="FEATURES"
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
								が選ばれる理由
							</Flex>
						}
						description={
							<>最高峰の学習体験で、快適でありながら、深い理解をつちかいます。</>
						}
						labelColor="black/40"
						descriptionColor="black/70"
					/>

					{/* 特徴カード */}
					<Flex ref={cardsRef} color="black" wrap="wrap" gap={3} justifyContent="center">
						<FeatureSummaryCard index={0}>
							<Mark>問題集×用語集×参考書</Mark>
							の役割をアプリ1つに凝縮。一つのアプリで横断的に学べるから、
							<Mark>総合的な理解が快適に</Mark>身につきます。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={1}>
							<Mark>社会科アプリNo.1</Mark>
							<Text as="sup">※</Text>
							のコンテンツ量 で、「なぜ？」まで理解をサポート。
							<Mark>新学習指導要領に対応し、教科書の内容すべてをカバー</Mark>します。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={2}>
							問題や用語に関わりのある項目を表示し、簡単に解説を確認できます。
							<Mark>
								「つながり」や「流れ」の理解が、社会科学習の質を劇的に高めます
							</Mark>
							。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={3}>
							大きな単元から細かいテーマまで、
							<Mark>
								{formatRounded(totals.stages, 10)}以上のステージ から自由に選択
							</Mark>
							。授業の進度に合わせた予習・復習も、苦手分野のピンポイント対策も
							思いのままです。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={4}>
							<Mark>予習・挑戦・復習</Mark>
							のサイクルが自然にできる設計です。通知機能や進捗管理など、
							<Mark>継続をサポート</Mark>する機能も充実。
						</FeatureSummaryCard>

						<FeatureSummaryCard index={5}>
							苦手な項目をわかりやすく一覧表示する「苦手ビュー」や、苦手優先出題機能など、LYNXは
							<Mark>苦手克服を徹底してフォロー</Mark>します。
						</FeatureSummaryCard>
					</Flex>

					{/* 注釈 */}
					<Text variant="labelMd" color="black/70" my={8} textAlign="center">
						※ 学習アプリの解説の平均文字数を比較。（Antares Works調べ）
						LYNXは、地理・歴史・公民分野を合計して300万字以上のコンテンツを収録しています。
					</Text>
				</Container>
			</Section>

			{/* 詳細セクション */}
			{/* Feature 1: 問題集×用語集×参考書 */}
			<FeatureItem
				index={0}
				subtitle="3つの役割が、1つにつながる"
				description={
					<Box>
						LYNXは<Mark>問題集に用語集を同梱</Mark>。また、
						<Mark>受験参考書レベルの詳しい解説</Mark>が特徴です。
						<Br />
						3冊分の役割が
						<Mark>シームレスにつながる</Mark>ことで、
						<Mark>紙の教材では得られない学習体験</Mark>を実現します。
					</Box>
				}
				rightArea={
					<Box w={{ base: "full", md: "500px" }}>
						<Image src={img01} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails pt={0}>
					<FeatureDetails.Item
						title="テストに強い問題集"
						description={
							<>
								<Mark>定期テストから高校受験まで 幅広く対応。</Mark>
								自分のレベルに合わせて段階的に挑戦できます。
							</>
						}
						// image={questionImage}
						footer={<StatCard label="問題数" appDataKey="questions" apps={apps} />}
					/>
					<FeatureDetails.Item
						title="スマートな用語集"
						description={
							<>
								選択した範囲の用語を、
								<Mark>重要度別に自動でリストアップ</Mark>。 様々なタイミング
								でタップひとつで用語解説を確認できます。
							</>
						}
						// image={glossaryImage}
						footer={<StatCard label="用語数" appDataKey="terms" apps={apps} />}
					/>
					<FeatureDetails.Item
						title="参考書レベルの解説"
						description={
							<>
								概要だけでなく、<Mark>背景や流れまで 丁寧に解説</Mark>
								。問題を解いて生まれた疑問も、用語の深い意味も、すぐに確認できます。
							</>
						}
						// image={stagesImage}
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
				// subtitle="「なぜ？」がわかる、体系的な解説"
				description={
					<Box mb={{ base: 0, lg: 20 }}>
						<Text as="span" bg="inherit" py="1" pb={15} pr="3">
							地理・歴史・公民合計300万字以上。
							<Mark>
								社会科アプリNo.1<Text as="sup">※</Text>のコンテンツ量
							</Mark>
							による、「わかりやすさ」が好評です。
							<Br />
							<Mark>新学習指導要領に対応し、中学教科書の内容を網羅</Mark>
							しています。
						</Text>
						<Text
							as="span"
							variant="labelSm"
							color="gray.500"
							display="block"
							mt={4}
							textAlign={{ base: "center", lg: "justify" }}
						>
							※ 学習アプリの解説の平均文字数を比較。（Antares Works調べ）
						</Text>
					</Box>
				}
				rightArea={
					<Box w={{ base: "full", sm: "400px" }} rotate="15deg">
						<Image src={img02} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails pt={0}>
					<FeatureDetails.Item
						title="「なぜ？」がわかる、体系的な解説"
						description={
							<>
								概要に加えて、学習のポイントや関連する内容、流れを理解するために必要な情報など、
								<Mark>様々な角度から理解を深められるように解説が構成</Mark>
								されているため、応用問題にも対応できる力をつちかいます。
							</>
						}
					/>
					<FeatureDetails.Item
						title="幅広いレベルに対応。受験に強い！"
						description={
							<>
								基本的な内容だけでなく、高校受験に向けた発展的な内容までカバーしています。
								<Mark>レベルに合わせて難易度を選択</Mark>
								できるため、定期テストから難関高校受験まで対応できます。
							</>
						}
					/>
					<FeatureDetails.Item
						title="学習しやすいUIも好評です"
						description={
							<>
								重要ポイントはマーカーで強調。関連用語もナビゲート。
								学習したいステージへの挑戦前にも、挑戦後にも、
								<Mark>詳しい解説にすぐにアクセスできます</Mark>。
							</>
						}
					/>
				</FeatureDetails>
				{/* 解説の実例 */}
				<ExplanationShowcase examples={explanationExamples} />
			</FeatureItem>

			{/* Feature 3: 関連学習 */}
			<FeatureItem
				index={2}
				description={
					<>
						社会科の学習では、何がきっかけでその影響で何が起こったか？など、
						<Br />
						つながりを理解することがとても大切です。
						<Br />
						<Mark>暗記学習では難しい「つながり」の理解を、LYNXはサポート</Mark>します。
					</>
				}
				rightArea={
					<Box w={{ base: "full", md: "570px" }}>
						<Image src={img07} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails>
					<FeatureDetails.Item
						title="関連キーワード機能"
						description={
							<>
								解説などに関連キーワードを表示。
								<Mark>関連する用語をワンタップで簡単に確認</Mark>
								できます。知識のつながりを意識した学習ができます。
							</>
						}
						image={relation01}
						imageAspectRatio={3 / 2}
					/>
					<FeatureDetails.Item
						title="正解以外の選択肢にも解説"
						description={
							<>
								<Mark>間違えた選択肢の解説</Mark>
								もLYNXでは確認できます。「なぜ？」まで理解できるから、一問で広がりのある知識が身につきます。
							</>
						}
						image={relation02}
						imageAspectRatio={3 / 2}
					/>
					<FeatureDetails.Item
						title="興味の赴くまま、解説を次々にたどれる！"
						description={
							<>
								一つの問題や用語から、<Mark>連鎖的に理解が広がります</Mark>
								。興味のおもむくまま、知りたいことをどんどん深掘りしましょう。
							</>
						}
						image={relation03}
						imageAspectRatio={3 / 2}
					/>
				</FeatureDetails>
			</FeatureItem>

			{/* Feature 4: 自由に選べる学習範囲 */}
			<FeatureItem
				index={3}
				// subtitle="大きな範囲も、小さな範囲も、自由自在"
				description={
					<Box>
						<Box>
							地理／歴史／公民<Mark>合計550ステージ以上</Mark>
							から、細かく範囲を選んで学習できます。 <Br />
							範囲選択が柔軟だから、
							<Mark>自分のペースに合わせて効率的な学習</Mark>ができます。
						</Box>
						<Box w={400} mt={4} shadow="lg">
							<StatCard label="ステージ数" appDataKey="stages" apps={apps} />
						</Box>
					</Box>
				}
				rightArea={
					<Box w={{ base: "full", md: "550px" }} mb={6}>
						<Image src={img05} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails>
					<FeatureDetails.Item
						title="大きな範囲も、小さな範囲も"
						description={
							<>
								「日本の地域」のような<Mark>大きな範囲</Mark>
								から「関東地方の自然」のような<Mark>小さな範囲</Mark>まで、
								<Mark>自由に選んで学習</Mark>できます。
							</>
						}
						// image={stagesImage}
						// imageAspectRatio={1 / 1}
					/>
					<FeatureDetails.Item
						title="テスト対策に最適"
						description={
							<>
								学習範囲を柔軟に選択して効率的に学習できるため、
								<Mark>定期テスト対策</Mark>
								に最適。広い範囲もまとめて復習できるため、
								<Mark>受験対策</Mark>も効率的に行えます。
							</>
						}
						// image="placeholder"
						// imageAspectRatio={1 / 1}
					/>
					<FeatureDetails.Item
						title={<>苦手な範囲を見つけて、重点的に対策</>}
						description={
							<>
								範囲ごとの進捗率・理解度をグラフで確認。
								<Mark>どこまで進んだか、どこが苦手かが一目でわかる</Mark>ので、
								自分のペースで弱点を克服できます。
							</>
						}
						// image="placeholder"
						// imageAspectRatio={1 / 1}
					/>
				</FeatureDetails>
			</FeatureItem>

			{/* Feature 5: 理解が定着する学習サイクル */}
			<FeatureItem
				index={4}
				// subtitle="大きな範囲も、小さな範囲も、自由自在"
				description={
					<>
						<Mark>「予習」・「挑戦」・「復習」</Mark>
						の学習サイクルが自然にできる設計です。
						<Br />
						通知機能や進捗管理、苦手分析など、<Mark>継続学習</Mark>
						を強力にサポートする機能も充実。
					</>
				}
				rightArea={
					<Box w={{ base: "full", md: "500px" }}>
						<Image src={img06} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails>
					<FeatureDetails.Item
						title="ステージ前に重要用語と苦手を確認"
						description={
							<>
								ステージ選択時に、<Mark>重要度</Mark>別の用語一覧と
								<Mark>苦手な用語</Mark>
								をまとめて確認。詳しい解説を読んで
								<Mark>理解を深めてから、ステージに挑戦</Mark>できます。
							</>
						}
						// image="placeholder"
						// imageAspectRatio={16 / 9}
					/>
					<FeatureDetails.Item
						title="ステージ挑戦中に即復習！"
						description={
							<>
								ステージでは、1問挑戦ごとに解説が表示され、復習ができます。
								<Mark>正答以外の選択肢や、関連キーワードの解説も確認</Mark>
								できるため、理解が深まります 。
							</>
						}
						// image="placeholder"
						// imageAspectRatio={16 / 9}
					/>
					<FeatureDetails.Item
						title="終わるたびに、自分の成長が見える" //ステージ後に間違いをまとめて復習
						description={
							<>
								ステージ後は間違えた問題を振り返り、解説で理解を補強。
								理解度・進捗率の推移が確認できるので、
								<Mark>続けるほど弱点が減っていく</Mark>実感を得られます。
							</>
						}
						// image="placeholder"
						// imageAspectRatio={16 / 9}
					/>
				</FeatureDetails>
				{/* <FeatureDetails columns={2}>
					<FeatureDetails.Item
						title="通知機能"
						description={
							<>
								ステージでは、1問挑戦ごとに解説が表示され、復習ができます。
								<Mark>間違えた選択肢や、その他の選択肢の解説も確認</Mark>
								できるため、理解が深まります 。
							</>
						}
					/>
					<FeatureDetails.Item
						title="グラフ表示"
						description={
							<>
								ステージ挑戦後も全体の復習ができます。間違えた問題はよく確認して次の挑戦にそなえましょう。理解度や進捗率もチェックして、マスターを目指そう。
							</>
						}
					/>
				</FeatureDetails> */}
			</FeatureItem>
			{/* Feature 6: 苦手克服を手厚くサポート */}
			<FeatureItem
				index={5}
				isLast
				// subtitle="苦手を「見える化」して、自然と克服できる"
				description={
					<>
						「ニガテビュー」で<Mark>苦手な用語を一覧表示</Mark>。
						<Br />
						間違えた問題を優先的に出題する機能で、<Mark>効率的に弱点を克服</Mark>。
						<Br />
						進捗率・理解度をグラフで可視化するから、定期テスト前の総復習も計画的に進められます。
					</>
				}
				rightArea={
					<Box w={{ base: "full", md: "500px" }}>
						<Image src={img08} w="full" h="auto" zIndex={0} pointerEvents="none" />
					</Box>
				}
				// bgImageUrl={ab09}
			>
				<FeatureDetails>
					<FeatureDetails.Item
						title="「ニガテビュー」で苦手を可視化"
						description={
							<>
								間違えたことのある用語を<Mark>カード形式で一覧表示</Mark>。
								<Mark>ステージ前・ステージ後の要所で自然に目に入る</Mark>
								から、<Mark>苦手を意識した学習が自然と習慣</Mark>
								になります。グラフ表示と組み合わせて、自分の弱点がひと目でわかります。
							</>
						}
					/>
					<FeatureDetails.Item
						title="苦手な問題を優先出題"
						description={
							<>
								<Mark>苦手な問題が優先的に出題</Mark>
								する「間違い優先モード」を搭載。ステージを繰り返すうちに
								<Mark>自然に弱点の克服</Mark>ができます。
							</>
						}
					/>
					<FeatureDetails.Item
						title="LYNXで、苦手を得意に変えよう！"
						description={
							<>
								LYNXは、<Mark>間違えた選択肢にも詳しい解説付き</Mark>。
								<Mark>関連用語や流れ</Mark>もその場で確認できます。
								<Mark>本質的な理解</Mark>
								をサポートする機能が、苦手克服をあらゆる面で後押しします。
							</>
						}
					/>
				</FeatureDetails>
			</FeatureItem>
		</Box>
	);
}
