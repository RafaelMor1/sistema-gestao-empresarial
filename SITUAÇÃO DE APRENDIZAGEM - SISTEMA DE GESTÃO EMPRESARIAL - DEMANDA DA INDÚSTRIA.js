// Gestão de estoque
let vetorProduto = [],precoProduto = [],quantidadeProdutos = 0,quantidadeProdutosCadastro =[], precoTotal=0

// Gestão financeira
// Modulo compra
let nomeP = [], fornecedorP = [], numeroDeProduto = [], precoP = [], quantidadeProduto = [],valorTotal = 0, numeroPedido, cpf, data, quantF = 0, valorFinal, quantidadeP, hora, opcoes2

//Modulo venda
let vendaProduto, qCoxinha=[], qTorta=[], qKit=[], qRefrigerante=[], nCoxinha=0, nTorta=0, nRefrigerante=0, nKit=0, totalCompra=0, compraDesconto=0, loginF, descontoF

//função de login
function login(login, senha) {
  login = prompt("Digite seu nome de úsuario:")
  if (login == 'administrador') {
    alert("Acesso Permitido!")
  }
  else {
    alert("Acesso Negado!")
    longin()
  }
  senha = Number(prompt("Digite sua senha:"))
  if (senha == 9873) {
    alert("Acesso Permitido!")
  }
  else {
    alert("Acesso Negado!")
    login()
  }
}
login()

//Opção de gestões
inicio()
function inicio(){

  let op
op = Number(prompt("Selecione dentre as opções\n1 - Gestão de Estoque\n2 - Gestão Financeira"))

switch (op) {
  case 1:
    menu()
 function menu(){
   let op1 = Number(prompt("Selecione dentre as opções\n1 - Cadastro\n2 - Atualização de preços\n3 - Visualização de estoque"))
    switch(op1){
      case 1:
       
        //Cadastro de produto
    quantidadeProdutos = prompt("Digite quantos produtos deseja adicionar: ")

   
    for (let i = 0; i < quantidadeProdutos; i++) {
      vetorProduto[i] = prompt("Digite o NOME do produto: ")
    }

    for (let i=0;i<quantidadeProdutos;i++){
     
      quantidadeProdutosCadastro[i] = Number(prompt("Digite a quantidade do produto: "))
    }
   
    for (let i = 0; i < quantidadeProdutos; i++) {
      precoProduto[i] = Number(prompt("Digite o PREÇO do produto: "))
    }

    let fornecedor = []
    for (let i = 0; i < 1; i++) {
      fornecedor[i] = prompt("Digite o nome do FORNECEDOR: ")
    }

    let contato = []
    for (let i = 0; i < 1; i++) {
      contato[i] = Number(prompt("Digite o CONTATO do fornecedor: "))

      fim =  Number(prompt("Digite 1- Para concluir sua operação de registro \nDigite 2 - Caso deseje cancelar sua operação de registro  "))
       
        if (fim == 1) {
            alert("Sucesso na operação de registro.")
          menu()
        }
        else if (fim == 2) {
            alert("Fracasso na operação de registro.")
          break;
        }
        else {
            alert ("Fracasso de operação de registro.")
          break;
        }
    }
        break;
     
      case 2:
       
        //Atualização de preços
        qproduto = prompt("Nome do produto que deseja mudar o valor:")
        let index = vetorProduto.indexOf(qproduto)
        alert("Achou?" + index)

        precoProduto[index] = Number(prompt("Digite o novo valor: "))

        alert("Os novos valores são :" + precoProduto)
          menu()
        break;
       
      case 3:
       
        //Gestão de estoque
        alert("Quantidade total de cada produto em estoque: "+vetorProduto)

        alert("Quantidade total de itens no estoque: " +quantidadeProdutos)
       
        for (var i = 0; i < precoProduto.length; i++) {
   
        precoTotal+= precoProduto[i]* quantidadeProdutosCadastro[i];
         
        }
       
        alert("Valor total de produtos no estoque: "+precoTotal)

        alert("Média de produto em estoque: " +precoTotal/30)

        Number(prompt("Digite 0 para voltar ao inicio"))
      inicio()
       
        break;
       
    }
  }
  case 2:
    venda()
}

function venda(){
  let op2 = Number(prompt("Selecione dentre as opções:\n1 - Modulo de compra.\n2 - Visualização.\n3 - Modulo de venda"))
   
    switch(op2){
      //Modulo de compra
      case 1:
       
       numeroPedido = Number(prompt("Digite o número do pedido:"))

      quantidadeP = Number(prompt("Digite a quantidade de produto que deseja registrar"))
       
        for(let i=0; i < quantidadeP; i++){
         nomeP[i] = prompt("Digite o nome do produto "+(i+1)+":")
        }

        for(let i=0; i<quantidadeP; i++){
          quantidadeProduto[i] = Number(prompt("Digite a quantidade do produto "+(i+1)+":"))
        }

        for(let i=0; i < quantidadeP; i++){
          precoP[i] = Number(prompt("Digite o preço do produto "+(i+1)+":"))
        }

        for(let i=0;i<quantidadeP;i++){
        valorTotal+= precoP[i]*quantidadeProduto[i]
        }

       
        quantF = Number(prompt("Digite a quantidade de fornecedores:"))
       
        for(let i=0; i < quantF; i++){
          fornecedorP[i] = prompt("Digite o nome dos fornecedores:")
        }

        alert("Valor total dos produtos: " +valorTotal)

        // Calcular Frete
        if(valorTotal <=500){
          alert("Frete Grátis")
        }
        else {
          function calculateShipping(produto, valorUltrapassado) {
  let calculoFrete;
  calculoFrete = 0.5 * produto + 0.1 * valorUltrapassado;
  return calculoFrete;
}

const produto = 10; // quantidade
const valorUltrapassado = 200; // valor do frete fixo
const totalFrete = calculateShipping(produto, valorUltrapassado);
alert("Limite de 500 reias ultrapassado.\nFrete de "+totalFrete+" reais adicionado");

        }

        // Calcular Desconto
        let valorDesconto
        valorDesconto = (10*valorTotal/100)
        valorFinal = (valorDesconto+25)
       
        if (valorTotal > 1000){
          alert("Você ultrapassou sua compra de 1.000 reais em nossa loja e lhe daremos 10% de desconto.\nSeu novo valor com o desconto é de: "+valorFinal)
        }
        else{
          alert("Sua compra não ultrapassou o valor para ganhar 10% de desconto.\nSua compra deu: " +valorTotal)
        }
        let condicoesPagamento =[], cartão, avista, boleto, pagamento
pagamento = Number(prompt("Selecione dentre as opções a forma de pagamento: \n1 - pagamento no cartão \n2 - Pagamento a vista \n3 - Pagamento por boleto"))
switch (pagamento) {
  case 1:  
    condicoesPagamento.push(1)
  break;
  case 2:
    condicoesPagamento.push(2)
    break;
  case 3:
    condicoesPagamento.push(3)
    break;
}
        venda()
      break;
       
      case 2 :
         prompt("Insira a data da compra:")
      alert(" Os dados da compra são \n"+"Numero do pedido: " +numeroPedido+ "\nQuantidade de produto(s) registrados: "+quantidadeP+"\n"+"Nome do(s) produto(s): "+nomeP+"\n"+"Quantidade deseja de produto(s): " +quantidadeProduto+"\n"+"Preço da unidade do(s) produto(s): " +precoP+"\n"+"Valor total dos produtos: " +valorTotal +"\n"+"Quantidade de fornecedor(es): " +quantF+"\n" +"Nome do(s) fornecedor(es): "+fornecedorP+"\n"+"Valor final da compra: " +valorFinal+"\n"+"Valor total da compra com desconto ou acrecimos : " +valorTotal)  
        final =  Number(prompt("Digite 1- Para concluir sua operação de registro \nDigite 2 - Caso deseje cancelar sua operação de registro  "))

        venda()
        break;
       
    case 3:

        cpf =(prompt("Insira seu CPF :"))
        if(cpf.length==14){
          alert("CPF válido")
        }
        else {
          alert("CPF inválido")
          break;
        }

        let data = new Date()
let opcoes = { year: 'numeric', month: '2-digit', day: '2-digit' };
        data = data.toLocaleDateString('pt-BR', opcoes)
       
        let hora = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/Sao_Paulo' };
let horario = new Date().toLocaleTimeString('pt-BR', hora);

        alert("Data da compra: "+data+"\nHorario da compra: " +horario)


        vendaM()
            function vendaM(){
        vendaProduto = Number(prompt("Bem vindo a loja Ilhabella:\n\nVeja nosso cardapio\nSelecione uma opção para realizar a compra:\n1 - Coxinha.\n2 - Torta.\n3 - Refrigerantes.\n4 - Kit Festas."))
             
        switch(vendaProduto){
         
          case 1:
           
            alert("Valor unitario da coxinha (1,00R$) ")
           
            for(let i=0; i<1; i++){
              qCoxinha[i] = Number(prompt("Digite a quantidade de coxinha que deseja:"))
            }
            nCoxinha = (qCoxinha*1.00)
            alert("Valor da compra: "+nCoxinha)

            voltar = prompt("Deseja continuar sua compra? Digite 1.\nDeseja finalizar sua compra? Digite 2.")
            if (voltar == 1){
              vendaM()
            }
            else{
              alert("Finalizando compra...")
            }
            break;

          case 2:
           
            alert("Valor unitario da torta (55,00R$) ")
           
            for(let i=0; i<1; i++){
              qTorta[i] = Number(prompt("Digite a quantidade de torta que deseja:"))
            }
            nTorta = (qTorta*55.00)
            alert("Valor da compra: "+nTorta)

            voltar = prompt("Deseja continuar sua compra? Digite 1.\nDeseja finalizar sua compra? Digite 2.")
            if (voltar == 1){
              vendaM()
            }
            else{
              alert("Finalizando compra...")
            }
            break;

          case 3:

            alert("Valor unitario do refrigerante (6,00R$) ")
            for(let i=0; i<1; i++){
              qRefrigerante[i] = Number(prompt("Digite a quantidade de refrigerante que deseja:"))
            }
            nRefrigerante = (qRefrigerante*6.00)
            alert("Valor da compra: "+nRefrigerante)

            voltar = prompt("Deseja continuar sua compra? Digite 1.\nDeseja finalizar sua compra? Digite 2.")
            if (voltar == 1){
              vendaM()
            }
            else{
              alert("Finalizando compra...")
            }
            break;

          case 4:
            alert("Valor Kit Festas: 284,00R$\n\nContém:\n150 Salgados (1,00R$ Uni.)\n2 Tortas 1,5kg (55,00R$ Uni.)\n4 Refrigerante 2L (6,00R$ Uni.)")

            for(let i=0; i<1; i++){
              qKit[i] = Number(prompt("Digite a quantidade de Kit Festas que deseja:"))
            }
            nKit = (qKit*284.00)
            alert("Valor da compra: "+nKit)

            voltar = prompt("Deseja continuar sua compra? Digite 1.\nDeseja finalizar sua compra? Digite 2.")
            if (voltar == 1){
              vendaM()
            }
            else{
              alert("Finalizando compra...")
            }
            break;
          }

           totalCompra = nCoxinha+nRefrigerante+nTorta+nKit

              compraDesconto = (totalCompra -(totalCompra *0.03))

              compra = Number(prompt("Realizar compra.\n\nSelecione uma das opções:\n1- Compra Cliente.\n2-Compra Funcionario."))
             
              switch(compra){
               
                case 1:
              if(nKit>1){
                alert("Valor da compra: "+totalCompra+ "\n\nVocê comprou um kit festas em nossa loja e lhe daremos 3% de desconto em sua compra.\n\nValor da compra com 3% de desconto: "+compraDesconto)
                break;
              }  
              else {
                alert("Valor da compra: "+totalCompra)
              }
                  break;

                case 2:

                  loginF = Number(prompt("Você é funcionário? Se sim digite o codigo de funcionario:"))
                  if(loginF == 9873){
                     
                  }
                  else{
                    alert("Codigo invalido.")
                    break;
                  }

                  descontoF = (compraDesconto -(totalCompra*0.1))
                 
                    if(nKit>1){
                alert("Valor da compra: "+totalCompra+ "\n\nVocê comprou um kit festas em nossa loja e lhe daremos 3% de desconto em sua compra e mais 10% de desconto por ser funcionário.\n\nValor da compra com 13% de desconto: "+descontoF)
                      break;
              }
              else{
                alert("Valor da compra com 10% de desconto de funcionário: "+totalCompra*0.1)
                break;
          }
        }
      }
    }
  }
}