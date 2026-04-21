import { ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react-vite";
import { system } from "../src/theme";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: "todo",
		},
	},
	decorators: [
		(Story) => (
			<ChakraProvider value={system}>
				<Story />
			</ChakraProvider>
		),
	],
};

export default preview;
