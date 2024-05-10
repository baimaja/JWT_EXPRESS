const express = require('express');
const router = express.Router();

// Mengimpor fungsi register dari AuthController
const { register,login, me } = require('../Controllers/AuthController');
const verifyToken = require('../middleware/VerifyToken')

// Menangani permintaan POST ke rute '/register' dengan fungsi register dari AuthController
router.post('/register', register);
router.post('/login',login);
router.get('/me',verifyToken, me)


// Mengekspor router agar dapat digunakan oleh aplikasi Express
module.exports = router;
