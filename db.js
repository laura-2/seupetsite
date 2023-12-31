import mongoose from 'mongoose';

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error){
        throw new Error("Erro ao conectar")
    }
}

export default connect;