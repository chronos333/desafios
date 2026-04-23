let usuarios = [];

function getUsuarios() {
    return usuarios;
}

function addUsuario(nome) {
    const usuario = { id: usuarios.length + 1, nome };
    usuarios.push(usuario);
    return usuario;
}

function deleteUsuario(id) {
    usuarios = usuarios.filter(u => u.id !== id);
}

module.exports = {
    getUsuarios,
    addUsuario,
    deleteUsuario
};