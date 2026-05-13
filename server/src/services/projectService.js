import Project from "../models/Project.js";

export const getAllProjects = async (filter = {}) => {
	return await Project.find(filter).sort({ createdAt: -1 });
};

export const getProjectById = async (id) => {
	return await Project.findById(id);
};

export const deletedOldProject = async (id) => {
	return await Project.findByIdAndDelete(id);
};

export const getFeaturedProjects = async (limit = 6) => {
	return await Project.find({ featured: true }).limit(limit);
};
