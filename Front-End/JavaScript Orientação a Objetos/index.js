class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0;

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    } else {
      console.log(`O valor depositado não pode ser negativo`);
    }
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
