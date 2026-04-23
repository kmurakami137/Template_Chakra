import { Box, Heading, Text, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type SectionHeaderProps = {
	/** 英字アクセントラベル（Poppins フォント）。省略時は表示なし */
	titleEn?: string;
	/** h2 見出し */
	titleJa: ReactNode;
	/** オプショナル説明文 */
	description?: ReactNode;
	/** テキスト揃え（デフォルト: center） */
	align?: "start" | "center";
	/** 下マージン（デフォルト: 10） */
	mb?: BoxProps["mb"];
	/** 英字ラベルの色（デフォルト: gray.300） */
	labelColor?: BoxProps["color"];
};

export function SectionHeader({
	titleEn,
	titleJa,
	description,
	align = "center",
	mb = 10,
	labelColor = "gray.300",
}: SectionHeaderProps) {
	return (
		<Box mb={mb} textAlign={align}>
			{titleEn && (
				<Text
					fontFamily="en.poppins"
					fontSize="2xl"
					fontWeight="bold"
					color={labelColor}
					mb={1}
					lineHeight="1"
				>
					{titleEn}
				</Text>
			)}
			<Heading as="h2" letterSpacing="wide" variant="displaySm">
				{titleJa}
			</Heading>
			{description && (
				<Text variant="bodyMd" mt={4} textAlign={align}>
					{description}
				</Text>
			)}
		</Box>
	);
}
