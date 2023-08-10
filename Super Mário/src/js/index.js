/* 

OBJETIVO 1 - Quando o usuário clicar no botão de veja trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - Quando o usuário clicar no 'X', devemos fechar o modal


OBJETIVO 1 - Quando o usuário clicar no botão de veja trailer, devemos abrir a modal com o vídeo do trailer
    - Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - Passo 2 - dar um jeito de identificar quando usuário clicar no botão
    - Passo 3 - dar um jeito de pegar o elemento da modal no js
    - Passo 4 - abrir a modal na tela 

OBJETIVO 2 - Quando o usuário clicar no 'X', devemos fechar o modal
    - Passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - Passo 2 - dar um jeito de identificar quando usuário clicar no 'X'
    - Passo 3 - fechar a modal

 */

console.log("mostrar o document", document);
/* Objetivo 1
Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
 */
const botaoTrailer = document.querySelector(".botao-trailer");

// Passo 2 - dar um jeito de identificar quando usuário clicar no botão

botaoTrailer.addEventListener("click", () => {
    // Passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", "")
});

// Passo 3 - dar um jeito de pegar o elemento da modal no js

const modal = document.querySelector(".modal");

/* OBJETIVO 2 - Quando o usuário clicar no 'X', devemos fechar o modal
    - Passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
 */

const botaoFecharModal = document.querySelector(".fechar-modal");

// - Passo 2 - dar um jeito de identificar quando usuário clicar no 'X'

botaoFecharModal.addEventListener("click",() => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

const video = document.getElementById("video");