//Recuperar o id e a foto
let novaFoto = document.querySelector('#foto');
let novoNome = document.querySelector('#nome');

//Array de nome 
const nomes = ['Zico', 'Pelé', 'Maradona', 'Casa Grande', 'Roger Guedes', 'Mosquito', 'Socrates', 'Yuri Alberto', 'Cassio', 'Sheik'];

//Sortear um número para pegar a imagem
let sorteio = Math.floor(Math.random()*10);

//Atribuir o nome
novoNome.textContent = nomes[sorteio];

//Atribuir uma cor ao nome pelo sorteio
if(sorteio < 4){
    novoNome.classList.add('bg-success', 'text-light');
}
else{
    novoNome.classList.add('bg-info', 'text-light');
}

//Inserir a foto
let foto = document.createElement('img');
foto.src = './images/' + sorteio + '.png';

//Vinculando a foto
novaFoto.appendChild(foto);
