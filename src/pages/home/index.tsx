/**
 * HomePage
 *
 * ホームページ - 各セクションを組み合わせたページコンポーネント
 */

import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useState } from "react";
import { Footer, Header, LoadingScreen } from "../../components";
import { SEO, SITE, getAbsoluteUrl } from "../../data/site";
import { Cta, Features, Hero, Intro, Problems, Reviews } from "./sections";

export function HomePage() {
	const [fontsReady, setFontsReady] = useState(false);
	const [heroReady, setHeroReady] = useState(false);
	// フェードアウト完了後にアンマウント → DOM から取り除きポインターイベントをブロックしない
	const [showLoadingScreen, setShowLoadingScreen] = useState(true);

	useEffect(() => {
		const minDelay = new Promise<void>((resolve) => setTimeout(resolve, 800));
		Promise.all([document.fonts.ready, minDelay]).then(() => setFontsReady(true));
	}, []);

	const handleLoadingExitComplete = useCallback(() => {
		setHeroReady(true);
		setShowLoadingScreen(false);
	}, []);

	return (
		<>
			<Helmet>
				<html lang={SITE.lang} />
				<title>{SITE.name}</title>
				<meta name="description" content={SITE.description} />
				<meta name="keywords" content={SITE.keywords.join(", ")} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={SITE.name} />
				<meta property="og:description" content={SITE.description} />
				<meta property="og:url" content={SITE.url} />
				<meta property="og:image" content={getAbsoluteUrl(SITE.ogImage)} />
				<meta name="twitter:card" content={SEO.twitterCardType} />
				<meta name="twitter:title" content={SITE.name} />
				<meta name="twitter:description" content={SITE.description} />
				<meta name="twitter:image" content={getAbsoluteUrl(SITE.ogImage)} />
			</Helmet>
			{showLoadingScreen && (
				<LoadingScreen isReady={fontsReady} onExitComplete={handleLoadingExitComplete} />
			)}
			<Box overflowX="hidden">
				<Header />
				<Hero isReady={heroReady} />
				<Intro />
				<Problems />
				<Features />
				<Reviews />
				{/* <Faq /> */}
				<Cta />
				<Footer />
			</Box>
		</>
	);
}
