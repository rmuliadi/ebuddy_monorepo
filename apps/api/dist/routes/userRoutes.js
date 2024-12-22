"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/update-user-data', authMiddleware_1.authMiddleware, userController_1.updateUserData);
router.get('/fetch-user-data', authMiddleware_1.authMiddleware, userController_1.fetchUserData);
exports.default = router;
