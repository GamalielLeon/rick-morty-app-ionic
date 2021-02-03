const { iss, name, secret, algorithm, expiresIn, httpOnly } = require('../constants/jwtData');
const { User } = require('../models/index');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = Router();

router.post('/', async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    _ = user ? '' : res.status(400).json({ message: 'User does not exist' });
    const passwordRight = await bcrypt.compare(password, user.password);
    _ = passwordRight ? '' : res.status(400).json({ message: 'wrong credentials' });
    if (passwordRight) {
        const payload = { name: user.firstName, email };
        const token = jwt.sign({ iss, ...payload }, secret, { algorithm, expiresIn });
        res.set('Authorization', `Bearer ${token}`);
        res.cookie(name, token, { maxAge: expiresIn * 1000, httpOnly });
        res.status(201).json({ token });
    }
});

module.exports = router;