var btn = document.querySelector('.btn-buscar');

function buscarCEP() {

    const ajax = new XMLHttpRequest();

    txt = document.querySelector('.txt').value;

    ajax.open('GET', 'https://viacep.com.br/ws/' + txt + '/json/');
    ajax.send();
    ajax.onload = function () {
         // JSON.parse transforma em objeto e JSON.stringify objeto em texto

        //JSON.parse transforma em objeto
        var obj = JSON.parse(this.responseText)
        var localidade = obj.localidade;
        var uf = obj.uf;
        var ddd = obj.ddd;
        var bairro = obj.bairro;
        var cep = obj.cep;
        var complemento = obj.complemento;
        var logradouro = obj.complemento;
        //Criar elemento
        var div = document.createElement('div')
        div.innerHTML = "CEP : " + cep + "<br>" + "Cidade: " + localidade + "<br>" + "Unidade Federativa: " + uf + "<br>" + "DDD: " + ddd + "<br>" + "Bairro: " + bairro + "<br>" + "Complemento: " + complemento + "<br>" + "Logradouro: " + logradouro;
        //anexar filho, ou seja, div é filho do body.
        document.body.appendChild(div)
    }

}

btn.addEventListener('click', buscarCEP)