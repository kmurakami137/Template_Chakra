/**
 * FeatureSummaryCard Component
 *
 * FEATURES セクションの概要カード
 * index から features データの label を取得し、
 * children として説明コンテンツを受け取る
 */

import { Box, Flex, Heading, Separator, Spacer, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { features } from "../data/features";

type FeatureSummaryCardProps = {
	/** features 配列のインデックス（0始まり） */
	index: number;
	/** 説明コンテンツ */
	children: ReactNode;
};

export function FeatureSummaryCard({ index, children }: FeatureSummaryCardProps) {
	const feature = features[index];

	return (
		<Box
			bg="white"
			px={6}
			borderRadius="lg"
			shadow="lg"
			flexBasis={{
				base: "100%",
				sm: "calc(50% - 6px)",
				md: "calc(33.333% - 8px)",
			}}
			maxW={{
				base: "100%",
				sm: "calc(50% - 6px)",
				md: "calc(33.333% - 8px)",
			}}
		>
			<Flex py={5} align="start">
				<Text
					fontFamily="en.poppins"
					variant="displayMd"
					color="gray.300"
					lineHeight="0"
					mr="4"
					flexShrink={0}
					mt="13px"
				>
					{String(index + 1).padStart(2, "0")}
				</Text>
				<Heading as="h3" variant="headlineMd">
					{feature.label}
				</Heading>
				<Spacer />
			</Flex>
			<Separator />
			<Text variant="bodyMd" letterSpacing="wide" textAlign="justify" pt={3} pb={5}>
				{children}
			</Text>
		</Box>
	);
}
