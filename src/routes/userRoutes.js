const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/worko/user', authMiddleware, userController.listUsers);
router.get('/worko/user/:userId', authMiddleware, userController.getUser);
router.post('/worko/user', authMiddleware, userController.createUser);
router.put('/worko/user/:userId', authMiddleware, userController.updateUser);
router.delete('/worko/user/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
