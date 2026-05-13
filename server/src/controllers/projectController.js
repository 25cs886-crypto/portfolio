import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";

// Get all projects
export const getProjects = async (req, res, next) => {
	try {
		const projects = await Project.find().sort({ createdAt: -1 });
		res.status(200).json({
			success: true,
			count: projects.length,
			data: projects,
		});
	} catch (error) {
		next(error);
	}
};

// Get single project
export const getProjectById = async (req, res, next) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project) {
			return res.status(404).json({ message: "Project not found" });
		}
		res.status(200).json({
			success: true,
			data: project,
		});
	} catch (error) {
		next(error);
	}
};

// Create project
export const createProject = async (req, res, next) => {
	try {
		const { title, description, techStack, githubLink, liveLink, featured } =
			req.body;

		let imageUrl = "";
		if (req.file) {
			const result = await cloudinary.uploader.upload(req.file.path);
			imageUrl = result.secure_url;
		}

		const project = new Project({
			title,
			description,
			techStack: Array.isArray(techStack)
				? techStack
				: techStack.split(",").map((t) => t.trim()),
			image: imageUrl,
			githubLink,
			liveLink,
			featured: featured === "true" || featured === true,
		});

		await project.save();
		res.status(201).json({
			success: true,
			data: project,
		});
	} catch (error) {
		next(error);
	}
};

// Update project
export const updateProject = async (req, res, next) => {
	try {
		let project = await Project.findById(req.params.id);
		if (!project) {
			return res.status(404).json({ message: "Project not found" });
		}

		const { title, description, techStack, githubLink, liveLink, featured } =
			req.body;

		let updateData = {
			title,
			description,
			techStack: Array.isArray(techStack)
				? techStack
				: techStack?.split(",").map((t) => t.trim()),
			githubLink,
			liveLink,
			featured: featured === "true" || featured === true,
		};

		if (req.file) {
			const result = await cloudinary.uploader.upload(req.file.path);
			updateData.image = result.secure_url;
		}

		project = await Project.findByIdAndUpdate(req.params.id, updateData, {
			new: true,
			runValidators: true,
		});

		res.status(200).json({
			success: true,
			data: project,
		});
	} catch (error) {
		next(error);
	}
};

// Delete project
export const deleteProject = async (req, res, next) => {
	try {
		const project = await Project.findByIdAndDelete(req.params.id);
		if (!project) {
			return res.status(404).json({ message: "Project not found" });
		}

		res.status(200).json({
			success: true,
			message: "Project deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
