 const form = document.getElementById('formLog');

        form.addEventListener('submit', function (event) {
            //para nao recarregar a página
            event.preventDefault();

            const usuario = document.getElementById('usuarioLog').value
            const senha = document.getElementById('senhaLog').value

            const dadosLogin = {
                nUsuario: usuario,
                senha: senha
            }
            //enviar para login
            fetch('http://localhost:8080/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosLogin)
            })
            .then(resposta=>resposta.text())
            .then(mensagem=>{
                //se java responder certo
                if(mensagem.includes("sucesso")){
                    alert("login realizado com sucesso Bem-vindo(a),"+usuario);
                    //guarda nome na memoria
                    localStorage.setItem('usuarioLogado',usuario);
                    window.location.href ="Inicial.html";
                }else{
                    alert(mensagem);
                }
                
            })
            .catch(erro => {
                console.error("erro:",erro);
                alert("erro ao conectar com o servidor");
            })
        })