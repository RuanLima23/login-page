import { Fila } from "./queue.js";
const fila = new Fila(10000, 'object')

const form = document.getElementById('form');
const textArea = document.getElementById('textarea');
const image = document.getElementById('fileInput');
const name = document.getElementById('nome');
const age = document.getElementById('idade');
const profession = document.getElementById('profissao');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const existingData = localStorage.getItem('login');
    let loginData = existingData ? JSON.parse(existingData) : [];

    if (!Array.isArray(loginData)) {
        loginData = [];
    }

    const login = new Login(textArea.value, image.value, name.value, age.value, profession.value);
    loginData.push(login);

    localStorage.setItem('login', JSON.stringify(loginData));

    fila.enfileirar(loginData);
    console.log(fila);

})

function Login(textAreaValue, imageValue, userNameValue, ageValue, professionValue) {
    this.textAreaValue = textAreaValue
    this.imageValue = imageValue
    this.userNameValue = userNameValue
    this.ageValue = ageValue
    this.professionValue = professionValue
}

/*
    Funções a serem implementadas
*/

// function checkAreaText() {

//     const textAreaValue = textArea.value

//     if (textAreaValue === "") {
//         inputError(textAreaValue, "Campo Vazio!")
//     } else {
//         const formItem = textArea.parentElement;
//         formItem.classList = "left"
//     }
// }

// function inputError(input, message) {
//     const formItem = input.parentElement;
//     const textMessage = formItem.querySelector('.error-message');

//     textMessage.innerText = message;

//     formItem.className = "left error"
// }


/*
    Função que possibilita fazer o upload da imagem
*/

; (function () {


    const leitorDeArquivos = new FileReader();
    const formulario = document.querySelector('.form');
    const previaDaImagem = document.querySelector('.imagem');
    const inputArquivo = document.querySelector('.upload');


    function readAndUpdate() {

        let imagemEnviada = inputArquivo.files[0];

        leitorDeArquivos.readAsDataURL(imagemEnviada);

        leitorDeArquivos.addEventListener('loadend', function (load) {


            console.log(load.target.result);

            previaDaImagem.src = load.target.result
        })
    }

    formulario.addEventListener('submit', function (submit) {
        submit.preventDefault();

        readAndUpdate();
    })

})()