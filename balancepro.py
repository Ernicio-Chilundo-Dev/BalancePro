contas = {}

def criar_conta(numero_conta, nome_cliente):
    if numero_conta in contas:
        print("Erro: A conta ja existe!")
        return False
    contas[numero_conta] = {"nome": nome_cliente, "saldo":0}
    print(f"Conta criada com sucesso para {nome_cliente}!")
    return True

# Funcao para verficar o saldo da conta

def verficar_saldo(numero_conta):
    if numero_conta in contas:
        saldo = contas[numero_conta]['saldo']
        print(f"Saldo da conta {numero_conta} R$ {saldo:.2f}")
        return saldo
    else:
        print("Erro: Conts nso encontrada")
        return None
    
# Funcao para realizar deposito

def depositar(numero_conta, valor):
    if numero_conta in contas:
        contas[numero_conta]['saldo'] += valor
        print(f"Deposito de R$ {valor:.2f} realizado com sucesso!")
    else:
        print("Erro: conta nao encontrada!")

# funcao para realizar um saque
def sacar(numero_conta, valor):
    if numero_conta in contas:
        if contas[numero_conta]['saldo'] >= valor:
            contas[numero_conta]['saldo'] -= valor
            print(f"Saque de R$ {valor:.2f} realizado com sucesso!")

        else:
            print("Erro: Saldo insuficiente!")
    else:
        print("Erro: conta nao encontrada")

# Funcao para encerrar uma conta

def encerrar_contas(numero_conta):
    if numero_conta in contas:
        if numero_conta in contas:
            if contas[numero_conta]['saldo'] == 0:
                del contas[numero_conta]
                print(f"Conta {numero_conta} encerrada com sucesso")
            else:
                print("Erro: Conta ainda tem saldo. Retire o saldo antes de encerrar")
        else:
            print("Erro: conta nao encontrada!")

# Funcao principal para gerenciar o menu do sistema bancario

def menu():
    while True:
        print("\n-----------------Sistema Bancario--------------")
        print("1. Criar nova conta")
        print("2. Verficar saldo")
        print("3. Depositar")
        print("4. Sacar")
        print("5. Encerrar a conta")
        print("6. Sair")

        opcao =input("Escolha a sua opcao: ")
        if opcao == '1':
            numero_conta =input("Digite o numero da conta: ")
            nome_cliente = input("Digite o nome do cliente: ")
            criar_conta(numero_conta,nome_cliente)
        elif opcao == "2":
            numero_conta = input("Digite o numero da conta: ")
            verficar_saldo(numero_conta)
        elif opcao =="3":
            numero_conta = input("Digite o numero de conta: ")
            valor = float(input("Digite o valor a depositar: "))
            depositar(numero_conta, valor)
        elif opcao == "4":
            numero_conta = input("Digite o numero da conta: ")
            valor = float(input("Digite o valor a sacar: "))
            sacar(numero_conta, valor)
        elif opcao == "5":
            numero_conta = input("Digite o numero da conta: ")
            encerrar_contas(numero_conta)
        elif opcao == "6":
            print("\33[32mSaido do sistema bancario\33[m")
            break
        else:
            print("Opcao invalida tente novamente.")

menu(4
     )

 
