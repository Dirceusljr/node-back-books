const fs = require('fs');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

function removeFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))

    const novaListaFavoritos = livros.filter( livro => livro.id !== id)

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    removeFavorito
}