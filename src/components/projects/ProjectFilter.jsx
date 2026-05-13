import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export const ProjectFilter = ({
	categories,
	selectedCategory,
	onCategoryChange,
	searchQuery,
	onSearchChange,
}) => {
	return (
		<motion.div
			className="mb-12 space-y-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Search Bar */}
			<div className="relative">
				<FiSearch
					className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
					size={20}
				/>
				<input
					type="text"
					placeholder="Search projects..."
					value={searchQuery}
					onChange={(e) => onSearchChange(e.target.value)}
					className="input-field pl-12 w-full"
				/>
			</div>

			{/* Category Filter */}
			<div className="flex flex-wrap gap-3">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => onCategoryChange("all")}
					className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
						selectedCategory === "all"
							? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
							: "bg-bg-tertiary text-text-primary hover:bg-border-color"
					}`}
				>
					All Projects
				</motion.button>

				{categories.map((category) => (
					<motion.button
						key={category}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => onCategoryChange(category)}
						className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
							selectedCategory === category
								? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
								: "bg-bg-tertiary text-text-primary hover:bg-border-color"
						}`}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</motion.button>
				))}
			</div>
		</motion.div>
	);
};

export default ProjectFilter;
