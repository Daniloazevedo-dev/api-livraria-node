import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniloann:xtUVacPfFfUmFxTd@cluster0.qpmbv65.mongodb.net/livraria-mongo");

let db = mongoose.connection;

export default db;