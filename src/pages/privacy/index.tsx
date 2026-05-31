import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { OWNER, SEO, SITE } from "../../data/site";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<Box as="section" mb={8}>
			<Heading as="h2" variant="titleMd" mb={3}>
				{title}
			</Heading>
			{children}
		</Box>
	);
}

function P({ children }: { children: React.ReactNode }) {
	return (
		<Text variant="bodyMd" mb={3} color="gray.700">
			{children}
		</Text>
	);
}

function Li({ children }: { children: React.ReactNode }) {
	return (
		<Text as="li" variant="bodyMd" color="gray.700" ml={4} mb={1} listStyleType="disc">
			{children}
		</Text>
	);
}

export function PrivacyPage() {
	return (
		<>
			<Helmet>
				<title>{`プライバシーポリシー・利用規約${SEO.titleSeparator}${SITE.name}`}</title>
				<meta name="description" content={`${SITE.name}のプライバシーポリシー・利用規約`} />
				<meta name="robots" content="noindex" />
			</Helmet>

			<Box minH="100dvh" display="flex" flexDirection="column">
				{/* ヘッダー */}
				<Box bg="blue.800" py={6} px={6}>
					<Container maxW="breakpoint-lg">
						<Link asChild textDecoration="none" _hover={{ opacity: 0.8 }}>
							<RouterLink to="/">
								<Text color="white" fontWeight="bold" fontSize="sm">
									← {SITE.name}
								</Text>
							</RouterLink>
						</Link>
					</Container>
				</Box>

				{/* 本文 */}
				<Box flexGrow={1} bg="white">
					<Container maxW="breakpoint-lg" py={16} px={{ base: 6, md: 10 }}>
						<Heading as="h1" variant="displaySm" mb={2}>
							利用規約・プライバシーポリシー
						</Heading>
						<Text fontSize="sm" color="gray.400" mb={12}>
							{SITE.name}
						</Text>

						<P>
							{OWNER.nameEn}（以下「当方」といいます）は、当方が開発・運用・提供するサービス「LYNX」（以下「本サービス」といいます）において個人情報を適切に保護することが重要であると認識し、以下のとおり個人情報保護方針を定め、これを実行、維持します。
						</P>

						<Section title="1. 定義">
							<P>
								個人情報とは、氏名、生年月日、性別、電話番号、電子メールアドレス、職業、勤務先等個人を識別しうる情報をいいます。これには、他の情報と容易に照合することができることによって特定の個人を識別することができる情報も含まれます。
							</P>
						</Section>

						<Section title="2. 適用範囲">
							<P>「LYNX」シリーズの全てのサービスに対して本プライバシーポリシーは適用されます。</P>
							<P>
								個別の情報収集のあるサービスにおけるプライバシー保護に関する詳細は、サービス別のプライバシーポリシーに従います。本プライバシーポリシー及びサービス別のプライバシー保護に基づき個人情報は管理されます。
							</P>
							<P>リンク先など他事業者等による個人情報収集は、本プライバシーポリシーの適用範囲ではございません。</P>
						</Section>

						<Section title="3. 収集する情報及び利用方法">
							<P>当方は本サービスにおいて、次の情報を取得及び利用する場合があります。</P>

							<Heading as="h3" variant="titleSm" mb={2} mt={4}>
								3-1 お問い合わせやご意見を頂く際の個人情報の収集
							</Heading>
							<Box as="ul" mb={4}>
								<Li>電子メールアドレス、ユーザー名、パスワード等</Li>
								<Li>Cookie</Li>
								<Li>ログ（IPアドレス、ブラウザ種類、ブラウザ言語等）</Li>
								<Li>端末機器情報</Li>
							</Box>

							<Heading as="h3" variant="titleSm" mb={2} mt={4}>
								3-2 アプリケーションの利用状況の収集
							</Heading>
							<P>
								当方が配信するアプリでは、利用状況解析のためにGoogle Firebase Analytics、Microsoft Azure PlayFab、広告配信のためにGoogle AdMobを使用する場合がございます。
							</P>
							<P>広告配信のために広告IDを取得していますが、個人を特定するためなどには使用しておりません。</P>
							<P>取得する情報、利用目的、第三者への提供等の詳細につきましては、以下のプライバシーポリシーのリンクよりご確認ください。</P>
							<Box as="ul" mb={4}>
								<Li>AdMob（Google Inc.）</Li>
								<Li>Firebase Analytics（Google Inc.）</Li>
								<Li>Microsoft Azure PlayFab (Microsoft.Inc.)</Li>
							</Box>
						</Section>

						<Section title="4. 情報の利用目的">
							<P>当社は収集した情報を以下の目的の範囲内でのみ利用いたします。</P>
							<Box as="ul" mb={4}>
								<Li>利用者が本サービスを円滑に利用できるようにするため</Li>
								<Li>本サービス利用に関する統計データを作成するため</Li>
								<Li>本サービスの企画立案検討、サービス改善にあたっての分析のため</Li>
								<Li>利用者からのお問い合わせに対する対応のため</Li>
								<Li>その他本サービスに関する重要なお知らせなど、必要に応じた連絡を行うため</Li>
								<Li>広告の配信、表示及び効果測定のため</Li>
								<Li>ユーザーのトラフィック測定及び行動測定のため</Li>
								<Li>本サービスに関する当社の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため</Li>
							</Box>
						</Section>

						<Section title="5. 情報の第三者提供">
							<P>当方は利用者の個人情報を下記の場合を除いて第三者に提供することはございません。</P>
							<Box as="ul" mb={4}>
								<Li>ご本人又はお子様の保護者が事前に同意した場合</Li>
								<Li>法律に基づく場合</Li>
								<Li>利用者が本サービスの利用規約に違反し、当社の権利、財産やサービスなどを保護するために、個人情報を公開せざるをえないと判断するに足る合理的な根拠がある場合</Li>
								<Li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</Li>
								<Li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</Li>
								<Li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</Li>
								<Li>当方が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</Li>
								<Li>個人情報の提供を含む当方の事業の承継が行われる場合</Li>
								<Li>その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合</Li>
							</Box>
						</Section>

						<Section title="7. 情報の共同利用">
							<P>
								利用者に本サービスを提供するにあたり、当方と共同して業務を行うビジネスパートナーが必要な場合には、利用者の個人情報をそのビジネスパートナーと共同利用することがあります。この場合に当方は、利用目的、ビジネスパートナーの名称、情報の種類、管理者の名称について利用者に公表した上で共同利用することといたします。
							</P>
						</Section>

						<Section title="8. 個人情報の開示">
							<P>
								当社は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、本サービス上で確認できない個人情報の開示を請求される場合には、当社が別途定めた手続きに従って開示手数料をいただく場合がございます。
							</P>
						</Section>

						<Section title="9. 本プライバシーポリシーの改訂">
							<P>
								本プライバシーポリシーは改訂されることがあります。重要な変更にあたっては利用者及びお子様の保護者に対してわかりやすい方法にて改訂内容を告知いたします。
							</P>
						</Section>

						<Section title="10. お問い合わせ">
							<P>
								本プライバシーポリシーに関してご不明な点がある場合、本サービスにおける個人情報の取り扱いに関するご質問・苦情・ご相談等があります場合は下記メールアドレスよりご連絡ください。ご本人及びお子様の保護者から、個人情報の開示・訂正・追加・削除、利用停止・消去または第三者提供の停止のお申し出があった場合、依頼者等ご本人及びお子様の保護者であることを確認させていただいたうえで、当社はこれに遅滞なく対応いたします。ただし、開示費用等の合理的な実費の負担をお願いすることがあります。
							</P>
							{OWNER.email && (
								<Link href={`mailto:${OWNER.email}`} color="blue.600">
									{OWNER.email}
								</Link>
							)}
						</Section>

						<Text fontSize="sm" color="gray.400" mt={12}>
							2021年8月24日制定
						</Text>
					</Container>
				</Box>

				<Footer />
			</Box>
		</>
	);
}
