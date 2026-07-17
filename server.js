const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve file statis dari folder project
app.use(express.static(path.join(__dirname)));

// Simpan user di server (password di-hash)
const users = [
  {
    username: 'admin',
    // hash dari password '12345'
    password: '$2b$10$uXhQJjzYQkqZcYzYwQkZ1uYFZkYQkZcYzYwQkZ1uYFZkYQkZcYzYwQkZ1u'
  }
];

// Endpoint login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send('User tidak ditemukan');

  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    res.send('Login berhasil!');
  } else {
    res.status(401).send('Password salah');
  }
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});