import { Injectable } from '@nestjs/common';
const { users } = require('../database');

@Injectable()
export class UsersRepository {
    async find({ id }) {
        return id ? users.filter(u => u.id === id) : users;
    }

    async createUser({ dto }) {
        const user = {id: dto.id, name: dto.name, email: dto.email}
        users.push(user)
        return user
    }

    async updateUser({id, name, email}) {
        const user = users.findIndex(u => u.id === id)
        users[user].name = name
        users[user].email = email
        return users[user]
    }

    async deleteUser({id}) {
        const user = users.findIndex(u => u.id === id)
        users.splice(user, 1)
        return `user ${id} deleted `
    }
}