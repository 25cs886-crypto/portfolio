import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import Button from "../common/Button";

export const Navbar = () => {
	const { isDark, toggleTheme } = useTheme();
	const { isAuthenticated, user, logout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" },
	];

	const isActive = (path) => location.pathname === path;

	const menuVariants = {
		hidden: { opacity: 0, x: -300 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -300 },
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 bg-bg-primary/95 dark:bg-bg-primary/95 backdrop-blur-md border-b border-border-color shadow-sm"
		>
			<div className="container-custom flex items-center justify-between h-16 md:h-20">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2 group">
					<div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
						<span className="text-white font-bold text-lg">V</span>
					</div>
					<span className="hidden sm:inline font-bold text-lg text-text-primary">
						Vishwa
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`text-sm font-medium transition-colors duration-200 relative ${
								isActive(link.path)
									? "text-primary"
									: "text-text-secondary hover:text-text-primary"
							}`}
						>
							{link.name}
							{isActive(link.path) && (
								<motion.div
									layoutId="activeIndicator"
									className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
									initial={false}
									transition={{ type: "spring", stiffness: 380, damping: 30 }}
								/>
							)}
						</Link>
					))}
				</div>

				{/* Actions */}
				<div className="flex items-center gap-4 md:gap-6">
					{/* Theme Toggle */}
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						onClick={toggleTheme}
						className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
						aria-label="Toggle theme"
					>
						{isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
					</motion.button>

					{/* Auth Buttons */}
					{isAuthenticated ? (
						<div className="hidden sm:flex items-center gap-4">
							{user?.role === "admin" && (
								<Link to="/dashboard">
									<Button variant="secondary" size="sm">
										Dashboard
									</Button>
								</Link>
							)}
							<Button variant="ghost" size="sm" onClick={logout}>
								Logout
							</Button>
						</div>
					) : (
						<div className="hidden sm:flex gap-2">
							<Link to="/login">
								<Button variant="secondary" size="sm">
									Login
								</Button>
							</Link>
						</div>
					)}

					{/* Mobile Menu Button */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</motion.button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{ duration: 0.3 }}
						className="md:hidden absolute top-16 left-0 right-0 bg-bg-primary border-b border-border-color shadow-lg"
					>
						<div className="container-custom py-4 space-y-4">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									onClick={() => setIsMenuOpen(false)}
									className={`block py-2 px-4 rounded-lg transition-colors ${
										isActive(link.path)
											? "bg-bg-tertiary text-primary font-semibold"
											: "text-text-secondary hover:bg-bg-tertiary"
									}`}
								>
									{link.name}
								</Link>
							))}

							<div className="border-t border-border-color pt-4 mt-4 space-y-2">
								{isAuthenticated ? (
									<>
										{user?.role === "admin" && (
											<Link
												to="/dashboard"
												onClick={() => setIsMenuOpen(false)}
												className="block py-2 px-4 bg-bg-tertiary rounded-lg text-text-primary"
											>
												Dashboard
											</Link>
										)}
										<button
											onClick={() => {
												logout();
												setIsMenuOpen(false);
											}}
											className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
										>
											Logout
										</button>
									</>
								) : (
									<Link
										to="/login"
										onClick={() => setIsMenuOpen(false)}
										className="block py-2 px-4 bg-primary text-white rounded-lg text-center hover:bg-primary-dark transition-colors"
									>
										Login
									</Link>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
