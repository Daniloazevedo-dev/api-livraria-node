import req from "express/lib/request.js";
import autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = (req, res) => {
        autores.find((err, autor) => {
            res.status(200).json(autor);
        }, error => {
            concole.error(error);
        });
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autor) => {
            if (!err) {
                res.status(200).json(autor);
            } else {
                res.status(404).send({ message: `${err.message} - Id  do autor ${id} não localizado.` });
            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).json({ message: `${err.message} - falha ao cadastrar autor.` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {

        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).json({ message: `Autor atualizado com sucesso.` });
            } else {
                res.status(500).json({ message: `${err.message} - falha ao atualizar autor.` });                
            }
        });
    }

    static removerAutor = (req, res) => { 
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `Autor removido com sucesso.` });
            } else {
                res.status(500).send({ message: `${err.message} - falha ao remover autor.` });                
            }
        });

    }

}

export default AutoresController;