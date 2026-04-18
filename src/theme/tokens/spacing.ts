import { defineTokens } from "@chakra-ui/react";

/**
 * スペーシングトークン追加分
 *
 * 既存の 0.5(2px), 1(4px), 1.5(6px), 2(8px) に追加
 *
 * | トークン | 値 |
 * |----------|-----|
 * | 0.25 | 1px |
 * | 0.75 | 3px |
 * | 1.25 | 5px |
 * | 1.75 | 7px |
 */
export const spacing = defineTokens.spacing({
	"0.25": { value: "1px" },
	"0.75": { value: "3px" },
	"1.25": { value: "5px" },
	"1.75": { value: "7px" },
});
