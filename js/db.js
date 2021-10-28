export class Bd {
    salvarDados(lista) {

        let listas;

        if (localStorage.getItem('listas') === null) {
            listas = [];
        } else {
            listas = JSON.parse(localStorage.getItem('listas'));
        }
        listas.push({ elemento: lista });

        localStorage.setItem('listas', JSON.stringify(listas));

    }
    carregarDados() {
        let listas;

        if (localStorage.getItem('listas') === null) return listas = [];

        return listas = JSON.parse(localStorage.getItem('listas'));

    }

}