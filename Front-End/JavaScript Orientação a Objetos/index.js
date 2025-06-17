class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log(`Valor incompatível com o saldo em conta.`);
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12325474596;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12325474585;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(200);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
