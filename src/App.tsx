import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { PrivacyPage } from "./pages/privacy";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/privacy" element={<PrivacyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
