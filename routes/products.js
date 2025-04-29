const express = require('express');
const database = require('../database');
const { verifyToken, verifyAdmin } = require('../middleware/verifyToken');

const router = express.Router();

// Tambah produk (admin)
router.post('/', verifyToken, verifyAdmin, (req, res) => {
    const { name_product, price } = req.body;
    const queryInsert = 'insert into products (name_product, price) values (?, ?)';

    // Query
    database.query(queryInsert, [name_product, price], (err) => {
        if(err) return res.status(500).json({ err });
        res.json({ msg : 'Produk berhasil ditambahkan'});
    });
});

// Lihat semua produk
router.get('/', verifyToken, (req, res) => {
    const querySelect = 'select * from products';

    // Query
    database.query(querySelect, (err, result) => {
        if(err) return res.status(500).json({ err });
        res.json(result);
    });
});

module.exports = router;