import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@livrosalura.xnzpacx.mongodb.net/enafood")

let db = mongoose.connection;

export default db;

