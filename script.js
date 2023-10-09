var form = document.querySelector('form');
if (!localStorage.getItem('produtos')) {
    localStorage.setItem('produtos', '[]');
}
function cadastrarProduto() {
    var _a, _b, _c;
    var nomeDoProduto = document.querySelector('#nome');
    var descricaoDoProduto = document.querySelector('#descricao');
    var valorDoProduto = document.querySelector('#valor');
    var estaDisponivel = document.querySelector('#disponivel');
    var stringProdutos = localStorage.getItem('produtos');
    var arrayProdutos = JSON.parse(stringProdutos);
    console.log(estaDisponivel === null || estaDisponivel === void 0 ? void 0 : estaDisponivel.checked);
    if (nomeDoProduto && descricaoDoProduto && valorDoProduto && estaDisponivel) {
        var novoProduto = {
            nome: (_a = nomeDoProduto === null || nomeDoProduto === void 0 ? void 0 : nomeDoProduto.value) !== null && _a !== void 0 ? _a : "",
            descricao: (_b = descricaoDoProduto === null || descricaoDoProduto === void 0 ? void 0 : descricaoDoProduto.value) !== null && _b !== void 0 ? _b : "",
            valor: (_c = valorDoProduto === null || valorDoProduto === void 0 ? void 0 : valorDoProduto.value.replace(/,/g, ".")) !== null && _c !== void 0 ? _c : "",
            estaDisponivel: estaDisponivel.checked ? "Sim" : "Não"
        };
        console.log(novoProduto);
        arrayProdutos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(arrayProdutos));
        nomeDoProduto.value = "";
        descricaoDoProduto.value = "";
        valorDoProduto.value = "";
        estaDisponivel.value = "";
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    cadastrarProduto();
    window.location.pathname = "/table.html";
});
