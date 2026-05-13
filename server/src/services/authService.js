import User from "../models/User.js";

export const createUser = async (userData) => {
	const user = new User(userData);
	await user.save();
	return user;
};

export const getUserById = async (id) => {
	return await User.findById(id);
};

export const getUserByEmail = async (email) => {
	return await User.findOne({ email });
};

export const updateUser = async (id, updateData) => {
	return await User.findByIdAndUpdate(id, updateData, {
		new: true,
		runValidators: true,
	});
};
