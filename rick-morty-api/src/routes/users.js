const { User } = require('../models/index');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    const idStart = pageSize * (page - 1) + 1;
    const idEnd = page * pageSize;
    const episodesPage = await User.find({}, { _id: 0, __v: 0, password: 0 }).where('id').gte(idStart).lte(idEnd);
    await res.json(episodesPage);
});
router.get('/:id', async(req, res) => {
    const user = await User.findOne({ id: req.params.id }, { _id: 0, __v: 0, password: 0 });
    res.status(200).json(user);
});
router.post('/', async(req, res) => {
    const countUsers = (await User.find().countDocuments()) + 1;
    let userPosted;
    try {
        userPosted = await (new User({...req.body, id: countUsers })).save();
        userPosted = await User.findOne({ id: userPosted.id }, { _id: 0, __v: 0, password: 0 });
    } catch (error) { userPosted = error.message; }
    res.status(200).json(userPosted);
});
router.delete('/:id', async(req, res) => {
    const userDeleted = await User.deleteOne({ id: req.params.id }, { _id: 0, __v: 0, password: 0 });
    res.status(200).json(userDeleted);
});

module.exports = router;