// estrutura básica do backend Node.js com Express e MySQL

// 📁 src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





// Listar amostras
router.get('/amostras', (req, res) => {
  const sql = 'SELECT * FROM amostras';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Adicionar nova amostra
router.post('/amostras', (req, res) => {
  const dados = req.body;
  const sql = 'INSERT INTO amostras SET ?';
  db.query(sql, dados, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, ...dados });
  });
});

// Atualizar amostra
router.put('/amostras/:id', (req, res) => {
  const id = req.params.id;
  const dados = req.body;
  const sql = 'UPDATE amostras SET ? WHERE id = ?';
  db.query(sql, [dados, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, ...dados });
  });
});

// Deletar amostra
router.delete('/amostras/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM amostras WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Amostra deletada com sucesso!' });
  });
});

module.exports = router;

// 💾 Script SQL para criar o banco de dados

/*
CREATE DATABASE estoque_amostras;

USE estoque_amostras;

CREATE TABLE amostras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_produto VARCHAR(100),
  nome_produto VARCHAR(255),
  quantidade INT,
  categoria VARCHAR(100),
  fornecedor VARCHAR(100),
  data_entrada DATE,
  status VARCHAR(50),
  responsavel VARCHAR(100),
  observacoes TEXT
);
*/

