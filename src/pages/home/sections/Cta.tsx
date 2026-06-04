/**
 * Cta Section
 *
 * CTA セクション（締め）
 */

import { Box, Container, HStack } from "@chakra-ui/react";
import AppStoreBadge from "../../../assets/badges/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg?react";
import GooglePlayBadge from "../../../assets/badges/GetItOnGooglePlay_Badge_Web_color_Japanese.svg?react";
import { AppStats, Section, SectionHeader } from "../../../components";
import { APP_STORE } from "../../../data/site";

export function Cta() {
	return (
		<Section py={28} bg="blue.700" color="white" bgImage="gradients.blue">
			<Container maxW="breakpoint-lg" textAlign="center">
				<SectionHeader
					titleJa="さあ、はじめよう！"
					description="無料でダウンロードして中学社会をマスターしよう。"
					descriptionColor="white/80"
				/>
				<HStack justify="center" gap={4} flexWrap="wrap" mt={10} mb={10}>
					<Box
						asChild
						display="inline-flex"
						transition="opacity 0.2s"
						_hover={{ opacity: 0.8 }}
					>
						<a
							href={APP_STORE.ios.developer}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="App Store からダウンロード"
						>
							<AppStoreBadge style={{ height: "50px", width: "auto" }} />
						</a>
					</Box>
					<Box
						asChild
						display="inline-flex"
						transition="opacity 0.2s"
						_hover={{ opacity: 0.8 }}
					>
						<a
							href={APP_STORE.android.developer}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Google Play で手に入れよう"
						>
							<GooglePlayBadge height="50" />
						</a>
					</Box>
				</HStack>
				<AppStats />
			</Container>
		</Section>
	);
}
