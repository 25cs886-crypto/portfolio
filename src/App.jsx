import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

function App() {
	const { isDark } = useTheme();

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
