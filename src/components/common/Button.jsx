import { motion } from "framer-motion";

export const Button = ({
	children,
	variant = "primary",
	size = "md",
	disabled = false,
	loading = false,
	className = "",
	onClick,
	...props
}) => {
	const baseStyles =
		"font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2";

	const variants = {
		primary:
			"bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg disabled:opacity-50",
		secondary:
			"bg-bg-tertiary text-text-primary hover:bg-border-color dark:bg-bg-secondary",
		outline:
			"border-2 border-primary text-primary hover:bg-primary hover:text-white",
		ghost: "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
	};

	const sizes = {
		sm: "px-3 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	return (
		<motion.button
			whileHover={{ scale: disabled ? 1 : 1.02 }}
			whileTap={{ scale: disabled ? 1 : 0.98 }}
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			disabled={disabled || loading}
			onClick={onClick}
			{...props}
		>
			{loading && (
				<div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
			)}
			{children}
		</motion.button>
	);
};

export default Button;
