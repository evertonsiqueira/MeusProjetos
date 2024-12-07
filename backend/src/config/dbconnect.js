// importando o mongoose biblioteca para conectar ao mongodb.

import mongoose from "mongoose";



async function conectDataBase() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.vpdy4.mongodb.net/Unimenu?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}
export default conectDataBase;