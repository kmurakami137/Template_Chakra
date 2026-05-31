/**
 * HomePage
 *
 * ホームページ - 各セクションを組み合わせたページコンポーネント
 */

import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { Footer, Header } from "../../components";
import { SEO, SITE, getAbsoluteUrl } from "../../data/site";
import { Cta, Faq, Features, Hero, Intro, Problems, Reviews } from "./sections";

export function HomePage() {
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
			<Box overflowX="hidden">
				<Header />
				<Hero />
				<Intro />
				<Problems />
				<Features />
				<Reviews />
				<Faq />
				<Cta />
				<Footer />
			</Box>
		</>
	);
}
