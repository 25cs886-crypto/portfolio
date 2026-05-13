import { VALIDATION_CONFIG, ERROR_MESSAGES } from "./constants";

// Email Validation
export const validateEmail = (email) => {
	if (!email) return ERROR_MESSAGES.EMAIL_REQUIRED;
	if (!VALIDATION_CONFIG.EMAIL_PATTERN.test(email)) {
		return ERROR_MESSAGES.INVALID_EMAIL;
	}
	return "";
};

// Password Validation
export const validatePassword = (password) => {
	if (!password) return ERROR_MESSAGES.PASSWORD_REQUIRED;
	if (password.length < VALIDATION_CONFIG.PASSWORD_MIN_LENGTH) {
		return `Password must be at least ${VALIDATION_CONFIG.PASSWORD_MIN_LENGTH} characters`;
	}
	// Check for strong password: uppercase, lowercase, number
	if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
		return "Password must contain uppercase, lowercase, and numbers";
	}
	return "";
};

// Name Validation
export const validateName = (name) => {
	if (!name || !name.trim()) return ERROR_MESSAGES.NAME_REQUIRED;
	if (name.length < VALIDATION_CONFIG.NAME_MIN_LENGTH) {
		return `Name must be at least ${VALIDATION_CONFIG.NAME_MIN_LENGTH} characters`;
	}
	if (name.length > VALIDATION_CONFIG.NAME_MAX_LENGTH) {
		return `Name must not exceed ${VALIDATION_CONFIG.NAME_MAX_LENGTH} characters`;
	}
	return "";
};

// URL Validation
export const validateUrl = (url) => {
	if (!url) return "URL is required";
	if (!VALIDATION_CONFIG.URL_PATTERN.test(url)) {
		return "Please enter a valid URL";
	}
	return "";
};

// Phone Validation
export const validatePhone = (phone) => {
	if (!phone) return "Phone number is required";
	if (!VALIDATION_CONFIG.PHONE_PATTERN.test(phone)) {
		return "Please enter a valid phone number";
	}
	return "";
};

// Message Validation
export const validateMessage = (message) => {
	if (!message || !message.trim()) return ERROR_MESSAGES.MESSAGE_REQUIRED;
	if (message.length < 10) return "Message must be at least 10 characters";
	if (message.length > 5000) return "Message must not exceed 5000 characters";
	return "";
};

// Subject Validation
export const validateSubject = (subject) => {
	if (!subject || !subject.trim()) return ERROR_MESSAGES.SUBJECT_REQUIRED;
	if (subject.length < 5) return "Subject must be at least 5 characters";
	if (subject.length > 100) return "Subject must not exceed 100 characters";
	return "";
};

// Description Validation
export const validateDescription = (description) => {
	if (!description || !description.trim()) return "Description is required";
	if (description.length < 20)
		return "Description must be at least 20 characters";
	if (description.length > VALIDATION_CONFIG.DESCRIPTION_MAX_LENGTH) {
		return `Description must not exceed ${VALIDATION_CONFIG.DESCRIPTION_MAX_LENGTH} characters`;
	}
	return "";
};

// Title Validation
export const validateTitle = (title) => {
	if (!title || !title.trim()) return "Title is required";
	if (title.length < 3) return "Title must be at least 3 characters";
	if (title.length > 100) return "Title must not exceed 100 characters";
	return "";
};

// Tech Stack Validation
export const validateTechStack = (techStack) => {
	if (!techStack || techStack.length === 0)
		return "At least one technology is required";
	if (techStack.length > 20) return "Maximum 20 technologies allowed";
	return "";
};

// File Validation
export const validateFile = (file) => {
	if (!file) return "File is required";

	const { ACCEPTED_FORMATS, MAX_FILE_SIZE } = VALIDATION_CONFIG;

	// Check file size
	if (file.size > MAX_FILE_SIZE) {
		return ERROR_MESSAGES.FILE_TOO_LARGE;
	}

	// Check file type
	if (!ACCEPTED_FORMATS.includes(file.type)) {
		return ERROR_MESSAGES.INVALID_FILE_TYPE;
	}

	return "";
};

// Form Validation - Contact Form
export const validateContactForm = (formData) => {
	const errors = {};

	if (!formData.name || !formData.name.trim()) {
		errors.name = ERROR_MESSAGES.NAME_REQUIRED;
	} else if (formData.name.length < 2) {
		errors.name = "Name must be at least 2 characters";
	}

	const emailError = validateEmail(formData.email);
	if (emailError) errors.email = emailError;

	const subjectError = validateSubject(formData.subject);
	if (subjectError) errors.subject = subjectError;

	const messageError = validateMessage(formData.message);
	if (messageError) errors.message = messageError;

	return errors;
};

// Form Validation - Login Form
export const validateLoginForm = (formData) => {
	const errors = {};

	const emailError = validateEmail(formData.email);
	if (emailError) errors.email = emailError;

	const passwordError = validatePassword(formData.password);
	if (passwordError) errors.password = passwordError;

	return errors;
};

// Form Validation - Register Form
export const validateRegisterForm = (formData) => {
	const errors = {};

	const nameError = validateName(formData.name);
	if (nameError) errors.name = nameError;

	const emailError = validateEmail(formData.email);
	if (emailError) errors.email = emailError;

	const passwordError = validatePassword(formData.password);
	if (passwordError) errors.password = passwordError;

	if (formData.password !== formData.confirmPassword) {
		errors.confirmPassword = "Passwords do not match";
	}

	return errors;
};

// Form Validation - Project Form
export const validateProjectForm = (formData) => {
	const errors = {};

	const titleError = validateTitle(formData.title);
	if (titleError) errors.title = titleError;

	const descriptionError = validateDescription(formData.description);
	if (descriptionError) errors.description = descriptionError;

	// Validate tech stack
	const techStackArray = formData.techStack
		.split(",")
		.map((tech) => tech.trim())
		.filter((tech) => tech.length > 0);

	if (techStackArray.length === 0) {
		errors.techStack = "At least one technology is required";
	}

	// Validate GitHub Link
	if (formData.githubLink && formData.githubLink.trim()) {
		const githubError = validateUrl(formData.githubLink);
		if (githubError) errors.githubLink = githubError;
	}

	// Validate Live Link
	if (formData.liveLink && formData.liveLink.trim()) {
		const liveError = validateUrl(formData.liveLink);
		if (liveError) errors.liveLink = liveError;
	}

	// Validate Image
	if (
		formData.image &&
		typeof formData.image === "object" &&
		formData.image instanceof File
	) {
		const fileError = validateFile(formData.image);
		if (fileError) errors.image = fileError;
	}

	return errors;
};

// Check if form has errors
export const hasErrors = (errors) => {
	return Object.values(errors).some((error) => error.length > 0);
};

// Sanitize string (basic XSS prevention)
export const sanitizeString = (str) => {
	if (!str) return "";
	const div = document.createElement("div");
	div.textContent = str;
	return div.innerHTML;
};

// Validate URL format
export const isValidUrl = (url) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

// Validate email format more thoroughly
export const isValidEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};

// Validate strong password
export const isStrongPassword = (password) => {
	const hasUppercase = /[A-Z]/.test(password);
	const hasLowercase = /[a-z]/.test(password);
	const hasNumbers = /\d/.test(password);
	const hasSpecialChar = /[@$!%*?&]/.test(password);
	const isLongEnough = password.length >= 8;

	return (
		hasUppercase && hasLowercase && hasNumbers && hasSpecialChar && isLongEnough
	);
};

// Validate credit card number (Luhn algorithm)
export const isCreditCardValid = (cardNumber) => {
	const digits = cardNumber.replace(/\D/g, "");
	let sum = 0;
	let isEven = false;

	for (let i = digits.length - 1; i >= 0; i--) {
		let digit = parseInt(digits[i], 10);

		if (isEven) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}

		sum += digit;
		isEven = !isEven;
	}

	return sum % 10 === 0;
};

// Batch validation
export const validateBatch = (data, validators) => {
	const errors = {};

	Object.entries(validators).forEach(([field, validator]) => {
		if (typeof validator === "function") {
			const error = validator(data[field]);
			if (error) errors[field] = error;
		}
	});

	return errors;
};

// Normalize form data
export const normalizeFormData = (formData) => {
	const normalized = {};

	Object.entries(formData).forEach(([key, value]) => {
		if (typeof value === "string") {
			normalized[key] = value.trim();
		} else {
			normalized[key] = value;
		}
	});

	return normalized;
};

export default {
	// Individual validators
	validateEmail,
	validatePassword,
	validateName,
	validateUrl,
	validatePhone,
	validateMessage,
	validateSubject,
	validateDescription,
	validateTitle,
	validateTechStack,
	validateFile,

	// Form validators
	validateContactForm,
	validateLoginForm,
	validateRegisterForm,
	validateProjectForm,

	// Utility functions
	hasErrors,
	sanitizeString,
	isValidUrl,
	isValidEmail,
	isStrongPassword,
	isCreditCardValid,
	validateBatch,
	normalizeFormData,
};
