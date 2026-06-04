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

const SIZE_CONFIG = {
	lg: {
		iconGap: { base: 4, md: 5 },
		iconMb: { base: 4, md: 6 },
		iconW: { base: "55px", sm: "60px", md: "70px" },
		iconRadius: { base: "10px", sm: "11px", md: "12px" },
		statGap: { base: 3.5, md: 8 },
		sparkleSize: { base: "md", md: "lg" } as const,
		valueFontSize: { base: "24px", md: "28px" },
		unitFontSize: { base: "18px", md: "20px" },
		labelFontSize: { base: "13px", md: "16px" },
	},
	md: {
		iconGap: { base: 3, md: 4 },
		iconMb: { base: 3, md: 4 },
		iconW: { base: "44px", sm: "48px", md: "52px" },
		iconRadius: { base: "8px", sm: "9px", md: "10px" },
		statGap: { base: 3, md: 6 },
		sparkleSize: "sm" as const,
		valueFontSize: { base: "18px", md: "20px" },
		unitFontSize: { base: "13px", md: "15px" },
		labelFontSize: { base: "11px", md: "13px" },
	},
} as const;

type AppStatsProps = {
	size?: keyof typeof SIZE_CONFIG;
};

export function AppStats({ size = "md" }: AppStatsProps) {
	const s = SIZE_CONFIG[size];

	return (
		<Box textAlign="center">
			{/* アプリアイコン */}
			<HStack justify="center" gap={s.iconGap} mb={s.iconMb}>
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
								w={s.iconW}
								h="auto"
								borderRadius={s.iconRadius}
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
			<Flex justify="center" gap={s.statGap}>
				{stats.map((stat) => (
					<Flex direction="column" justify="center" align="center" key={stat.key}>
						<Flex align="center" gap={1}>
							{stat.key === "price" && (
								<Icon size={s.sparkleSize} mb={1}>
									<RiSparklingFill />
								</Icon>
							)}
							<Text
								variant="displaySm"
								fontWeight="bold"
								fontSize={s.valueFontSize}
								fontFamily="en.poppins"
							>
								{stat.value}
								{"unit" in stat && (
									<Text
										as="span"
										fontWeight="bold"
										fontSize={s.unitFontSize}
										mx={0.5}
									>
										{stat.unit}
									</Text>
								)}
								{stat.key !== "price" && "+"}
							</Text>
						</Flex>
						<Text fontSize={s.labelFontSize} opacity={0.8} fontWeight="medium">
							{stat.label}
						</Text>
					</Flex>
				))}
			</Flex>
		</Box>
	);
}
