export class UI {
    constructor() {
        this.erro = document.querySelector('.erro');
        this.input = document.querySelector('#entradaLink');
        this.container = document.querySelector('.segundoArticle');
        this.btnLink = document.getElementById('btnLink');


    }

    inputErrado(valor) {

        valor ? this.erro.textContent = 'Url is not valid' : this.erro.textContent = 'Please Add link';

        this.erro.classList.remove('hidden');
        this.input.classList.add('borderErro');

        setTimeout(() => {
            this.erro.classList.add('hidden');
            this.input.classList.remove('borderErro');
        }, 2000);
    }
    mostrarLink(valor) {


        const html = `
            <span class="conteinarLinkVelho"> 
                <p>${valor.long_url}</p>
            </span>

            <span class="conteinarLinkNovo">
                <p class="linkNovo">${valor.link}</p>
                <button class="btnCopia">Copy</button>
            </span>
        `;

        const div = document.createElement('div')
        div.classList.add('container')

        div.innerHTML = html;


        this.container.insertBefore(div, this.container.firstElementChild)

    }
    copiarLink() {
        const btnCopia = document.querySelectorAll('.btnCopia');


        btnCopia.forEach(elemento => {
            elemento.addEventListener('click', this.copiandoLink)
            elemento.addEventListener('touchstart', this.copiandoLink)

        });

    }
    copiandoLink(e) {
        if (e.type === 'touchstart') e.preventDefault()

        const texto = e.target.parentElement.querySelector('.linkNovo');

        const cb = navigator.clipboard;

        cb.writeText(texto.textContent).then(() => {

            e.target.textContent = 'Copied!';

            e.target.classList.add('copied');
        });


    }
    displayLoading() {
        this.btnLink.innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i>';
    }
    hidenLoading() {
        this.btnLink.innerHTML = 'Shorten It!';
    }
}