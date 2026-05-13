import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../components/common/Button";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const validateForm = () => {
		const newErrors = {};
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email format";
		}
		if (!formData.password) newErrors.password = "Password is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		try {
			await login(formData.email, formData.password);
			const from = location.state?.from?.pathname || "/dashboard";
			navigate(from);
		} catch (error) {
			setErrors({
				submit:
					error.response?.data?.message || "Login failed. Please try again.",
			});
		} finally {
			setLoading(false);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-bg-secondary"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div
				className="w-full max-w-md"
				variants={containerVariants}
				initial="hidden"
				animate="show"
			>
				{/* Card */}
				<motion.div
					className="bg-bg-primary rounded-2xl shadow-xl p-8 md:p-10"
					variants={itemVariants}
				>
					{/* Header */}
					<motion.div className="text-center mb-8" variants={itemVariants}>
						<div className="inline-block w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
							<span className="text-white text-2xl font-bold">V</span>
						</div>
						<h1 className="text-3xl font-bold text-text-primary mb-2">
							Admin Login
						</h1>
						<p className="text-text-secondary">
							Sign in to manage your portfolio
						</p>
					</motion.div>

					{/* Error Message */}
					{errors.submit && (
						<motion.div
							className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-600 rounded-lg text-sm"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
						>
							{errors.submit}
						</motion.div>
					)}

					{/* Demo Login Info */}
					<motion.div
						className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 text-blue-600 rounded-lg text-sm"
						variants={itemVariants}
					>
						<p className="font-semibold mb-2">Demo Credentials:</p>
						<p>Email: admin@example.com</p>
						<p>Password: password123</p>
					</motion.div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Email */}
						<motion.div variants={itemVariants}>
							<label className="block text-sm font-semibold text-text-primary mb-2">
								Email Address
							</label>
							<div className="relative">
								<FiMail
									className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
									size={20}
								/>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="admin@example.com"
									className={`input-field pl-12 w-full ${
										errors.email ? "border-red-500 focus:ring-red-500" : ""
									}`}
								/>
							</div>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email}</p>
							)}
						</motion.div>

						{/* Password */}
						<motion.div variants={itemVariants}>
							<label className="block text-sm font-semibold text-text-primary mb-2">
								Password
							</label>
							<div className="relative">
								<FiLock
									className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
									size={20}
								/>
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="••••••••"
									className={`input-field pl-12 pr-12 w-full ${
										errors.password ? "border-red-500 focus:ring-red-500" : ""
									}`}
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
								>
									{showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
								</button>
							</div>
							{errors.password && (
								<p className="text-red-500 text-sm mt-1">{errors.password}</p>
							)}
						</motion.div>

						{/* Submit Button */}
						<motion.div variants={itemVariants} className="pt-4">
							<Button
								type="submit"
								variant="primary"
								size="lg"
								loading={loading}
								className="w-full"
							>
								Sign In
							</Button>
						</motion.div>
					</form>

					{/* Footer */}
					<motion.p
						className="text-center text-text-secondary text-sm mt-6"
						variants={itemVariants}
					>
						Back to{" "}
						<a href="/" className="text-primary font-semibold hover:underline">
							portfolio
						</a>
					</motion.p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Login;
