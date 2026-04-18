/**
 * Br Component
 *
 * レスポンシブ対応の改行コンポーネント
 * 画面サイズに応じて改行の表示/非表示を制御
 *
 * @example
 * // md 以上で改行（デフォルト）
 * <Br />
 *
 * // 常に改行
 * <Br always />
 *
 * // lg 以上で改行
 * <Br showFrom="lg" />
 *
 * // モバイルのみ改行（md 以上で非表示）
 * <Br hideFrom="md" />
 */

import { Box, type BoxProps } from "@chakra-ui/react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

type BrProps = {
	/** 常に改行を表示（レスポンシブ設定を無視） */
	always?: boolean;
	/** このブレークポイント以上で改行を表示 */
	showFrom?: Breakpoint;
	/** このブレークポイント以上で改行を非表示 */
	hideFrom?: Breakpoint;
};

export function Br({ always, showFrom = "md", hideFrom }: BrProps) {
	// always が指定された場合は単純な br を返す
	if (always) {
		return <br />;
	}

	const props: BoxProps = {};

	if (showFrom) {
		props.hideBelow = showFrom;
	}
	if (hideFrom) {
		props.hideFrom = hideFrom;
	}

	return <Box as="br" {...props} />;
}
