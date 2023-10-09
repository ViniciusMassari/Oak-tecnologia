const form: null | HTMLFormElement = document.querySelector('form');

// @ts-ignore
type estaDisponivel = "Sim" | "Não"

interface Produto{
    nome: string;
    descricao: string;
    valor: string;
    estaDisponivel: estaDisponivel;
}

if(!localStorage.getItem('produtos')){
    localStorage.setItem('produtos', '[]')
}

function cadastrarProduto(): void{
    const nomeDoProduto: null | HTMLInputElement = document.querySelector('#nome')
    const descricaoDoProduto: HTMLInputElement | null = document.querySelector('#descricao')
    const valorDoProduto: HTMLInputElement | null = document.querySelector('#valor')
    const estaDisponivel: HTMLInputElement | null = document.querySelector('#disponivel')


    const stringProdutos: string = localStorage.getItem('produtos')!
    const arrayProdutos:Array<Produto> = JSON.parse(stringProdutos);
    console.log(estaDisponivel?.checked);
    
    if (nomeDoProduto && descricaoDoProduto && valorDoProduto && estaDisponivel) {
        const novoProduto:Produto = {
        nome: nomeDoProduto?.value ?? "",
        descricao:descricaoDoProduto?.value ?? "",
        valor: valorDoProduto?.value.replace(/,/g, ".") ?? "",
        estaDisponivel: estaDisponivel.checked ? "Sim" : "Não"
        
    }
        console.log(novoProduto);
        
    arrayProdutos.push(novoProduto)
    localStorage.setItem('produtos', JSON.stringify(arrayProdutos))

    nomeDoProduto.value = ""
    descricaoDoProduto.value = ""
    valorDoProduto.value = ""
    estaDisponivel.value = ""
    }
}

form?.addEventListener('submit', (e:SubmitEvent) =>{
    e.preventDefault()
    cadastrarProduto()
    window.location.pathname = "/table.html"
})