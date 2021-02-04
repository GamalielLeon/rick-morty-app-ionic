const { iss, secret, algorithm, expiresIn } = require('../constants/jwtData');
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
        const createdAt = new Date(Date.now());
        const expiresAt = new Date(Date.now() + expiresIn * 1000);
        res.set('Authorization', `Bearer ${token}`);
        res.status(201).json({ token, type: 'Bearer', createdAt, expiresAt });
    }
});

module.exports = router;