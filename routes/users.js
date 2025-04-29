const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = require('../database');
const { verifyToken, verifyAdmin } = require('../middleware/verifyToken');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    // Tidak boleh menyimpan password asli di database maka harus dibcrypt
    const hashed = await bcrypt.hash(password, 10);
    const queryInsert = 'insert into users (username, password, role) values (?, ?, ?)';

    // Query ke database
    database.query(queryInsert, [username, hashed, role || 'user'] , (err) => {
        if(err) return res.status(500).json({ err });
        res.json({ msg : 'User registered'});
    });
});

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const querySelect = 'select * from users where username = ?';

    // Query ke database
    database.query(querySelect, [username], async(err, result) => {
        if(err || result.length === 0) return res.status(401).json({ msg: 'User not found' });

        const user = result[0];
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(403).json({ msg : 'Wrong Password'});

        const token = jwt.sign({ 
            id : user.id, 
            username : user.username,
            role : user.role
        }, process.env.SECRET, { expiresIn : '1h'});
        
        res.json({ token });
    });
});

// Admin bisa melihat semua users
router.get('/', verifyToken, verifyAdmin, (req, res) => {
    const querySelect = 'select id, username, role from users';
    database.query(querySelect, (err, result) => {
        if(err) return res.status(500).json({ err });
        res.json(result);
    });
});

module.exports = router;