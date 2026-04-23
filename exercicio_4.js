const express = require("express");
const app = express();

// Rota normal
app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

// Rota que gera erro
app.get("/erro", (req, res, next) => {
    next({ status: 400, message: "Erro de teste" });
});

// Middleware de erro
app.use((err, req, res, next) => {
    console.error("Erro capturado:", err.message);

    res.status(err.status || 500).json({
        status: err.status || 500,
        erro: err.message || "Erro interno do servidor"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});