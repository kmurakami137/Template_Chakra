import { Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { RiSparklingFill } from "react-icons/ri";
import { apps } from "../data/apps";

const stats = [
	{ key: "rating", label: "ストア平均評価", value: "4.7" },
	{ key: "downloads", label: "ダウンロード数", value: "5.5", unit: "万" },
	{ key: "price", label: "アプリ内課金", value: "Free" },
] as const;

export function AppStats() {
	return (
		<Box textAlign="center">
			{/* アプリアイコン */}
			<HStack justify="center" gap={5} mb={6}>
				{apps.map((app) => (
					<Image
						key={app.id}
						src={app.icon}
						alt={`${app.name}アイコン`}
						w={20}
						h={20}
						borderRadius="2xl"
						border="1px solid"
						borderColor="whiteAlpha.500"
						objectFit="cover"
					/>
				))}
			</HStack>

			{/* 統計 */}
			<HStack justify="center" gap={{ base: 4, md: 8 }}>
				{stats.map((stat) => (
					<Box key={stat.key}>
						{stat.key === "price" ? (
							<HStack gap={1} justify="center">
								<Icon size="lg" mb={1}>
									<RiSparklingFill />
								</Icon>
								<Text variant="displaySm" fontFamily="en.poppins">
									{stat.value}
								</Text>
							</HStack>
						) : (
							<Text variant="displaySm" fontFamily="en.poppins">
								{stat.value}
								{"unit" in stat && (
									<Text as="span" variant="headlineMd" mx={0.5}>
										{stat.unit}
									</Text>
								)}
								+
							</Text>
						)}
						<Text variant="labelLg" opacity={0.8} fontWeight="medium">
							{stat.label}
						</Text>
					</Box>
				))}
			</HStack>
		</Box>
	);
}
