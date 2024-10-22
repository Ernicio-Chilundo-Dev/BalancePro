contas = {}
def criar_conta(numero_conta,nome_cliente):
    if numero_conta in contas:
        print("Erro: esta conta ja existe!")
        return False
    contas[numero_conta]={"nome": nome_cliente, "saldo":0}
    print(f"Conta criada com sucesso para {nome_cliente}!")
    return True
    
def verfivar_saldo(numero_conta):
    if numero_conta in contas:
        saldo = contas[numero_conta]['saldo']
        print(f"Salda da conta {numero_conta}: R$ {saldo:.2f}")
        return saldo
    else:
        print("Erro: Conta nao encontrada!")
        return None

def depositar(numero_conta,valor):
    if numero_conta in contas:
        contas[numero_conta]['saldo'] += valor
        print(f"Deposito de R$ {valor} realizado com sucesso.")
    else:
        print("Erro: Conta nao encontrada!")

def sacar(numero_conta,valor):
    if numero_conta in contas:
        if contas[numero_conta]['saldo'] >= valor:
            contas[numero_conta]['saldo'] -= valor
            print(f"Saque de R$ {valor:.2f} realizado com sucesso!")
        else:
            print("\33[31mSaldo insuficiente\33[m")
    else:
        print("Erro: Conta nao encontrada!")

def encerrar(numero_conta):
    if numero_conta in contas:
        if contas[numero_conta]['saldo'] == 0:
            del contas[numero_conta]['saldo']
            print(f"Conta {numero_conta} encerrada com sucesso!")
        else:
            print("Erro: Conta ainda tem saldo. Retire o saldo antes de encerrar")
    else:
        print("Erro: conta nao encontrada")

def menu():
    while True:
        print("\n\33[36m==================================Sistema Bancario================================\33[m")
        print("\33[32m")
        print("1. Abrir Conta")
        print("2. Verficar Saldo")
        print("3. Depositar")
        print("4. Sacar")
        print("5. Encerrar Conta")
        print("6. Sair")
        print("\33[m")

        opcao =input("Digite a sua opcao: ")

        if opcao == "1":
            numero_conta = input("Dgiite o numero da conta: ")
            nome_cliente = input("Digite o nome da conta:  ")
            criar_conta(numero_conta,nome_cliente)
        elif opcao == "2":
            numero_conta = input("Digite o numero da conta: ")
            verfivar_saldo(numero_conta)
        elif opcao == "3":
            numero_conta = input("Digite o numero da conta: ")
            valor = float(input("Digite o valor a depositar: "))
            depositar(numero_conta,valor)
        elif opcao == "4":
            numero_conta = input("Digite o numero da conta: ")
            valor = float(input("Digite o valor a sacar na conta: "))
            sacar(numero_conta,valor)
        elif opcao == "5":
            numero_conta = input("Digite o numero da conta: ")
            encerrar(numero_conta)
        elif opcao == "6":
            print("\33[35mSaindo do sistema bancario!\33[m")
            break
        else: 
            print("Opcao invalida")


menu()