import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//Adiniona dois novos clientes 
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);


contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);




console.log("Quantidade de contas no banco " ,ContaCorrente.numeroDeContas);