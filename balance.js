// Obejecto para armazenar as contas
const contas = {};

// Funcao para criar uma nova conta bancaria
function criarConta(numeroConta, nomeCliente) {
    if (contas[numeroConta]) {
        console.log("Erro: A conta ja existe!");
        return false;

    }
    contas[numeroConta] = { nome: nomeCliente, saldo: 0 }
    console.log(`Conta criada com sucesso para ${nomeCliente}!`);
    return true;

}

// Funcao para verficar o saldo de uma conta
function verfiicarSaldo(numeroConta) {
    if (contas[numeroConta]) {
        const saldo = contas[numeroConta].saldo;
        console.log(`Saldo da conta ${numeroConta}: R$ ${saldo.toFixed(2)}`);
        return saldo;
    }else{
        console.log("Erro: Conta nao encontrada!");
        return null;
    }
}

// Funcao para realizar deposito
function depositar(numeroConta, valor){
    if(contas[numeroConta]){
        contas[numeroConta].saldo += valor;
        console.log(`Deposito de R$ ${valor.toFixed(2)} realizado com sucesso`);
        
    }else{
        console.log("Erro: Conta nao encotrada!");
        
    }
}

// funcao para realizar um saque
function sacar(numeroConta, valor){
    if(contas[numeroConta]){
        if(contas[numeroConta].saldo >= valor){
            contas[numeroConta].saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
            
        }else{
            console.log("Erro: Saldo insuficiente!");
            
        }
    }else{
        console.log("Erro: Conta nao encontrada!");
        
    }
}

// Funcao para encerrar uma conta
function encerrarConta(numeroConta){
    if(contas[numeroConta]){
        if(contas[numeroConta].saldo === 0){
            delete contas[numeroConta]
            console.log(`Conta ${numeroConta} encerrada com sucesso!`);
            
        }else{
            console.log("Erro: A conta ainda tem saldo! Retire saldo antes de encerrar.");
            
        }
    }else{
        console.log("Erro: Conta nao encontrada!");
        
    }
}

// Funcao peincipal para gerenciar o menu principal de sistema bancario
function menu(){
    while(true){
        console.log("\n----- SISTEMA BANCARO -----");
        console.log("1. Criar nova conta");
        console.log("2. Verficar saldo");
        console.log("3. Depositar");
        console.log("4. Sacar");
        console.log("5. Encerrar conta");
        console.log("6. Sair");

        const opcao = prompt("Escolha uma opcao: ");

        if(opcao === "1"){
            const numeroConta = prompt("Digite o numero da conta: ");
            const nomeCliente = prompt("Digite o nome do cliente: ");
            criarConta(numeroConta,nomeCliente)
        }else if(opcao === "2"){
            const numeroConta = prompt("Digite o numero da conta: ");
            verfiicarSaldo(numeroConta);
        }else if(opcao === "3"){
            const numeroConta = prompt("Digite o numero da conta: ");
            const valor = parseFloat(prompt("Digite o valor a depositar: "));
            depositar(numeroConta,valor)
        }else if(opcao == "4"){
            const numeroConta = prompt("Digite o numero da conta: ");
            const valor = parseFloat(prompt("Digite o valor a sacar: "));
            sacar(numeroConta,valor);
        }else if(opcao === "5"){
            const numeroConta = prompt("Digite o numero da conta: ");
            encerrarConta(numeroConta);
        }else if (opcao === "6") {
            console.log("Saindo do sistema bancario.");
            break
        }else{
            console.log("Opcao invalida Tente novamente");
        }
        
        

        
        
        
        
        
    }
}

menu()