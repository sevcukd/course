"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMiddleware = void 0;
const common_1 = require("@nestjs/common");
const { users } = require('../database');
let UsersMiddleware = class UsersMiddleware {
    use(req, res, next) {
        const index = users.findIndex(u => u.id === req.params.id);
        if (req.method === 'POST') {
            const postIndex = users.findIndex(u => u.id === req.body.id);
            if (postIndex !== -1) {
                return res.status(405).json({ success: false, message: 'User with this ID already exists' });
            }
        }
        else if (index === -1) {
            return res.status(404).json({ success: false, message: 'User is not found' });
        }
        next();
    }
};
UsersMiddleware = __decorate([
    (0, common_1.Injectable)()
], UsersMiddleware);
exports.UsersMiddleware = UsersMiddleware;
//# sourceMappingURL=users.middleware.js.map