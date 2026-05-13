import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiFolder, FiLogOut, FiX } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";

export const Sidebar = ({ isOpen, onClose }) => {
	const location = useLocation();
	const { logout } = useAuth();

	const menuItems = [
		{ name: "Dashboard", path: "/dashboard", icon: FiHome },
		{ name: "Projects", path: "/dashboard/projects", icon: FiFolder },
	];

	const isActive = (path) => location.pathname === path;

	const sidebarVariants = {
		hidden: { x: -280, opacity: 0 },
		visible: { x: 0, opacity: 1 },
		exit: { x: -280, opacity: 0 },
	};

	return (
		<>
			{/* Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
					/>
				)}
			</AnimatePresence>

			{/* Sidebar */}
			<motion.aside
				variants={sidebarVariants}
				initial="hidden"
				animate={isOpen ? "visible" : "hidden"}
				exit="exit"
				transition={{ duration: 0.3 }}
				className="fixed left-0 top-0 w-64 h-screen bg-bg-primary border-r border-border-color py-6 md:relative md:translate-x-0 md:h-auto z-50 md:z-0"
			>
				{/* Header */}
				<div className="px-6 flex items-center justify-between mb-8 md:mb-0">
					<Link
						to="/dashboard"
						className="flex items-center gap-2 font-bold text-lg"
					>
						<div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
							<span className="text-white">V</span>
						</div>
						<span>Admin</span>
					</Link>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						onClick={onClose}
						className="md:hidden p-2 hover:bg-bg-tertiary rounded-lg"
					>
						<FiX size={24} />
					</motion.button>
				</div>

				{/* Navigation */}
				<nav className="space-y-2 px-4 mb-8">
					{menuItems.map((item) => {
						const Icon = item.icon;
						const active = isActive(item.path);
						return (
							<Link
								key={item.path}
								to={item.path}
								onClick={onClose}
								className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
									active
										? "bg-gradient-to-r from-primary to-secondary text-white font-semibold"
										: "text-text-secondary hover:bg-bg-tertiary"
								}`}
							>
								<Icon size={20} />
								<span>{item.name}</span>
							</Link>
						);
					})}
				</nav>

				{/* Footer */}
				<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-color">
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => {
							logout();
							onClose();
						}}
						className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors font-semibold"
					>
						<FiLogOut size={20} />
						<span>Logout</span>
					</motion.button>
				</div>
			</motion.aside>
		</>
	);
};

export default Sidebar;
