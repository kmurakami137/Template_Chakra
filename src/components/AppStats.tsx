import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { RiSparklingFill } from "react-icons/ri";
import { apps } from "../data/apps";
import { APP_STORE, type AppSubject } from "../data/site";

const appIdToSubject: Record<string, AppSubject> = {
	his: "history",
	geo: "geography",
	civ: "civics",
};

const stats = [
	{ key: "rating", label: "ストア平均評価", value: "4.7" },
	{ key: "downloads", label: "ダウンロード数", value: "5.5", unit: "万" },
	{ key: "price", label: "アプリ内課金", value: "Free" },
] as const;

export function AppStats() {
	return (
		<Box textAlign="center">
			{/* アプリアイコン */}
			<HStack justify="center" gap={{ base: 4, md: 5 }} mb={{ base: 4, md: 6 }}>
				{apps.map((app) => (
					<Box
						key={app.id}
						asChild
						display="inline-flex"
						transition="opacity 0.2s"
						_hover={{ opacity: 0.8 }}
					>
						<a
							href={APP_STORE.ios[appIdToSubject[app.id]]}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${app.name} を App Store でダウンロード`}
						>
							<Image
								src={app.icon}
								alt={`${app.name}アイコン`}
								w={{ base: "55px", sm: "60px", md: "70px" }}
								h="auto"
								borderRadius={{ base: "10px", sm: "11px", md: "12px" }}
								border="1px solid"
								borderColor="whiteAlpha.300"
								objectFit="cover"
								shadow="neuSmOnDark"
							/>
						</a>
					</Box>
				))}
			</HStack>

			{/* 統計 */}
			<Flex justify="center" gap={{ base: 3.5, md: 8 }}>
				{stats.map((stat) => (
					<Flex direction="column" justify="center" align="center" key={stat.key}>
						<Flex align="center" gap={1}>
							{stat.key === "price" && (
								<Icon size={{ base: "md", md: "lg" }} mb={1}>
									<RiSparklingFill />
								</Icon>
							)}
							<Text
								variant="displaySm"
								fontWeight="bold"
								fontSize={{ base: "24px", md: "28px" }}
								fontFamily="en.poppins"
							>
								{stat.value}
								{"unit" in stat && (
									<Text
										as="span"
										fontWeight="bold"
										fontSize={{ base: "18px", md: "20px" }}
										mx={0.5}
									>
										{stat.unit}
									</Text>
								)}
								{stat.key !== "price" && "+"}
							</Text>
						</Flex>
						<Text
							fontSize={{ base: "13px", md: "16px" }}
							opacity={0.8}
							fontWeight="medium"
						>
							{stat.label}
						</Text>
					</Flex>
				))}
			</Flex>
		</Box>
	);
}
