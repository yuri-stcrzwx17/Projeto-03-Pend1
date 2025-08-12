'use strict'
import funcionarios from './funcionarios.json' with {type: 'json'}

function criarFuncionario(dados) {

    const container = document.getElementById('container')
    const funcionario = document.createElement('div')
    const imagem = document.createElement('img')
    const nome = document.createElement('h1')
    const cargo = document.createElement('h2')
    const pastaimg = "./img/"

    funcionario.classList.add('funcionario');
    imagem.src = pastaimg + dados.imagem
    imagem.alt = dados.nome
    nome.textContent = dados.nome
    nome.classList.add('nome')
    cargo.textContent = dados.cargo
    cargo.classList.add('cargo')
    

    container.appendChild(funcionario)
    funcionario.appendChild(imagem)
    funcionario.appendChild(nome)
    funcionario.appendChild(cargo)
}

function carregarFuncionario() {
    funcionarios.forEach(criarFuncionario)
}

carregarFuncionario()