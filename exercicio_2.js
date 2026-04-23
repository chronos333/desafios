const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [];
let id = 1;

// GET
app.get("/tarefas", (req, res) => {
    res.status(200).json(tarefas);
});

// POST
app.post("/tarefas", (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
    }

    const tarefa = { id: id++, nome };
    tarefas.push(tarefa);

    res.status(201).json(tarefa);
});

// DELETE
app.delete("/tarefas/:id", (req, res) => {
    const tarefaId = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === tarefaId);

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    tarefas.splice(index, 1);

    res.status(200).json({ mensagem: "Tarefa removida" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/tarefas");
});