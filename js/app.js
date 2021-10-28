'use strict';

import { ativaMenu } from "./menu.js";
import { URL } from "./url.js";
import { UI } from "./ui.js";
import { Bd } from "./db.js";

const btnLink = document.getElementById('btnLink');
const input = document.getElementById('entradaLink');



//Salvar no localStorage
const bd = new Bd;

//MENU
const menu = ativaMenu;
menu();

//UI
const ui = new UI;

//Encurtar Link
const encurtador = new URL;

btnLink.addEventListener('click', geradorDeLink)


function API(valor) {
    encurtador.getLink(valor)
        .then(data => {
            if (data.message) {
                ui.inputErrado(data.message);
                ui.hidenLoading();
            } else {
                ui.mostrarLink(data);
                ui.copiarLink();
                ui.hidenLoading();
            }

        })
        .catch(erro => console.log(erro));
}


function geradorDeLink() {

    if (!input.value.trim()) {
        ui.inputErrado();

    } else {
        ui.displayLoading();
        bd.salvarDados(input.value);
        API(input.value)
    }
    input.value = '';
}


const carregandoLinks = bd.carregarDados();

carregandoLinks.forEach(element => {

    API(element['elemento']);

});