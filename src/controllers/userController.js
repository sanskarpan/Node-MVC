const userService = require('../services/userService');
const { validateUser, validateId } = require('../validators/userValidator');

class UserController {
    async listUsers(req, res, next) {
        try {
            const users = await userService.listUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req, res, next) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) return res.status(400).json({ error: error.details[0].message });

            const user = await userService.getUser(req.params.userId);
            if (!user) return res.status(404).json({ error: 'User not found' });

            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            const { error } = validateUser(req.body);
            if (error) return res.status(400).json({ error: error.details[0].message });

            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const { error: idError } = validateId(req.params.userId);
            if (idError) return res.status(400).json({ error: idError.details[0].message });

            const { error: userError } = validateUser(req.body);
            if (userError) return res.status(400).json({ error: userError.details[0].message });

            const user = await userService.updateUser(req.params.userId, req.body);
            if (!user) return res.status(404).json({ error: 'User not found' });

            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) return res.status(400).json({ error: error.details[0].message });

            const user = await userService.deleteUser(req.params.userId);
            if (!user) return res.status(404).json({ error: 'User not found' });

            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
