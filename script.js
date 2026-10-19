 const form = document.querySelector('form');
            form.addEventListener('submit', function(event){
                event.preventDefault();
                const novoCard = {
                    nome: document.getElementById('Nome').value,
                    descricao: document.getElementById('Descricao').value,
                    ATKDEF: document.getElementById('ATKDEF').value,
                    tipo: document.getElementById('Tipo').value,
                    imgUrl: document.getElementById('Imagem').value
                };
                fetch('http://localhost:8080/cards',{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(novoCard)
                })
                .then(resposta=> resposta.json())
                .then(cardSalvo=>{
                    alert('Carta Criada com sucesso: ' +cardSalvo.nome);
                    form.reset();
                    carregarCards();
                })    
                .catch(erro=>{
                    console.error('erro');
                    alert('Erro infomação não foi enviada');
                }

                
            )




            });
            const usuarioLogado = localStorage.getItem('usuarioLogado');
            let n = document.getElementById('Nyckname').textContent = 'ola '+ usuarioLogado;

            document.getElementById('sair').addEventListener('click',function(){
            localStorage.removeItem('usuarioLogado');
            window.location.href ="Login.html";
           });


           //buscar e carregar as cartas do java
           function carregarCards(){
            fetch('http://localhost:8080/cards')
            .then(resposta=>resposta.json())
            .then(cards =>  {
                const area = document.getElementById('areaCards');
                area.innerHTML = '';//limpa
                cards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card-item');
                cardDiv.innerHTML = `
                <h3>${card.nome}</h3>
                <img src="${card.imgUrl}" alt="${card.nome}" onerror="//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHcS402m18BK-y4QC4Ys-CWMpCppkfTth9625Pl3FXg&s=10">
                <p><strong>Tipo :</strong>${card.tipo}</p>
                <div class="cardSpace"><p>${card.descricao}</p></div>
                <p>${card.atkdef||card.ATKDEF}</p>
                `
                ;
                area.appendChild(cardDiv);
                });
            })
            .catch(erro=>console.error('erro ao carregar card',erro)); 
           }

        //chama a função assim que a pagina abre
        carregarCards();