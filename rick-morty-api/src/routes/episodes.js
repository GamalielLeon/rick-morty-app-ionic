const { Episode } = require('../models/index');
const authenticate = require('./verifyToken');
const { Router } = require('express');
const router = Router();

router.get('/', authenticate, async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const idStart = pageSize * (page - 1) + 1;
    const idEnd = page * pageSize;
    const episodesPage = await Episode.find({}, { _id: 0 }).where('id').gte(idStart).lte(idEnd);
    await res.json(episodesPage);
});

router.get('/:id', authenticate, async(req, res) => {
    const id = req.params.id;
    const episode = await Episode.find({ id }, { _id: 0 });
    await res.json(episode);
});

module.exports = router;