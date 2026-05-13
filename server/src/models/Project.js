import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a project title"],
			trim: true,
		},
		description: {
			type: String,
			required: [true, "Please provide a project description"],
		},
		techStack: {
			type: [String],
			required: [true, "Please provide technologies used"],
		},
		image: {
			type: String,
			required: [true, "Please provide a project image"],
		},
		githubLink: {
			type: String,
			required: [true, "Please provide a GitHub link"],
		},
		liveLink: {
			type: String,
		},
		featured: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

export default mongoose.model("Project", projectSchema);
