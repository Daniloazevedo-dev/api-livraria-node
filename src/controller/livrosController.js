import req from "express/lib/request.js";
import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livro) => {
            if (!err) {
                res.status(200).json(livro);
            } else {
                res.status(404).send({ message: `${err.message} - Id  do livro ${id} não localizado.` });
            }
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).json({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {

        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).json({ message: `Livro atualizado com sucesso.` });
            } else {
                res.status(500).json({ message: `${err.message} - falha ao atualizar livro.` });                
            }
        });
    }

    static removerLivro = (req, res) => { 
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `Livro removido com sucesso.` });
            } else {
                res.status(500).send({ message: `${err.message} - falha ao remover livro.` });                
            }
        });

    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livro) => {
            if (!err) {
                res.status(200).json(livro);
            } else {
                res.status(404).send({ message: `${err.message} - o Livro para a editora ${editora} não  foi localizada.` });
            }
        });
    }

}

export default LivroController;