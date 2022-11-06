import Service from "./service.js";

class Controller {
    async create({ body }, res){
        try {
            const user = await Service.create(body)

            return res.status(201).json(user);
        }
        catch (e){
            return  res.status(400).json(e);
        }
    }

    async getAll({query}, res){
        try {
            const users = await Service.getAll(query)

            return res.status(200).json(users);
        }
        catch (e){
            return  res.status(400).json(e);
        }
    }

    async getOne({params: {id}}, res){
        try {
            const user = await Service.getOne(id)

            return res.status(200).json(user);
        }
        catch (e){
            return  res.status(400).json(e.message);
        }
    }

    async update({ body, params: { id } }, res){
        try {
            const user = await Service.update(id,body)

            return res.status(202).json(user);
        }
        catch (e){
            return  res.status(400).json(e.message);
        }
    }

    async destroy({params: {id}}, res){
        try {
            await Service.destroy(id)

            return res.status(200).send("Delete user");
        }
        catch (e){
            return  res.status(400).json(e.message);
        }
    }
}

export default new Controller();