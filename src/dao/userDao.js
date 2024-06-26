const User = require('../models/userModel');

class UserDao {
    async getAllUsers() {
        return User.find({ isDeleted: false });
    }

    async getUserById(userId) {
        return User.findById(userId);
    }

    async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    async updateUser(userId, userData) {
        return User.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId) {
        return User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
    }
}

module.exports = new UserDao();
