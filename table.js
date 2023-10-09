if (!localStorage.getItem('produtos')) {
    localStorage.setItem('produtos', '[]');
}
if (localStorage.getItem('produtos')) {
    var listaProdutos = [];
    var produtos = localStorage.getItem('produtos');
    produtos ? listaProdutos = JSON.parse(produtos) : "";
    if (listaProdutos.length == 0) {
        var tableContainer = document.querySelector('#tableContainer');
        if (tableContainer) {
            tableContainer.innerHTML +=
                "<h1>Não há produtos para listar, volte e comece a cadastrar</h1>";
        }
    }
    if (listaProdutos.length > 0) {
        gerarTabela();
    }
}
function criarTabela() {
    var tableContainer = document.querySelector("#tableContainer");
    var table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = "<thead><tr><th scope='col'>Nome</th> <th scope='col'>Descrição</th> <th scope='col'>Valor</th> <th scope='col'>Disponível</th> </tr></thead><tbody></tbody>";
    table.setAttribute('id', 'table');
    if (tableContainer) {
        tableContainer.appendChild(table);
    }
}
function gerarTabela() {
    criarTabela();
    var produtos = localStorage.getItem('produtos');
    var table = document.querySelector('#table');
    var tableBody = document.querySelector('#table tbody');
    if (!produtos) {
        return;
    }
    var produtosArray = JSON.parse(produtos);
    if (!table && tableBody) {
        return;
    }
    if (tableBody && table && produtosArray.length > 0) {
        tableBody.innerHTML = "".concat(produtosArray.map(function (_a) {
            var nome = _a.nome, descricao = _a.descricao, estaDisponivel = _a.estaDisponivel, valor = _a.valor;
            return "<tr><td scope=\"row\">".concat(nome, "</td><td>").concat(descricao, "</td><td>R$ ").concat(valor, "</td><td>").concat(estaDisponivel, "</td></tr>");
        }).join(''));
    }
}
