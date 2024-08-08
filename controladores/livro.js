const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro: deletaLivroPorId } = require("../servicos/livro")

function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function getLivro (req, res) {
    const id = req.params.id
    try {
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
    const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send('Livro inserido com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro (req, res) {
    try {
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.send('Livro modificado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro (req, res) {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send('Livro excluído com sucesso')
    } catch (error) {
        es.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}