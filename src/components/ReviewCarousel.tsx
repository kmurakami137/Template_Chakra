/**
 * ReviewCarousel Component
 *
 * お客様の声セクション。Carousel + RatingGroup によるレビュー表示。
 * - モバイル: 1.15枚表示（隣のカードが覗く）
 * - md以上: 2.15枚表示
 * - lg以上: 3.15枚表示
 * - Autoplay デフォルト ON
 * - カードクリックで全文ダイアログ表示
 */

import {
	Box,
	Carousel,
	CloseButton,
	Dialog,
	Flex,
	Heading,
	IconButton,
	Portal,
	RatingGroup,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { FaGooglePlay } from "react-icons/fa6";
import { LuApple, LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";
import { REVIEWS, type Review, SUBJECT_COLORS, SUBJECT_LABELS } from "../data/reviews";

const ALL_REVIEWS: Review[] = Object.values(REVIEWS).flatMap((byStore) =>
	Object.values(byStore).flat(),
);

// ============================================================================
// RatingDisplay（星評価 共通）
// ============================================================================

function RatingDisplay({ rating, size = "xs" }: { rating: number; size?: "xs" | "md" }) {
	return (
		<RatingGroup.Root value={rating} size={size} readOnly colorPalette="blue">
			<RatingGroup.HiddenInput />
			<RatingGroup.Control>
				{Array.from({ length: 5 }, (_, i) => (
					/* biome-ignore lint/suspicious/noArrayIndexKey: 星は常に5個固定 */
					<RatingGroup.Item key={`star-${i}`} index={i + 1}>
						<RatingGroup.ItemIndicator />
					</RatingGroup.Item>
				))}
			</RatingGroup.Control>
		</RatingGroup.Root>
	);
}

// ============================================================================
// ReviewCard（内部サブコンポーネント）
// ============================================================================

function ReviewCard({ rating, subject, title, content, author, date, store }: Review) {
	const subjectColor = SUBJECT_COLORS[subject];

	return (
		<Dialog.Root motionPreset="slide-in-bottom" placement="center">
			<Dialog.Trigger asChild>
				<Box
					as="blockquote"
					bg="black/4"
					borderRadius="lg"
					p={6}
					h="100%"
					display="flex"
					flexDirection="column"
					cursor="pointer"
					transition="box-shadow 0.2s, transform 0.2s"
					_hover={{ shadow: "md", transform: "translateY(-2px)" }}
					// shadow="neuMd"
				>
					{/* ヘッダー: 星評価 + 科目バッジ */}
					<Flex justify="space-between" align="center" mb={3}>
						<RatingDisplay rating={rating} />
						<Box
							px={2}
							py={0.5}
							borderRadius="full"
							fontSize="xs"
							fontWeight="medium"
							color={subjectColor}
							bg={`${subjectColor}/10`}
						>
							{SUBJECT_LABELS[subject]}
						</Box>
					</Flex>

					{/* タイトル */}
					{title && (
						<Text fontWeight="semibold" fontSize="sm" mb={1} color="fg">
							{title}
						</Text>
					)}

					{/* レビュー本文（3行で切り捨て） */}
					<Text
						fontSize="sm"
						lineHeight="relaxed"
						color="fg.muted"
						flexGrow={1}
						lineClamp={3}
					>
						{content}
					</Text>

					{/* フッター: 投稿者情報 + ストアアイコン */}
					<Flex
						as="footer"
						justify="space-between"
						align="center"
						mt={4}
						fontSize="sm"
						color="fg.subtle"
					>
						<Flex gap={2} align="center">
							{/* {author && (
								<Box as="cite" fontStyle="normal" fontWeight="medium" fontSize="xs">
									{author}
								</Box>
							)} */}
							{date && (
								<Box as="time" opacity={0.7} fontSize="xs">
									{date}
								</Box>
							)}
						</Flex>
						{store === "app-store" && <LuApple aria-label="App Store" />}
						{store === "google-play" && <FaGooglePlay aria-label="Google Play" />}
					</Flex>
				</Box>
			</Dialog.Trigger>

			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner px={5}>
					<Dialog.Content maxW="lg" overflow="visible">
						<Dialog.Header pb={2}>
							<Flex justify="space-between" align="start" gap={4} w="full">
								<Flex direction="column" gap={2}>
									<RatingDisplay rating={rating} size="md" />
									{title && (
										<Dialog.Title asChild>
											<Heading as="h3" size="md">
												{title}
											</Heading>
										</Dialog.Title>
									)}
								</Flex>
								<Box
									px={2}
									py={0.5}
									borderRadius="full"
									fontSize="xs"
									fontWeight="medium"
									color={subjectColor}
									bg={`${subjectColor}/10`}
									flexShrink={0}
								>
									{SUBJECT_LABELS[subject]}
								</Box>
							</Flex>
						</Dialog.Header>

						<Dialog.Body>
							<Text
								fontSize="md"
								lineHeight="relaxed"
								color="fg.muted"
								whiteSpace="pre-wrap"
							>
								{content}
							</Text>
						</Dialog.Body>

						<Dialog.Footer pt={2} justifyContent="start">
							<Flex
								justify="space-between"
								align="center"
								w="full"
								fontSize="sm"
								color="fg.subtle"
							>
								<Flex gap={2} align="center">
									{author && (
										<Box
											as="cite"
											fontStyle="normal"
											fontWeight="medium"
											fontSize="sm"
										>
											{author}
										</Box>
									)}
									{date && (
										<Box as="time" opacity={0.7}>
											{date}
										</Box>
									)}
								</Flex>
								{store === "app-store" && <LuApple aria-label="App Store" />}
								{store === "google-play" && (
									<FaGooglePlay aria-label="Google Play" />
								)}
							</Flex>
						</Dialog.Footer>

						<Dialog.CloseTrigger asChild position="absolute" top="-4" right="-4">
							<CloseButton size="sm" bg="white" rounded="full" shadow="sm" />
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}

// ============================================================================
// ReviewCarousel（メインコンポーネント）
// ============================================================================

export function ReviewCarousel() {
	const slidesPerPage = useBreakpointValue({ base: 1, md: 3, lg: 4 }) ?? 1.15;

	return (
		<Box overflowX="hidden" width="100%">
			<Carousel.Root
				slideCount={ALL_REVIEWS.length}
				slidesPerPage={slidesPerPage}
				spacing="16px"
				autoplay={{ delay: 6000 }}
				loop
				px={{ base: 4, md: 20 }}
			>
				<Carousel.ItemGroup>
					{ALL_REVIEWS.map((review, index) => (
						<Carousel.Item key={review.content.slice(0, 20)} index={index}>
							<ReviewCard {...review} />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>

				<Carousel.Control justifyContent="center" gap={4} mt={6}>
					<Carousel.PrevTrigger asChild>
						<IconButton
							size="xs"
							variant="ghost"
							aria-label="前のレビュー"
							color="blue.500"
						>
							<LuChevronLeft />
						</IconButton>
					</Carousel.PrevTrigger>
					<Carousel.AutoplayTrigger asChild>
						<IconButton size="xs" variant="ghost" aria-label="自動再生の切替">
							<Carousel.AutoplayIndicator
								play={
									<LuPlay
										style={{
											fill: "var(--chakra-colors-blue-500)",
											stroke: "none",
										}}
									/>
								}
								paused={
									<LuPause
										style={{
											fill: "var(--chakra-colors-blue-500)",
											stroke: "none",
										}}
									/>
								}
							/>
						</IconButton>
					</Carousel.AutoplayTrigger>

					{/* <Box hideBelow="md">
						<Carousel.Indicators />
					</Box> */}

					<Carousel.NextTrigger asChild>
						<IconButton
							size="xs"
							variant="ghost"
							aria-label="次のレビュー"
							color="blue.500"
						>
							<LuChevronRight />
						</IconButton>
					</Carousel.NextTrigger>
				</Carousel.Control>
			</Carousel.Root>
		</Box>
	);
}
