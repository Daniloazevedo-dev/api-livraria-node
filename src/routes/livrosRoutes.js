import express from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .post('/livros',LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .get('/livros/:id', LivroController.listarLivroPorId)
    .delete('/livros/:id', LivroController.removerLivro);

export default router;