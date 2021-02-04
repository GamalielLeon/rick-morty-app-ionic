const { Character } = require('../models/index');
const authenticate = require('./verifyToken');
const { Router } = require('express');
const router = Router(); //Creando una instancia de router

router.get('/', authenticate, async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const idStart = pageSize * (page - 1) + 1;
    const idEnd = page * pageSize;
    const charactersPage = await Character.find({}).where('id').gte(idStart).lte(idEnd);
    await res.json(charactersPage);
});

router.get('/:id', authenticate, async(req, res) => {
    const id = req.params.id;
    const character = await Character.find({ id });
    await res.json(character);
});

module.exports = router;