if(!localStorage.getItem('produtos')){
    localStorage.setItem('produtos', '[]')
}
// @ts-ignore
type estaDisponivel = "Sim" | "Não"

interface Produto{
    nome: string;
    descricao: string;
    valor: string;
    estaDisponivel: estaDisponivel;
}


if(localStorage.getItem('produtos')){
    let listaProdutos: Array<Produto> = []
    const produtos = localStorage.getItem('produtos')
    produtos ? listaProdutos = JSON.parse(produtos) : ""
    if(listaProdutos.length == 0){
    const tableContainer = document.querySelector('#tableContainer');
     if (tableContainer) {
    tableContainer.innerHTML +=
      "<h1>Não há produtos para listar, volte e comece a cadastrar</h1>";
  }
    } 

    if(listaProdutos.length > 0){
        gerarTabela()
    }
}


function criarTabela(){
    
    const tableContainer = document.querySelector("#tableContainer")
    const table = document.createElement('table')
    table.classList.add('table')
    table.innerHTML = "<thead><tr><th scope='col'>Nome</th> <th scope='col'>Descrição</th> <th scope='col'>Valor</th> <th scope='col'>Disponível</th> </tr></thead><tbody></tbody>"
    table.setAttribute('id', 'table')

    if(tableContainer){
        tableContainer.appendChild(table)
    }
}

function gerarTabela():void{
    
    criarTabela()
    const produtos = localStorage.getItem('produtos');
    const table: HTMLElement | null = document.querySelector('#table')
    const tableBody: HTMLElement | null = document.querySelector('#table tbody')

    if(!produtos){
        return
    }

const produtosArray:Array<Produto> = JSON.parse(produtos)

if(!table && tableBody){
    return
}
if (tableBody && table && produtosArray.length > 0) {
    tableBody.innerHTML = `${produtosArray.map(({nome,descricao,estaDisponivel,valor}: Produto) =>{
        return `<tr><td scope="row">${nome}</td><td>${descricao}</td><td>R$ ${valor}</td><td>${estaDisponivel}</td></tr>`
    }).join('')}`

}

}



