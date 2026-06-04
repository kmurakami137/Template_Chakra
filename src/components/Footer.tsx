import { Box, Container, Flex, Icon, Link, Separator, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import AppStoreBadge from "../assets/badges/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg?react";
import GooglePlayBadge from "../assets/badges/GetItOnGooglePlay_Badge_Web_color_Japanese.svg?react";
import LynxLogo from "../assets/Lynx-Logo.svg?react";
import { APP_STORE, LEGAL, NAV_ITEMS, getCopyright } from "../data/site";
import AntaresLogo from "../assets/antaresLogo.svg?react";
export function Footer() {
	return (
		<Box as="footer" bg="gray.900" color="gray.400">
			<Container maxW="breakpoint-xl" py={12} px={{ base: 6, md: 10 }}>
				<Flex
					direction={{ base: "column", md: "row" }}
					justify="space-between"
					gap={{ base: 10, md: 6 }}
				>
					{/* 左: ロゴ + ストアバッジ */}
					<Flex direction="column" gap={7} flexShrink={0}>
						<Flex align="center" gap={2}>
							<Text
								fontWeight="bold"
								fontSize="16px"
								letterSpacing={0.8}
								color="gray.200"
							>
								中学社会
							</Text>
							<Icon h="auto" w="110px" color="white" asChild aria-label="LYNX">
								<LynxLogo />
							</Icon>
						</Flex>
						<Flex gap={3} flexWrap="wrap">
							<Box
								asChild
								display="inline-flex"
								transition="opacity 0.2s"
								_hover={{ opacity: 0.7 }}
							>
								<a
									href={APP_STORE.ios.developer}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="App Store からダウンロード"
								>
									<AppStoreBadge style={{ height: "44px", width: "auto" }} />
								</a>
							</Box>
							<Box
								asChild
								display="inline-flex"
								transition="opacity 0.2s"
								_hover={{ opacity: 0.7 }}
							>
								<a
									href={APP_STORE.android.developer}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Google Play で手に入れよう"
								>
									<GooglePlayBadge height="44" />
								</a>
							</Box>
						</Flex>
					</Flex>

					{/* 右: ナビゲーション */}
					<Flex gap={{ base: 6, md: 12 }} flexWrap="wrap">
						<Flex direction="column" gap={3}>
							<Text
								fontSize="11px"
								fontWeight="bold"
								letterSpacing="widest"
								color="gray.600"
								textTransform="uppercase"
							>
								Menu
							</Text>
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									fontSize="sm"
									color="gray.400"
									textDecoration="none"
									_hover={{ color: "white" }}
								>
									{item.labelJa}
								</Link>
							))}
						</Flex>
						<Flex direction="column" gap={3}>
							<Text
								fontSize="11px"
								fontWeight="bold"
								letterSpacing="widest"
								color="gray.600"
								textTransform="uppercase"
							>
								Legal
							</Text>
							<Link
								asChild
								fontSize="sm"
								color="gray.400"
								textDecoration="none"
								_hover={{ color: "white" }}
							>
								<RouterLink to={LEGAL.privacyPolicyPath}>
									プライバシーポリシー・利用規約
								</RouterLink>
							</Link>
						</Flex>
					</Flex>
				</Flex>

				<Separator my={8} borderColor="gray.700" />

				{/* 著作権 */}
				<Flex
					direction={{ base: "column", sm: "row" }}
					justify="space-between"
					align={{ base: "start", sm: "center" }}
					gap={2}
					fontSize="xs"
					color="gray.600"
				>
					<Flex>
						<Icon w={170} h="auto" color="gray.400" asChild pb="2">
							<AntaresLogo />
						</Icon>
					</Flex>
				</Flex>
				<Text variant="labelSm">{getCopyright()}</Text>
			</Container>
		</Box>
	);
}
