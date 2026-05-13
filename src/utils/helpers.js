// String Utilities
export const capitalize = (str) => {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const trim = (str) => {
	if (!str) return "";
	return str.trim();
};

export const truncate = (str, length = 100) => {
	if (!str || str.length <= length) return str;
	return str.substring(0, length) + "...";
};

export const camelToKebab = (str) => {
	return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

export const kebabToCamel = (str) => {
	return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

// Array Utilities
export const unique = (arr) => {
	return [...new Set(arr)];
};

export const groupBy = (arr, key) => {
	return arr.reduce((acc, obj) => {
		const group = obj[key];
		if (!acc[group]) acc[group] = [];
		acc[group].push(obj);
		return acc;
	}, {});
};

export const sortBy = (arr, key, order = "asc") => {
	return [...arr].sort((a, b) => {
		if (order === "asc") {
			return a[key] > b[key] ? 1 : -1;
		}
		return a[key] < b[key] ? 1 : -1;
	});
};

export const filterBy = (arr, key, value) => {
	return arr.filter((item) => item[key] === value);
};

export const findById = (arr, id) => {
	return arr.find((item) => item.id === id || item._id === id);
};

export const removeById = (arr, id) => {
	return arr.filter((item) => item.id !== id && item._id !== id);
};

export const updateById = (arr, id, updates) => {
	return arr.map((item) =>
		item.id === id || item._id === id ? { ...item, ...updates } : item,
	);
};

// Date Utilities
export const formatDate = (date, format = "MMM DD, YYYY") => {
	if (!date) return "";
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, "0");
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const year = d.getFullYear();
	const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
		d,
	);

	return format
		.replace("DD", day)
		.replace("MM", month)
		.replace("YYYY", year)
		.replace("MMM", monthName);
};

export const formatTime = (date) => {
	if (!date) return "";
	const d = new Date(date);
	return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
};

export const getRelativeTime = (date) => {
	if (!date) return "";
	const now = new Date();
	const diff = now - new Date(date);
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (seconds < 60) return "Just now";
	if (minutes < 60) return `${minutes}m ago`;
	if (hours < 24) return `${hours}h ago`;
	if (days < 7) return `${days}d ago`;
	if (days < 30) return `${Math.floor(days / 7)}w ago`;
	if (days < 365) return `${Math.floor(days / 30)}m ago`;
	return `${Math.floor(days / 365)}y ago`;
};

export const isSameDay = (date1, date2) => {
	if (!date1 || !date2) return false;
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	return d1.toDateString() === d2.toDateString();
};

// Number Utilities
export const formatNumber = (num) => {
	if (!num) return "0";
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatCurrency = (num, currency = "USD") => {
	if (!num) return "$0";
	return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
		num,
	);
};

export const round = (num, decimals = 2) => {
	return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const clamp = (num, min, max) => {
	return Math.max(Math.min(num, max), min);
};

export const getPercentage = (value, total) => {
	if (total === 0) return 0;
	return round((value / total) * 100);
};

// Object Utilities
export const pick = (obj, keys) => {
	const picked = {};
	keys.forEach((key) => {
		if (key in obj) picked[key] = obj[key];
	});
	return picked;
};

export const omit = (obj, keys) => {
	const omitted = { ...obj };
	keys.forEach((key) => {
		delete omitted[key];
	});
	return omitted;
};

export const merge = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

export const deepMerge = (obj1, obj2) => {
	const merged = { ...obj1 };
	Object.keys(obj2).forEach((key) => {
		if (typeof obj2[key] === "object" && obj2[key] !== null) {
			merged[key] = deepMerge(merged[key] || {}, obj2[key]);
		} else {
			merged[key] = obj2[key];
		}
	});
	return merged;
};

export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
};

export const hasProperty = (obj, key) => {
	return Object.prototype.hasOwnProperty.call(obj, key);
};

// URL Utilities
export const getQueryParam = (param) => {
	const params = new URLSearchParams(window.location.search);
	return params.get(param);
};

export const setQueryParam = (param, value) => {
	const params = new URLSearchParams(window.location.search);
	params.set(param, value);
	window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
};

export const buildQueryString = (obj) => {
	return Object.entries(obj)
		.filter(([, v]) => v !== null && v !== undefined && v !== "")
		.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
		.join("&");
};

export const parseQueryString = (str) => {
	const params = new URLSearchParams(str);
	const obj = {};
	params.forEach((value, key) => {
		obj[key] = value;
	});
	return obj;
};

// Color Utilities
export const hexToRgb = (hex) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			}
		: null;
};

export const rgbToHex = (r, g, b) => {
	return (
		"#" +
		[r, g, b]
			.map((x) => {
				const hex = x.toString(16);
				return hex.length === 1 ? "0" + hex : hex;
			})
			.join("")
	);
};

// Local Storage Utilities
export const getFromStorage = (key) => {
	try {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		console.error(`Error reading from localStorage: ${error}`);
		return null;
	}
};

export const setToStorage = (key, value) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error(`Error writing to localStorage: ${error}`);
	}
};

export const removeFromStorage = (key) => {
	try {
		window.localStorage.removeItem(key);
	} catch (error) {
		console.error(`Error removing from localStorage: ${error}`);
	}
};

export const clearStorage = () => {
	try {
		window.localStorage.clear();
	} catch (error) {
		console.error(`Error clearing localStorage: ${error}`);
	}
};

// File Utilities
export const getFileExtension = (filename) => {
	return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};

export const getFileSizeInMB = (bytes) => {
	return (bytes / (1024 * 1024)).toFixed(2);
};

export const isImageFile = (file) => {
	return file && file.type.startsWith("image/");
};

// Debounce
export const debounce = (func, delay = 300) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), delay);
	};
};

// Throttle
export const throttle = (func, delay = 300) => {
	let lastCall = 0;
	return (...args) => {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			func(...args);
		}
	};
};

// Retry with exponential backoff
export const retry = async (fn, maxAttempts = 3, delay = 1000) => {
	for (let i = 0; i < maxAttempts; i++) {
		try {
			return await fn();
		} catch (error) {
			if (i === maxAttempts - 1) throw error;
			await new Promise((resolve) =>
				setTimeout(resolve, delay * Math.pow(2, i)),
			);
		}
	}
};

// Deep clone
export const deepClone = (obj) => {
	if (obj === null || typeof obj !== "object") return obj;
	if (obj instanceof Date) return new Date(obj.getTime());
	if (obj instanceof Array) return obj.map((item) => deepClone(item));
	if (obj instanceof Object) {
		const cloned = {};
		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				cloned[key] = deepClone(obj[key]);
			}
		}
		return cloned;
	}
};

export default {
	// String
	capitalize,
	trim,
	truncate,
	camelToKebab,
	kebabToCamel,

	// Array
	unique,
	groupBy,
	sortBy,
	filterBy,
	findById,
	removeById,
	updateById,

	// Date
	formatDate,
	formatTime,
	getRelativeTime,
	isSameDay,

	// Number
	formatNumber,
	formatCurrency,
	round,
	clamp,
	getPercentage,

	// Object
	pick,
	omit,
	merge,
	deepMerge,
	isEmpty,
	hasProperty,

	// URL
	getQueryParam,
	setQueryParam,
	buildQueryString,
	parseQueryString,

	// Color
	hexToRgb,
	rgbToHex,

	// Storage
	getFromStorage,
	setToStorage,
	removeFromStorage,
	clearStorage,

	// File
	getFileExtension,
	getFileSizeInMB,
	isImageFile,

	// Functional
	debounce,
	throttle,
	retry,
	deepClone,
};
