// Criado o obejecto que vai armazenar as contas
contas = {}

// Funcao para criar novas contas 
function criarConta(numeroConta,nomecliente){
    if(contas[numeroConta]){
        console.log("Erro: Esta conta ja existe!");
        return false;
    }
    contas[numeroConta]={nome: nomecliente, saldo: 0}
    console.log(`Conta criada com sucesso para ${nomecliente}!`);
    return true
}

// Funcao para verficar saldo 
function verficarSaldo(numeroConta){
    if(contas[numeroConta]){
        const saldo = contas[numeroConta].saldo
        console.log(`Saldo da conta ${numeroConta}: R$ ${saldo.toFexed(2)}`);
        return saldo;
    }else{
        console.log("Erro: Conta nao encontrada!");
        return null;
    }
}

// Funcao para realizar o deposito
function depositar(numeroConta, valor){
    if(contas[numeroConta]){
        contas[numeroConta].saldo += valor;
        console.log(`Deposito de R$ ${valor.toFexed(2)} realizado com sucesso!`);
    }else{
        console.log("Erro: Conta nao encontrada!");
    }
}

// Funcao para realizar o saque
function sacar(numeroConta,valor){
    if(contas[numeroConta]){
        if(contas[numeroConta].saldo >= valor){
            contas[numeroConta].saldo -= valor;
            console.log(`Saque de R$ ${valor.toFexed(2)} realizado com sucesso!`);
            
        }else{
            console.log("Erro: Saldo insuficiente!");
                        
        }
    }else{
        console.log("Erro: Conta nao encontrada!");
    }
}

// Funcao para encerrar a conta
function encerraConta(numeroConta){
    if(contas[numeroConta]){
        if(contas[numeroConta].saldo == 0){
            delete contas[numeroConta].saldo
            console.log(`Conta ${numeroConta} encerrada!`);
        }else{
            console.log("Erro: A conta tem saldo. Retire o saldo antes de encerrar!");
        }
    }else{
        console.log("Erro: Conta nao encontrada!");
        
    }
}

// Funcao menu e a funcao principal que vai gerenciar o sistema bancario
function menu(){
    while (true){
        console.log("\n========SISTEMA BANCARIO========");
        console.log("1. Criar nova conta");
        console.log("2. Verficar saldo");
        console.log("3. Depositar");
        console.log("4. Sacar");
        console.log("5. Encerrar a conta");
        console.log("6. Sair");
        
        const opcao = prompt("Digite a sua escolha: ")

        if(opcao === "1"){
            const numeroConta = prompt("Digite o numero da conta: ")
            const nomecliente = prompt("Digite o nome do cliente: ")
            criarConta(numeroConta,nomecliente);
        }else if(opcao === "2"){
            const numeroConta = prompt("Digite o numero da conta: ")
            verficarSaldo(numeroConta)
        }else if (opcao === "3") {
            const numeroConta = prompt("Digite o numero da conta: ")
            const valor = prompt("Digite o valor a depositar: ")
            depositar(numeroConta, valor)
        }else if (opcao === "4") {
            const numeroConta = prompt("Digite o numero da conta: ")
            const valor = prompt("Digite o valor a sacar: ")
            sacar(numeroConta,valor)
        }else if (opcao === "5") {
            const numeroConta = prompt("Digite o numero da conta: ")
            encerraConta(numeroConta)
        }else if(opcao === "6"){
            console.log("\n==SAINDO DO SISTEMA BANCARIO==");
            break

        }else{
            console.log("Opcao invalida! Tente novamente.");
            
        }
    }
}

menu()