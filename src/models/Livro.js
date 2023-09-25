import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: 'string'},
        titulo: {type: 'string', required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: 'string', required: true},
        numeroPaginas: {type: 'number'},
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;