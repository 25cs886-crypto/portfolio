import { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiX } from "react-icons/fi";
import Button from "../common/Button";
import { projectService } from "../../services/api";

export const AddProjectForm = ({ onSuccess, onCancel }) => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		techStack: "",
		githubLink: "",
		liveLink: "",
		featured: false,
		image: null,
	});
	const [imagePreview, setImagePreview] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData((prev) => ({
				...prev,
				image: file,
			}));
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.title.trim()) newErrors.title = "Title is required";
		if (!formData.description.trim())
			newErrors.description = "Description is required";
		if (!formData.techStack.trim())
			newErrors.techStack = "Technologies are required";
		if (!formData.githubLink.trim())
			newErrors.githubLink = "GitHub link is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		try {
			const submitData = new FormData();
			submitData.append("title", formData.title);
			submitData.append("description", formData.description);
			submitData.append("techStack", formData.techStack);
			submitData.append("githubLink", formData.githubLink);
			submitData.append("liveLink", formData.liveLink);
			submitData.append("featured", formData.featured);
			if (formData.image) {
				submitData.append("image", formData.image);
			}

			await projectService.create(submitData);
			onSuccess();
		} catch (error) {
			setErrors({
				submit: error.response?.data?.message || "Failed to add project",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<motion.div
			className="bg-bg-primary rounded-lg p-6 md:p-8"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h2 className="text-2xl font-bold text-text-primary mb-6">
				Add New Project
			</h2>

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Title */}
				<div>
					<label className="block text-sm font-semibold text-text-primary mb-2">
						Project Title *
					</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Enter project title"
						className="input-field w-full"
					/>
					{errors.title && (
						<p className="text-red-500 text-sm mt-1">{errors.title}</p>
					)}
				</div>

				{/* Description */}
				<div>
					<label className="block text-sm font-semibold text-text-primary mb-2">
						Description *
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						placeholder="Enter project description"
						rows={4}
						className="input-field w-full resize-none"
					/>
					{errors.description && (
						<p className="text-red-500 text-sm mt-1">{errors.description}</p>
					)}
				</div>

				{/* Tech Stack */}
				<div>
					<label className="block text-sm font-semibold text-text-primary mb-2">
						Technologies (comma-separated) *
					</label>
					<input
						type="text"
						name="techStack"
						value={formData.techStack}
						onChange={handleChange}
						placeholder="React, Node.js, MongoDB"
						className="input-field w-full"
					/>
					{errors.techStack && (
						<p className="text-red-500 text-sm mt-1">{errors.techStack}</p>
					)}
				</div>

				{/* Links */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-semibold text-text-primary mb-2">
							GitHub Link *
						</label>
						<input
							type="url"
							name="githubLink"
							value={formData.githubLink}
							onChange={handleChange}
							placeholder="https://github.com/..."
							className="input-field w-full"
						/>
						{errors.githubLink && (
							<p className="text-red-500 text-sm mt-1">{errors.githubLink}</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-semibold text-text-primary mb-2">
							Live Demo Link
						</label>
						<input
							type="url"
							name="liveLink"
							value={formData.liveLink}
							onChange={handleChange}
							placeholder="https://example.com"
							className="input-field w-full"
						/>
					</div>
				</div>

				{/* Image Upload */}
				<div>
					<label className="block text-sm font-semibold text-text-primary mb-2">
						Project Image
					</label>
					<div className="relative border-2 border-dashed border-border-color rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							className="absolute inset-0 opacity-0 cursor-pointer"
						/>
						{imagePreview ? (
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<img
										src={imagePreview}
										alt="Preview"
										className="w-16 h-16 rounded-lg object-cover"
									/>
									<div>
										<p className="font-semibold text-text-primary">
											{formData.image?.name}
										</p>
										<p className="text-text-secondary text-sm">
											{(formData.image?.size / 1024 / 1024).toFixed(2)} MB
										</p>
									</div>
								</div>
								<button
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setFormData((prev) => ({ ...prev, image: null }));
										setImagePreview(null);
									}}
									className="p-2 hover:bg-bg-tertiary rounded-lg transition-colors"
								>
									<FiX size={20} />
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center justify-center gap-2">
								<FiUpload size={32} className="text-text-secondary" />
								<p className="font-semibold text-text-primary">
									Click to upload image
								</p>
								<p className="text-sm text-text-secondary">
									PNG, JPG up to 5MB
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Featured Checkbox */}
				<div className="flex items-center gap-3">
					<input
						type="checkbox"
						id="featured"
						name="featured"
						checked={formData.featured}
						onChange={handleChange}
						className="w-4 h-4 cursor-pointer"
					/>
					<label
						htmlFor="featured"
						className="font-semibold text-text-primary cursor-pointer"
					>
						Mark as featured project
					</label>
				</div>

				{/* Error Message */}
				{errors.submit && (
					<div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 rounded-lg">
						{errors.submit}
					</div>
				)}

				{/* Actions */}
				<div className="flex gap-4 pt-6 border-t border-border-color">
					<Button
						variant="primary"
						type="submit"
						loading={loading}
						className="flex-1"
					>
						Add Project
					</Button>
					<Button
						variant="secondary"
						type="button"
						onClick={onCancel}
						disabled={loading}
						className="flex-1"
					>
						Cancel
					</Button>
				</div>
			</form>
		</motion.div>
	);
};

export default AddProjectForm;
