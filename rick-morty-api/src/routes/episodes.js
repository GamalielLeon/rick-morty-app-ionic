const { Router } = require('express');
const router = Router();
const Episode = require('../models/Episode');

// Este no sé que tan necesario sea pero lo comentamos
router.get('/', async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const inicio = (pageSize * (page - 1) + 1);
    const fin = (page * pageSize);
    const episodesPage = await Episode.find({}).where('id').gte(inicio).lte(fin)
    console.log(episodesPage);
    await res.json(episodesPage);
    await res.json(err);
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const episode = await Episode.find({ id });
    await res.json(episode);
    await res.json(err);
    // console.log(character);
})

module.exports = router;