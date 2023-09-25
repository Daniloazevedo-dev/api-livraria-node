import express from "express";
import AutoresController from "../controller/autoresController.js";

const router = express.Router();

router
    .get('/autores', AutoresController.listarAutores)
    .post('/autores',AutoresController.cadastrarAutor)
    .put('/autores/:id', AutoresController.atualizarAutor)
    .get('/autores/:id', AutoresController.listarAutorPorId)
    .delete('/autores/:id', AutoresController.removerAutor);

export default router;