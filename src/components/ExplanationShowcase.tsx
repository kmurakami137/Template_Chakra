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
	DialogBackdrop,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	Flex,
	Heading,
	RatingGroup,
	ScrollArea,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
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
	if (!example) {
		return (
			<Box bg="gray.50" p={6} borderRadius="lg" shadow="md">
				<Text color="gray.500">用語を選択してください</Text>
			</Box>
		);
	}

	return (
		<Flex direction="column" bg="gray.800" w="md" h="xl" p={6} borderRadius="lg" shadow="md">
			{/* ヘッダー */}
			<Flex justify="space-between" align="start" mb={4}>
				<Box flex={1}>
					<Heading as="h4" variant="headlineLg" mb={1} color="white">
						{example.title}
					</Heading>
					<Text variant="bodySm" color="gray.300" mb={1}>
						{example.kana}
					</Text>
					{example.era && (
						<Text
							variant="labelSm"
							bg="gray.600"
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

			{/* 解説本文 */}
			<ScrollArea.Root flexGrow={1} variant="always" size="xs">
				<ScrollArea.Viewport color="gray.400" paddingEnd="3">
					<ScrollArea.Content paddingEnd="3" textStyle="sm">
						{parseComment(example.comment)}
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar orientation="vertical">
					<ScrollArea.Thumb bg="white" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
		</Flex>
	);
}
export function ExplanationShowcase({ examples }: ExplanationShowcaseProps) {
	const [selectedId, setSelectedId] = useState(examples.history[0]?.id);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// mdサイズ以下かどうかを判定
	const isMobile = useBreakpointValue({ base: true, md: false });

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
				<Flex bg="gray.100" px={5} py={12} justify="center" align="stretch">
					<Flex h="fit-content" gap={10}>
						{/* 左: 用語選択ボタンエリア */}
						<Flex direction="column" maxW="md" gap={4} h="fit-content">
							<Flex>
								<Flex
									rounded="full"
									bg="blue.500"
									w={120}
									h={120}
									justify="center"
									align="center"
									color="white"
								>
									<Heading as="h3" variant="headlineLg" mb={2}>
										解説例
									</Heading>
								</Flex>
								<Text>気になる用語の解説を確認してみよう。</Text>
							</Flex>
							<Box>
								{/* 教科ごとにセクション表示 */}
								{subjects.map((subject) => (
									<Box key={subject.key} bg="gray.300" rounded="lg" mt={3}>
										<Heading
											as="h4"
											variant="titleMd"
											color="gray.700"
											bg="gray.500"
											p={1}
											roundedTop="lg"
											textAlign="center"
										>
											{subject.label}
										</Heading>
										<Flex
											flexWrap="wrap"
											gap={2}
											bg="gray.300"
											p={2}
											rounded="lg"
											justify="stretch"
										>
											{examples[subject.key].map((ex) => (
												<Button
													key={ex.id}
													onClick={() => setSelectedId(ex.id)}
													variant={
														selectedId === ex.id ? "solid" : "outline"
													}
													colorPalette="blue"
													justifyContent="center"
													size="sm"
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

						{/* 右: 解説カード */}
						<Box>
							<ExplanationCard example={currentExample} />
						</Box>
					</Flex>
				</Flex>
			) : (
				/* mdサイズ以下: ボタン + Dialog */
				<>
					<Flex direction="column" gap={4}>
						{/* 教科ごとにセクション表示 */}
						{subjects.map((subject) => (
							<Box key={subject.key}>
								<Heading as="h4" variant="titleSm" mb={2}>
									{subject.label}
								</Heading>
								<Flex wrap="wrap" gap={2}>
									{examples[subject.key].map((ex) => (
										<Button
											key={ex.id}
											onClick={() => handleSelect(ex.id)}
											variant={selectedId === ex.id ? "solid" : "outline"}
											colorPalette="blue"
											size="sm"
										>
											{ex.title}
										</Button>
									))}
								</Flex>
							</Box>
						))}
					</Flex>

					<DialogRoot
						open={isDialogOpen}
						onOpenChange={(e) => setIsDialogOpen(e.open)}
						size="lg"
					>
						<DialogBackdrop />
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{currentExample?.title}</DialogTitle>
								<DialogCloseTrigger />
							</DialogHeader>
							<DialogBody>
								<ExplanationCard example={currentExample} />
							</DialogBody>
						</DialogContent>
					</DialogRoot>
				</>
			)}
		</>
	);
}
