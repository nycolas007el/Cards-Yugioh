const form = document.getElementById('formCad');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('nomeUsuarioCad').value;
    const senha = document.getElementById('SenhaCad').value;
    const Cfsenha = document.getElementById('CSenhaCad').value;

    // Conferir senhas
    if (senha !== Cfsenha) {
        alert("As senhas não conferem!");
        return;
    }

    // Objeto com os dados para enviar ao Java
    const dadosCadastro = {
        nUsuario: usuario,
        senha: senha
    };

    // Enviar para o Spring Boot
    fetch('http://localhost:8080/usuarios/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosCadastro)
    })
    .then(resposta => resposta.text())
    .then(mensagem => {
        alert(mensagem); // Mensagem que veio do Java!
        if (mensagem.includes("sucesso") || mensagem.includes("cadastrado")) {
            window.location.href = "Login.html"; // Redireciona para o Login!
        }
    })
    .catch(erro => {
        console.error('Erro:', erro);
        alert("Erro de conexão com o servidor!");
    });
});