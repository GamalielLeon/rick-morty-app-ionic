const { Router } = require('express');
const router = Router(); //Creando una instancia de router
const Character = require('../models/Character');
// const { atlasURL } = require('../constants/database');

router.get('/', async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const inicio = (pageSize * (page - 1) + 1);
    const fin = (page * pageSize);
    const charactersPage = await Character.find({}).where('id').gte(inicio).lte(fin)
    console.log(charactersPage);
    await res.json(charactersPage);
    await res.json(err);
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const character = await Character.find({ id });
    await res.json(character);
    await res.json(err)
})

module.exports = router;