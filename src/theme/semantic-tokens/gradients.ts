import { defineSemanticTokens } from "@chakra-ui/react";

/**
 * セマンティックグラデーショントークン
 *
 * 用途に応じた命名でグラデーションを参照
 */
export const gradients = defineSemanticTokens.gradients({
	// カード用グラデーション
	gradients: {
		blue: { value: "{gradients.blue}" },
		green: { value: "{gradients.green}" },
		purple: { value: "{gradients.purple}" },
	},
});
