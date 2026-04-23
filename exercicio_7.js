const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];
let id = 1;

// GET todos
app.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
});

// POST
app.post("/usuarios", (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }

    const usuario = { id: id++, nome };
    usuarios.push(usuario);

    res.status(201).json(usuario);
});

// GET por ID
app.get("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
});

// PUT
app.put("/usuarios/:id", (req, res) => {
    const { nome } = req.body;
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }

    usuario.nome = nome;

    res.status(200).json(usuario);
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
    const index = usuarios.findIndex(u => u.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    usuarios.splice(index, 1);

    res.status(200).json({ mensagem: "Usuário removido" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/usuarios");
});