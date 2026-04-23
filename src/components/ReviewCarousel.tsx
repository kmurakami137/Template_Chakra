/**
 * ReviewCarousel Component
 *
 * お客様の声セクション。Carousel + RatingGroup によるレビュー表示。
 * - モバイル: 1.15枚表示（隣のカードが覗く）
 * - md以上: 2.15枚表示
 * - lg以上: 3.15枚表示
 * - Autoplay デフォルト ON
 */

import {
	Box,
	Carousel,
	Flex,
	IconButton,
	RatingGroup,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay, LuApple } from "react-icons/lu";
import { FaGooglePlay } from "react-icons/fa6";
import { REVIEWS, SUBJECT_COLORS, SUBJECT_LABELS, type Review } from "../data/reviews";

// ============================================================================
// ReviewCard（内部サブコンポーネント）
// ============================================================================

function ReviewCard({ rating, subject, content, author, date, store }: Review) {
	const subjectColor = SUBJECT_COLORS[subject];

	return (
		<Box
			as="blockquote"
			bg="gray.50"
			borderRadius="lg"
			p={6}
			// mx={5}
			h="100%"
			display="flex"
			flexDirection="column"
		>
			{/* ヘッダー: 星評価 + 科目バッジ */}
			<Flex justify="space-between" align="center" mb={3}>
				<RatingGroup.Root value={rating} size="sm" readOnly colorPalette="yellow">
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

			{/* レビュー本文 */}
			<Text fontSize="md" lineHeight="relaxed" color="fg.muted" flexGrow={1}>
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
					{author && (
						<Box as="cite" fontStyle="normal" fontWeight="medium">
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
				{store === "google-play" && <FaGooglePlay aria-label="Google Play" />}
			</Flex>
		</Box>
	);
}

// ============================================================================
// ReviewCarousel（メインコンポーネント）
// ============================================================================

export function ReviewCarousel() {
	const slidesPerPage = useBreakpointValue({ base: 1, md: 3, lg: 4 }) ?? 1.15;

	return (
		<Carousel.Root
			slideCount={REVIEWS.length}
			slidesPerPage={slidesPerPage}
			spacing="16px"
			autoplay
			loop
			px={20}
		>
			<Carousel.ItemGroup>
				{REVIEWS.map((review, index) => (
					<Carousel.Item key={review.content.slice(0, 20)} index={index}>
						<ReviewCard {...review} />
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>

			<Carousel.Control justifyContent="center" gap={4} mt={6}>
				<Carousel.AutoplayTrigger asChild>
					<IconButton size="xs" variant="ghost" aria-label="自動再生の切替">
						<Carousel.AutoplayIndicator play={<LuPlay />} paused={<LuPause />} />
					</IconButton>
				</Carousel.AutoplayTrigger>

				<Carousel.PrevTrigger asChild>
					<IconButton size="xs" variant="ghost" aria-label="前のレビュー">
						<LuChevronLeft />
					</IconButton>
				</Carousel.PrevTrigger>

				<Carousel.Indicators />

				<Carousel.NextTrigger asChild>
					<IconButton size="xs" variant="ghost" aria-label="次のレビュー">
						<LuChevronRight />
					</IconButton>
				</Carousel.NextTrigger>
			</Carousel.Control>
		</Carousel.Root>
	);
}
