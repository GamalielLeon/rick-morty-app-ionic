const { name, secret, algorithm, expiresIn, httpOnly } = require('../constants/jwtData');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();

router.post('/', (req, res) => {
    const token = jwt.sign({ email: req.body.email }, secret, { algorithm, expiresIn });
    res.cookie(name, token, { maxAge: expiresIn * 1000, httpOnly });
    res.status(201).json(token);
});

module.exports = router;