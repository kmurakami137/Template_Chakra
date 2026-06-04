/**
 * Reviews Section
 *
 * お客様の声セクション - ReviewCarousel を包むセクションコンポーネント
 */

import { Container } from "@chakra-ui/react";
import { Section, SectionHeader } from "../../../components";
import { ReviewCarousel } from "../../../components/ReviewCarousel";

export function Reviews() {
	return (
		<Section id="voices" bg="blue.800/10">
			<Container mb={10}>
				<SectionHeader titleEn="Voices" titleJa="お客様の声" mb={0} titleColor="blue.500" />
			</Container>
			<ReviewCarousel />
		</Section>
	);
}
