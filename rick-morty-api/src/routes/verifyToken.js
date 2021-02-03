const { iss, name, secret, algorithm } = require('../constants/jwtData');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();

router.use(async(req, res, next) => {
    try {
        const tokenFromUser = req.cookies[name];
        jwt.verify(tokenFromUser, secret, { algorithms: [algorithm], issuer: iss });
        next();
    } catch (error) { res.status(401).json({ message: 'Unauthorized' }); }
});

module.exports = router;