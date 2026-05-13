import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

function App() {
	const { isDark } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div
				className={`flex items-center justify-center h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}
			>
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	return (
		<BrowserRouter>
			<div className={`${isDark ? "dark" : ""} min-h-screen flex flex-col`}>
				<Navbar />
				<main className="flex-grow">
					<AppRoutes />
				</main>
				<ScrollToTop />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
