import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
},{
    timestamps: true,
    versionKey: false
})

const model = mongoose.model("User", userSchema)
export default  model;