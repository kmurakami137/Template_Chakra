import { Box, type BoxProps, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type SectionHeaderProps = {
	/** 英字アクセントラベル（Poppins フォント）。省略時は表示なし */
	titleEn?: string;
	/** h2 見出し */
	titleJa: ReactNode;
	/** オプショナル説明文 */
	description?: ReactNode;
	/**
	 * テキスト揃え（デフォルト: "center-md"）
	 * - "start"      : 左揃え（全breakpoint）
	 * - "center-md"  : 見出しcenter / description は md以上でcenter、base は左揃え
	 * - "center"     : 全体center（全breakpoint）
	 */
	align?: "start" | "center-md" | "center";
	/** 下マージン（デフォルト: 10） */
	mb?: BoxProps["mb"];
	/** 英字ラベルの色（デフォルト: gray.300） */
	labelColor?: BoxProps["color"];
	/** タイトルの色（デフォルト: 継承） */
	titleColor?: BoxProps["color"];
	/** 説明文言の色（デフォルト: 継承） */
	descriptionColor?: BoxProps["color"];
};

export function SectionHeader({
	titleEn,
	titleJa,
	description,
	align = "center-md",
	mb = 10,
	labelColor = "gray.300",
	titleColor,
	descriptionColor = "gray.800",
}: SectionHeaderProps) {
	const labelRef = useScrollReveal({ from: "bottom", distance: 20, duration: 0.5 });
	const titleRef = useScrollReveal({ from: "bottom", distance: 30, duration: 0.6, delay: 0.25 });
	const descRef = useScrollReveal({ from: "bottom", distance: 20, duration: 0.6, delay: 0.5 });

	const resolvedAlign = align === "center-md" ? "center" : align;
	const descAlign =
		align === "center-md" ? { base: "left", md: "center" } : align;

	return (
		<Box mb={mb} textAlign={resolvedAlign}>
			{titleEn && (
				<Text
					ref={labelRef}
					fontFamily="en.poppins"
					fontSize="xl"
					fontWeight="bold"
					color={labelColor}
					mb={2}
					lineHeight="1"
				>
					{titleEn}
				</Text>
			)}
			<Heading
				ref={titleRef}
				as="h2"
				letterSpacing="wide"
				fontWeight="bold"
				variant="displaySm"
				color={titleColor}
			>
				{titleJa}
			</Heading>
			{description && (
				<Text
					ref={descRef}
					variant="bodyMd"
					mt={4}
					textAlign={descAlign}
					color={descriptionColor}
				>
					{description}
				</Text>
			)}
		</Box>
	);
}
