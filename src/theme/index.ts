import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { globalCss } from "./global-css";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { tokens } from "./tokens";

/**
 * カスタムテーマシステム
 *
 * Chakra UI v3 の defineConfig + createSystem を使用
 */
const config = defineConfig({
	globalCss,
	theme: {
		tokens,
		semanticTokens,
		recipes,
	},
});

export const system = createSystem(defaultConfig, config);
