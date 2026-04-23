/**
 * Cta Section
 *
 * CTA セクション（締め）
 */

import { Box, Container, HStack } from "@chakra-ui/react";
import { AppStats, Section, SectionHeader } from "../../../components";
import AppStoreBadge from "../../../assets/badges/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg?react";
import GooglePlayBadge from "../../../assets/badges/GetItOnGooglePlay_Badge_Web_color_Japanese.svg?react";

const STORE_LINKS = {
	appStore: "#",
	googlePlay: "#",
} as const;

export function Cta() {
	return (
		<Section py={28} bg="gray.900" color="white">
			<Container maxW="breakpoint-lg" textAlign="center">
				<SectionHeader
					titleJa="今すぐ、理解する学習を始めよう。"
					description="無料でダウンロード。中学社会の学習が変わります。"
				/>
				<AppStats />
				<HStack justify="center" gap={4} flexWrap="wrap" mt={10}>
					<Box
						asChild
						display="inline-flex"
						transition="opacity 0.2s"
						_hover={{ opacity: 0.8 }}
					>
						<a href={STORE_LINKS.appStore} aria-label="App Store からダウンロード">
							<AppStoreBadge style={{ height: "50px", width: "auto" }} />
						</a>
					</Box>
					<Box
						asChild
						display="inline-flex"
						transition="opacity 0.2s"
						_hover={{ opacity: 0.8 }}
					>
						<a href={STORE_LINKS.googlePlay} aria-label="Google Play で手に入れよう">
							<GooglePlayBadge height="50" />
						</a>
					</Box>
				</HStack>
			</Container>
		</Section>
	);
}
