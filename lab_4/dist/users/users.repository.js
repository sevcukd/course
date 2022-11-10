"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const { users } = require('../database');
let UsersRepository = class UsersRepository {
    async find({ id }) {
        return id ? users.filter(u => u.id === id) : users;
    }
    async createUser({ dto }) {
        const user = { id: dto.id, name: dto.name, email: dto.email };
        users.push(user);
        return user;
    }
    async updateUser({ id, name, email }) {
        const user = users.findIndex(u => u.id === id);
        users[user].name = name;
        users[user].email = email;
        return users[user];
    }
    async deleteUser({ id }) {
        const user = users.findIndex(u => u.id === id);
        users.splice(user, 1);
        return `user ${id} deleted `;
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map