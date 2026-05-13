export const validateEmail = (email) => {
	const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
};

export const validatePassword = (password) => {
	return password && password.length >= 6;
};

export const validateUrl = (url) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};
