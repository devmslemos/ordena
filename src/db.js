// db.js
const mysql = require('mysql2');

// Criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',       // O host do banco de dados
  user: 'root',     // Seu usuário do banco de dados
  password: '1234',   // Sua senha do banco de dados
  database: 'ordenaflask',   // O nome do banco de dados
});

// Função para testar a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida!');
  }
});

// Exporta a conexão para ser utilizada em outros arquivos
module.exports = connection;
