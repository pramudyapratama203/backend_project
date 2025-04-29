const jwt = require('jsonwebtoken');

function verifyToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    if(!token) res.sendStatus(401);

    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if(err) return res.sendStatus(403);
        req.user = decode;
        next();
    });
}

function verifyAdmin(req, res, next) {
    if(req.user.role !== 'admin') {
        return res.status(403).json({ msg : 'Admin only'});
    }
    next();
}

module.exports = {
    verifyToken,
    verifyAdmin
}