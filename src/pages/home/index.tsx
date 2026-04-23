/**
 * HomePage
 *
 * ホームページ - 各セクションを組み合わせたページコンポーネント
 */

import { Box } from "@chakra-ui/react";
import { Cta, Faq, Features, Hero, Intro, Problems, Reviews } from "./sections";

export function HomePage() {
	return (
		<Box>
			<Hero />
			<Intro />
			<Problems />
			<Features />
			<Reviews />
			<Faq />
			<Cta />
		</Box>
	);
}
