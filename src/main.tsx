import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { system } from "./theme";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<ChakraProvider value={system}>
				<App />
			</ChakraProvider>
		</HelmetProvider>
	</StrictMode>,
);
