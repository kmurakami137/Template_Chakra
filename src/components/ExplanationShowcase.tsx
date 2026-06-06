/**
 * ExplanationShowcase Component
 *
 * 解説実例を表示するコンポーネント
 * - mdサイズ以上: 2カラム（左: 用語選択、右: 解説カード）
 * - mdサイズ以下: 用語ボタン + Modal
 */

import {
	Box,
	Button,
	CloseButton,
	Dialog,
	Flex,
	Heading,
	Mark,
	Portal,
	RatingGroup,
	ScrollArea,
	Separator,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Br } from "../components";
import type { ExplanationExample, ExplanationExamples } from "../data/explanation";
import { parseComment } from "../utils/parseComment";

// ========================================
// ImportanceRating サブコンポーネント
// ========================================

interface ImportanceRatingProps {
	importance: number;
}

function ImportanceRating({ importance }: ImportanceRatingProps) {
	return (
		<RatingGroup.Root value={importance} size="sm" readOnly colorPalette="yellow">
			<RatingGroup.HiddenInput />
			<RatingGroup.Control>
				{Array.from({ length: 5 }, (_, i) => (
					/* biome-ignore lint/suspicious/noArrayIndexKey: 星は常に5個固定で順序も変わらないため問題なし */
					<RatingGroup.Item key={`star-${i}`} index={i + 1}>
						<RatingGroup.ItemIndicator />
					</RatingGroup.Item>
				))}
			</RatingGroup.Control>
		</RatingGroup.Root>
	);
}

// ========================================
// ExplanationCard サブコンポーネント
// ========================================

interface ExplanationCardProps {
	example: ExplanationExample | undefined;
}

// ========================================
// ExplanationShowcase メインコンポーネント
// ========================================

export interface ExplanationShowcaseProps {
	examples: ExplanationExamples;
}

// 教科タブの定義
const subjects = [
	{ key: "history" as const, label: "歴史" },
	{ key: "geography" as const, label: "地理" },
	{ key: "civics" as const, label: "公民" },
];

function ExplanationCard({ example }: ExplanationCardProps) {
	const viewportRef = useRef<HTMLDivElement>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: example変化時にスクロールをリセットするための意図的な依存
	useEffect(() => {
		if (viewportRef.current) {
			viewportRef.current.scrollTop = 0;
		}
	}, [example]);

	if (!example) {
		return (
			<Box bg="gray.50" p={6} borderRadius="lg" shadow="md">
				<Text color="gray.500">用語を選択してください</Text>
			</Box>
		);
	}

	return (
		<Flex
			direction="column"
			bg="white"
			w={{ base: "full", lg: "560px" }}
			h={{ base: "full", lg: "560px" }}
			p={7}
			borderRadius="lg"
			shadow="md"
		>
			{/* ヘッダー */}
			<Flex justify="space-between" align="start" mb={3}>
				<Box flex={1}>
					<Text letterSpacing={0.08} fontSize={13} color="black/60" mb={1}>
						{example.kana}
					</Text>
					<Heading as="h4" variant="headlineLg" mb={1} color="gray.900">
						{example.title}
					</Heading>
					{example.era && (
						<Text
							variant="labelMd"
							bg="black/30"
							color="gray.300"
							px={2}
							py={0.5}
							borderRadius="sm"
							display="inline-block"
						>
							{example.era}
						</Text>
					)}
				</Box>
				<ImportanceRating importance={example.importance} />
			</Flex>
			<Separator colorPalette="blue" />

			{/* 解説本文 */}
			<ScrollArea.Root flexGrow={1} variant="always" size="xs" mt={4}>
				<ScrollArea.Viewport ref={viewportRef} paddingEnd="3">
					<ScrollArea.Content paddingEnd="3" textStyle="sm">
						{parseComment(example.comment)}
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar orientation="vertical" bg="gray.200">
					<ScrollArea.Thumb bg="gray.400" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
		</Flex>
	);
}
// ========================================
// SubjectButtonPanel サブコンポーネント
// ========================================

type SubjectButtonPanelProps = {
	examples: ExplanationExamples;
	selectedId: string | undefined;
	onSelect: (id: string) => void;
};

function SubjectButtonPanel({ examples, selectedId, onSelect }: SubjectButtonPanelProps) {
	return (
		<Flex direction="column" gap={4} h="fit-content">
			<Flex align="center">
				<Flex
					rounded="full"
					bg="blue.500"
					w={120}
					h={120}
					justify="center"
					align="center"
					color="white"
					flexShrink={0}
				>
					<Heading as="h3" variant="headlineLg" mb={2}>
						解説例
					</Heading>
				</Flex>
				<Text ml={5} variant="headlineSm" color="gray.700">
					気になる用語を選択して
					<Br />
					実際の<Mark>解説を確認</Mark>してみよう!
				</Text>
			</Flex>
			<Box>
				{subjects.map((subject) => (
					<Box key={subject.key} mt={3} shadow="sm" rounded="md">
						<Heading
							as="h4"
							variant="titleSm"
							color="blue.700"
							bg="blue.800/10"
							p={1}
							roundedTop="md"
							textAlign="center"
						>
							{subject.label}
						</Heading>
						<Flex
							flexWrap="wrap"
							gap={2}
							bg="white"
							p={2.5}
							roundedBottom="md"
							justify="stretch"
						>
							{examples[subject.key].map((ex) => (
								<Button
									key={ex.id}
									colorPalette={selectedId === ex.id ? "blue" : "black"}
									onClick={() => onSelect(ex.id)}
									variant={selectedId === ex.id ? "solid" : "subtle"}
									justifyContent="center"
									px={2}
									h={8}
									flexGrow={1}
									textAlign="center"
								>
									{ex.title}
								</Button>
							))}
						</Flex>
					</Box>
				))}
			</Box>
		</Flex>
	);
}

export function ExplanationShowcase({ examples }: ExplanationShowcaseProps) {
	const [selectedId, setSelectedId] = useState(examples.history[0]?.id);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// mdサイズ以下かどうかを判定
	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

	// 全教科から選択されたIDの用語を探す
	const currentExample = useMemo(() => {
		for (const subject of subjects) {
			const found = examples[subject.key].find((ex) => ex.id === selectedId);
			if (found) return found;
		}
		return undefined;
	}, [examples, selectedId]);

	const handleSelect = (id: string) => {
		setSelectedId(id);
		if (isMobile) {
			setIsDialogOpen(true);
		}
	};

	return (
		<>
			{/* mdサイズ以上: 2カラムレイアウト */}
			{!isMobile ? (
				<Box bg="gray.200/40" px={8} py={12} rounded="lg" mt={16} shadow="insetSm">
					<Flex h="fit-content" gap={6} justify="center" align="end">
						<SubjectButtonPanel
							examples={examples}
							selectedId={selectedId}
							onSelect={handleSelect}
						/>
						{/* 右: 解説カード */}
						<Box>
							<ExplanationCard example={currentExample} />
						</Box>
					</Flex>
				</Box>
			) : (
				/* mdサイズ以下: ボタンパネル + Dialog */
				<>
					<Flex
						justify="center"
						bg="gray.200/40"
						px={5}
						py={{ base: 8, sm: 12 }}
						rounded="lg"
						mt={16}
						shadow="insetSm"
					>
						<SubjectButtonPanel
							examples={examples}
							selectedId={selectedId}
							onSelect={handleSelect}
						/>
					</Flex>

					<Dialog.Root
						open={isDialogOpen}
						size="cover"
						onOpenChange={(e) => setIsDialogOpen(e.open)}
						placement="center"
						motionPreset="slide-in-bottom"
						lazyMount
						unmountOnExit
					>
						<Portal>
							<Dialog.Backdrop />
							<Dialog.Positioner px={5} py={10}>
								<Dialog.Content
									p={0}
									bg="transparent"
									shadow="none"
									position="relative"
								>
									<ExplanationCard example={currentExample} />
									<Dialog.CloseTrigger
										asChild
										position="absolute"
										top={-3}
										right={-3}
									>
										<CloseButton
											size="sm"
											bg="white"
											rounded="full"
											shadow="sm"
										/>
									</Dialog.CloseTrigger>
								</Dialog.Content>
							</Dialog.Positioner>
						</Portal>
					</Dialog.Root>
				</>
			)}
		</>
	);
}
