import mongoose from "mongoose";
const {Schema} = mongoose;

const postSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    topico: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.models.Post || mongoose.model("Post", postSchema)