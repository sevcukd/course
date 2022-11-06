import User from "./model.js";

class Service {
    async create (body){
        return User.create(body);
    }

    async getAll(query) {
        return User.find(query)
    }
    async getOne(id) {
        const user = User.findById(id)
        if (!user) throw new Error('User not Found')
        return user;
    }
    async update(id, body) {
        const user = await User.findByIdAndUpdate(id,body,{new: true})
        if (!user) throw new Error('User not Found')

        return user
    }

    async destroy(id) {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw new Error('User not Found');
        return user;
    }
}

export default  new Service();