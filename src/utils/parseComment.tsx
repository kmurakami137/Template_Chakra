/**
 * Markdown風の解説テキストを React 要素に変換
 */

import { Box, Flex, Heading, Mark, Separator, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

/**
 * 解説コメントをパースして React 要素に変換
 *
 * 対応フォーマット：
 * - <style="S1">テキスト</style> → Mark（強調）
 * - <style="HR"> → Separator（水平線）
 * - <style="L">テキスト</style> → ■ 付きリストアイテム（連続行をグループ化）
 * - <style="Top">テキスト</style> → タグを除去してプレーンテキストとして処理
 * - **テキスト** → Mark（強調）
 * - ## 見出し → Heading（h3相当）
 * - ### 見出し → Heading（h4相当）
 * - 改行 → <br />
 */
export function parseComment(comment: string): ReactNode {
	if (!comment) return null;

	const lines = comment.split("\n");
	const elements: ReactNode[] = [];
	let currentParagraph: ReactNode[] = [];
	let listBuffer: string[] = [];
	let key = 0;

	const flushParagraph = () => {
		if (currentParagraph.length > 0) {
			elements.push(
				<Text key={`p-${key++}`} mb={4}>
					{currentParagraph}
				</Text>,
			);
			currentParagraph = [];
		}
	};

	const flushList = () => {
		if (listBuffer.length === 0) return;
		const listKey = key++;
		const items = listBuffer.map((item) => {
			const itemKey = key++;
			return (
				<Flex key={`li-${itemKey}`} gap={2} align="baseline" mb={1}>
					<Text flexShrink={0} color="gray.300" fontWeight="bold">
						■
					</Text>
					<Text>{parseInlineElements(item, itemKey)}</Text>
				</Flex>
			);
		});
		elements.push(
			<Box key={`list-${listKey}`} mb={4}>
				{items}
			</Box>,
		);
		listBuffer = [];
	};

	for (let i = 0; i < lines.length; i++) {
		// <style="Top">content</style> → content（タグのみ除去）
		const line = lines[i].replace(/<style="Top">(.*?)<\/style>/g, "$1");

		// 空行は段落・リストの区切り
		if (line.trim() === "") {
			flushParagraph();
			flushList();
			continue;
		}

		// <style="HR"> → Separator
		if (line.includes('<style="HR">')) {
			flushParagraph();
			flushList();
			elements.push(<Separator key={`sep-${key++}`} my={4} />);
			continue;
		}

		// <style="L"></style>content → ■ リストアイテム
		const listMatch = line.match(/^<style="L"><\/style>(.+)$/);
		if (listMatch) {
			flushParagraph();
			listBuffer.push(listMatch[1]);
			continue;
		}

		// L 以外の行が来たらリストを確定
		flushList();

		// ## 見出し → Heading (h3)
		const h2Match = line.match(/^## (.+)$/);
		if (h2Match) {
			elements.push(
				<Heading key={`h2-${key++}`} as="h3" variant="headlineMd" mt={4} mb={2}>
					{parseInlineElements(h2Match[1], key)}
				</Heading>,
			);
			continue;
		}

		// ### 見出し → Heading (h4)
		const h3Match = line.match(/^### (.+)$/);
		if (h3Match) {
			elements.push(
				<Heading key={`h3-${key++}`} as="h4" variant="titleMd" mt={2} mb={1}>
					{parseInlineElements(h3Match[1], key)}
				</Heading>,
			);
			continue;
		}

		// インライン要素の変換
		const inlineElements = parseInlineElements(line, key++);
		currentParagraph.push(...inlineElements);

		// 行末に改行を追加（最後の行を除く）
		if (i < lines.length - 1) {
			currentParagraph.push(<br key={`br-${key++}`} />);
		}
	}

	// 残りをフラッシュ
	flushParagraph();
	flushList();

	return <>{elements}</>;
}

/**
 * インライン要素（Mark、太字など）をパース
 */
function parseInlineElements(text: string, baseKey: number): ReactNode[] {
	const elements: ReactNode[] = [];
	let remaining = text;
	let key = 0;

	while (remaining.length > 0) {
		// <style="S1">...</style> → Mark
		const markMatch = remaining.match(/^(.*?)<style="S1">([^<]+)<\/style>/);
		if (markMatch) {
			const [, before, markedText] = markMatch;
			if (before) {
				elements.push(parseBold(before, `${baseKey}-${key++}`));
			}
			elements.push(<Mark key={`${baseKey}-mark-${key++}`}>{markedText}</Mark>);
			remaining = remaining.slice(markMatch[0].length);
			continue;
		}

		// **テキスト** → Mark
		const boldMatch = remaining.match(/^(.*?)\*\*([^*]+)\*\*/);
		if (boldMatch) {
			const [, before, markedText] = boldMatch;
			if (before) {
				elements.push(before);
			}
			elements.push(<Mark key={`${baseKey}-bold-${key++}`}>{markedText}</Mark>);
			remaining = remaining.slice(boldMatch[0].length);
			continue;
		}

		// マッチしなければ残りをそのまま追加
		elements.push(parseBold(remaining, `${baseKey}-${key++}`));
		break;
	}

	return elements;
}

/**
 * Mark変換のヘルパー（**テキスト** のみ）
 */
function parseBold(text: string, baseKey: string | number): ReactNode {
	const parts = text.split(/(\*\*[^*]+\*\*)/);
	return parts.map((part, i) => {
		const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
		if (boldMatch) {
			return (
				/* biome-ignore lint/suspicious/noArrayIndexKey: 静的テキストの分割結果で順序が変わらないため問題なし */
				<Mark key={`${baseKey}-b-${i}`}>{boldMatch[1]}</Mark>
			);
		}
		return part;
	});
}
