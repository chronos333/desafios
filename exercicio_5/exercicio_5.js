const express = require("express");
const app = express();
const path = require("path");

// Servir arquivos estáticos
app.use(express.static("public"));

// Rota raiz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});