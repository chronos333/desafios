const express = require("express");
const app = express();

// Middleware de log
app.use((req, res, next) => {
    const data = new Date().toLocaleString();
    console.log(`[${data}] ${req.method} - ${req.url}`);
    next();
});

// Rotas para teste
app.get("/", (req, res) => {
    res.send("Rota principal");
});

app.get("/teste", (req, res) => {
    res.send("Outra rota");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});