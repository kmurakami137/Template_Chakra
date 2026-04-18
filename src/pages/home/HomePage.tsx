/**
 * HomePage
 *
 * ホームページ - 各セクションを組み合わせたページコンポーネント
 */

import { Box } from "@chakra-ui/react";
import {
	Hero,
	Intro,
	Problems,
	Features,
	Faq,
	Cta,
} from "./sections";

export function HomePage() {
	return (
		<Box>
			<Hero />
			<Intro />
			<Problems />
			<Features />
			<Faq />
			<Cta />
		</Box>
	);
}
