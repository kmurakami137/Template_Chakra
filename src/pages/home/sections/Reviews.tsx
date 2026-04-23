/**
 * Reviews Section
 *
 * お客様の声セクション - ReviewCarousel を包むセクションコンポーネント
 */

import { Container } from "@chakra-ui/react";
import { ReviewCarousel } from "../../../components/ReviewCarousel";
import { Section, SectionHeader } from "../../../components";

export function Reviews() {
	return (
		<Section>
			<Container mb={10}>
				<SectionHeader titleEn="Reviews" titleJa="お客様の声" mb={0} />
			</Container>
			<ReviewCarousel />
		</Section>
	);
}
