// API Configuration
export const API_BASE_URL =
	import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// API Endpoints
export const API_ENDPOINTS = {
	// Auth
	REGISTER: "/auth/register",
	LOGIN: "/auth/login",
	GET_PROFILE: "/auth/profile",
	LOGOUT: "/auth/logout",

	// Projects
	GET_PROJECTS: "/projects",
	GET_PROJECT: "/projects/:id",
	CREATE_PROJECT: "/projects",
	UPDATE_PROJECT: "/projects/:id",
	DELETE_PROJECT: "/projects/:id",
	GET_FEATURED_PROJECTS: "/projects?featured=true",

	// Contact
	SUBMIT_CONTACT: "/contact",
	GET_CONTACT_MESSAGES: "/contact",
};

// Authentication
export const AUTH_CONFIG = {
	TOKEN_KEY: "token",
	TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
	REFRESH_TOKEN_KEY: "refreshToken",
};

// User Roles
export const USER_ROLES = {
	ADMIN: "admin",
	USER: "user",
};

// Project Status
export const PROJECT_STATUS = {
	DRAFT: "draft",
	PUBLISHED: "published",
	ARCHIVED: "archived",
};

// Skill Categories
export const SKILL_CATEGORIES = {
	FRONTEND: "Frontend",
	BACKEND: "Backend",
	DEVOPS: "Cloud & DevOps",
	TOOLS: "Tools & Platforms",
	SOFT_SKILLS: "Problem Solving",
	VERSION_CONTROL: "Version Control",
};

// Tech Stack Options
export const TECH_STACK = {
	FRONTEND: [
		"React.js",
		"Vue.js",
		"Angular",
		"Svelte",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Bootstrap",
		"Material UI",
		"Framer Motion",
	],
	BACKEND: [
		"Node.js",
		"Express.js",
		"Python",
		"Django",
		"Flask",
		"Java",
		"Spring Boot",
		"Go",
		"PHP",
		"Laravel",
	],
	DATABASE: [
		"MongoDB",
		"PostgreSQL",
		"MySQL",
		"Redis",
		"Firebase",
		"DynamoDB",
		"Elasticsearch",
		"Oracle",
	],
	DEVOPS: [
		"Docker",
		"Kubernetes",
		"AWS",
		"Google Cloud",
		"Azure",
		"Heroku",
		"Vercel",
		"GitHub Actions",
	],
	OTHER: ["GraphQL", "REST API", "WebSocket", "Microservices", "CI/CD"],
};

// Form Validation
export const VALIDATION_CONFIG = {
	EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	URL_PATTERN: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w .-]*)*\/?$/,
	PHONE_PATTERN: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}]$/,
	PASSWORD_MIN_LENGTH: 6,
	PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
	NAME_MIN_LENGTH: 2,
	NAME_MAX_LENGTH: 50,
	DESCRIPTION_MAX_LENGTH: 1000,
};

// Error Messages
export const ERROR_MESSAGES = {
	// Auth
	INVALID_EMAIL: "Please enter a valid email address",
	INVALID_PASSWORD:
		"Password must be at least 8 characters with uppercase, lowercase, and number",
	WEAK_PASSWORD: "Password is too weak",
	EMAIL_REQUIRED: "Email is required",
	PASSWORD_REQUIRED: "Password is required",
	NAME_REQUIRED: "Name is required",
	INVALID_CREDENTIALS: "Invalid email or password",
	USER_EXISTS: "User with this email already exists",
	UNAUTHORIZED: "You are not authorized to perform this action",
	TOKEN_EXPIRED: "Your session has expired. Please login again",

	// Projects
	PROJECT_NOT_FOUND: "Project not found",
	INVALID_PROJECT_DATA: "Invalid project data",
	CREATE_PROJECT_FAILED: "Failed to create project",
	UPDATE_PROJECT_FAILED: "Failed to update project",
	DELETE_PROJECT_FAILED: "Failed to delete project",

	// Contact
	INVALID_MESSAGE: "Please enter a valid message",
	MESSAGE_REQUIRED: "Message is required",
	SUBJECT_REQUIRED: "Subject is required",
	CONTACT_SUBMISSION_FAILED: "Failed to submit contact form",

	// File Upload
	FILE_TOO_LARGE: "File size exceeds 5MB limit",
	INVALID_FILE_TYPE: "Invalid file type. Only images are allowed",
	UPLOAD_FAILED: "Failed to upload file",

	// General
	SOMETHING_WENT_WRONG: "Something went wrong. Please try again",
	NETWORK_ERROR: "Network error. Please check your connection",
	SERVER_ERROR: "Server error. Please try again later",
};

// Success Messages
export const SUCCESS_MESSAGES = {
	LOGIN_SUCCESS: "Login successful!",
	REGISTER_SUCCESS: "Registration successful! Please login",
	LOGOUT_SUCCESS: "Logged out successfully",
	PROJECT_CREATED: "Project created successfully",
	PROJECT_UPDATED: "Project updated successfully",
	PROJECT_DELETED: "Project deleted successfully",
	CONTACT_SUBMITTED: "Message sent successfully! We will get back to you soon",
	FILE_UPLOADED: "File uploaded successfully",
};

// API Request Config
export const API_CONFIG = {
	TIMEOUT: 30000, // 30 seconds
	RETRY_ATTEMPTS: 3,
	RETRY_DELAY: 1000,
};

// Pagination
export const PAGINATION = {
	DEFAULT_PAGE: 1,
	DEFAULT_LIMIT: 10,
	MAX_LIMIT: 100,
};

// Cache Duration (in milliseconds)
export const CACHE_DURATION = {
	PROJECTS: 5 * 60 * 1000, // 5 minutes
	USER_PROFILE: 10 * 60 * 1000, // 10 minutes
	FEATURED_PROJECTS: 15 * 60 * 1000, // 15 minutes
};

// File Upload
export const FILE_UPLOAD_CONFIG = {
	ACCEPTED_FORMATS: ["image/jpeg", "image/png", "image/webp", "image/gif"],
	MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
	CLOUDINARY_FOLDER: "portfolio",
};

// Animation Duration (in seconds)
export const ANIMATION_DURATION = {
	FADE: 0.3,
	SLIDE: 0.4,
	SCALE: 0.3,
	STAGGER: 0.1,
};

// Breakpoints (Tailwind)
export const BREAKPOINTS = {
	SM: 640,
	MD: 768,
	LG: 1024,
	XL: 1280,
	XXL: 1536,
};

// Demo Credentials (for development)
export const DEMO_CREDENTIALS = {
	EMAIL: "admin@example.com",
	PASSWORD: "password123",
};

// Contact Methods
export const CONTACT_METHODS = {
	EMAIL: "mithilesh@example.com",
	PHONE: "+91 (555) 123-4567",
	LOCATION: "San Francisco, CA",
	GITHUB: "https://github.com/yourusername",
	LINKEDIN: "https://linkedin.com/in/yourusername",
	TWITTER: "https://twitter.com/yourusername",
};

// Social Links
export const SOCIAL_LINKS = [
	{ name: "GitHub", url: "https://github.com", icon: "FiGithub" },
	{ name: "LinkedIn", url: "https://linkedin.com", icon: "FiLinkedin" },
	{ name: "Twitter", url: "https://twitter.com", icon: "FiTwitter" },
	{ name: "Email", url: "mailto:contact@example.com", icon: "FiMail" },
];

// Skills Data
export const SKILLS_DATA = [
	{
		id: "frontend",
		name: "Frontend",
		level: 95,
		description:
			"React, Vue, Angular, Svelte, TypeScript, Tailwind CSS, Responsive Design",
	},
	{
		id: "backend",
		name: "Backend",
		level: 90,
		description: "Node.js, Express, Python, Django, REST APIs, GraphQL",
	},
	{
		id: "devops",
		name: "Cloud & DevOps",
		level: 85,
		description: "Docker, Kubernetes, AWS, Google Cloud, CI/CD Pipelines",
	},
	{
		id: "performance",
		name: "Performance",
		level: 88,
		description: "Web Optimization, Code Splitting, Caching, SEO",
	},
	{
		id: "version-control",
		name: "Version Control",
		level: 92,
		description: "Git, GitHub, GitLab, Branching Strategies, Collaboration",
	},
	{
		id: "problem-solving",
		name: "Problem Solving",
		level: 93,
		description: "Design Patterns, Data Structures, Algorithms, Architecture",
	},
];

export default {
	API_BASE_URL,
	API_ENDPOINTS,
	AUTH_CONFIG,
	USER_ROLES,
	PROJECT_STATUS,
	SKILL_CATEGORIES,
	TECH_STACK,
	VALIDATION_CONFIG,
	ERROR_MESSAGES,
	SUCCESS_MESSAGES,
	API_CONFIG,
	PAGINATION,
	CACHE_DURATION,
	FILE_UPLOAD_CONFIG,
	ANIMATION_DURATION,
	BREAKPOINTS,
	DEMO_CREDENTIALS,
	CONTACT_METHODS,
	SOCIAL_LINKS,
	SKILLS_DATA,
};
