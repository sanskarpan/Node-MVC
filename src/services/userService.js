const userDao = require('../dao/userDao');

class UserService {
    async listUsers() {
        return userDao.getAllUsers();
    }

    async getUser(userId) {
        return userDao.getUserById(userId);
    }

    async createUser(userData) {
        return userDao.createUser(userData);
    }

    async updateUser(userId, userData) {
        return userDao.updateUser(userId, userData);
    }

    async deleteUser(userId) {
        return userDao.deleteUser(userId);
    }
}

module.exports = new UserService();
