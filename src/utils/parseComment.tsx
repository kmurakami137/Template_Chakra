/**
 * Markdown風の解説テキストを React 要素に変換
 */

import { Heading, Mark, Separator, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

/**
 * 解説コメントをパースして React 要素に変換
 *
 * 対応フォーマット：
 * - <style="S1">テキスト</style> → Mark（強調）
 * - <style="HR"> → Separator（水平線）
 * - **テキスト** → 太字
 * - ## 見出し → Heading（h3相当）
 * - ### 見出し → Heading（h4相当）
 * - 改行 → <br />
 */
export function parseComment(comment: string): ReactNode {
	if (!comment) return null;

	const lines = comment.split("\n");
	const elements: ReactNode[] = [];
	let currentParagraph: ReactNode[] = [];
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

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];

		// 空行は段落の区切りとして扱う
		if (line.trim() === "") {
			flushParagraph();
			continue;
		}

		// <style="HR"> → Separator
		if (line.includes('<style="HR">')) {
			flushParagraph();
			elements.push(<Separator key={`sep-${key++}`} my={4} />);
			continue;
		}

		// ## 見出し → Heading (h3)
		const h2Match = line.match(/^## (.+)$/);
		if (h2Match) {
			flushParagraph();
			elements.push(
				<Heading key={`h2-${key++}`} as="h3" variant="headlineMd" mt={4} mb={2}>
					{h2Match[1]}
				</Heading>,
			);
			continue;
		}

		// ### 見出し → Heading (h4)
		const h3Match = line.match(/^### (.+)$/);
		if (h3Match) {
			flushParagraph();
			elements.push(
				<Heading key={`h3-${key++}`} as="h4" variant="titleMd" mt={2} mb={1}>
					{h3Match[1]}
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

	// 残っている段落をフラッシュ
	flushParagraph();

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
			elements.push(
				<Mark key={`${baseKey}-mark-${key++}`} bg="yellow.200">
					{markedText}
				</Mark>,
			);
			remaining = remaining.slice(markMatch[0].length);
			continue;
		}

		// **テキスト** → 太字
		const boldMatch = remaining.match(/^(.*?)\*\*([^*]+)\*\*/);
		if (boldMatch) {
			const [, before, boldText] = boldMatch;
			if (before) {
				elements.push(before);
			}
			elements.push(
				<Text key={`${baseKey}-bold-${key++}`} as="strong" fontWeight="bold">
					{boldText}
				</Text>,
			);
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
 * 太字変換のヘルパー（**テキスト** のみ）
 */
function parseBold(text: string, baseKey: string | number): ReactNode {
	const parts = text.split(/(\*\*[^*]+\*\*)/);
	return parts.map((part, i) => {
		const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
		if (boldMatch) {
			return (
				/* biome-ignore lint/suspicious/noArrayIndexKey: 静的テキストの分割結果で順序が変わらないため問題なし */
				<Text key={`${baseKey}-b-${i}`} as="strong" fontWeight="bold">
					{boldMatch[1]}
				</Text>
			);
		}
		return part;
	});
}
