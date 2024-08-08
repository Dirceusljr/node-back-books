const { Router } = require("express");
const { getLivros } = require("../controladores/livro");

const router = Router();

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Olá mundo!')
})

router.patch('/', (req, res) => {
    res.send('Olá mundo!')
})

router.delete('/', (req, res) => {
    res.send('Olá mundo!')
})

module.exports = router;