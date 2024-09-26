const prompt = require('prompt-sync')();

/*const ola = 'Hello world' // declarar a variável
ola = 123 // reatribuir variável
console.log(ola)*/

/*console.log('Hello'+' '+'world')
console.log('hello'+'world')

myname2='Vinicius'
console.log(`Hello ${myname2}`)*/

/* ATIVIDADE */

/*Calculo de Media*/
let nota1 = parseInt(prompt('Insira nota 1: '));
let nota2 = parseInt(prompt('Insira nota 2: '));
let nota3 = parseInt(prompt('Insira nota 3: '));

let media = ((nota1 + nota2 + nota3)/ 3).toFixed(1)

console.log('Média das notas é:', media)

/*Calculo area triangulo*/
let base = parseInt(prompt('Insira o valor da base do triângulo: '))
let altura = parseInt(prompt('Insira o valor da altura do triângulo: '))

let area = ((base*altura)/2).toFixed()

console.log('Área do triângulo é:', area)

/*Calculos basicos*/
let num1 = parseInt(prompt('Insira o número 1: '))
let num2 = parseInt(prompt('Insira o número 2: '))

let soma = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2

console.log('Soma:', soma, 'Subtração:', sub, 'Multiplicação:', multi, 'Divisão:', div)

/*Calculo desconto*/
let valorproduto = parseInt(prompt('Insira o valor do produto: '))
let desconto = parseInt(prompt('Quantos % de desconto? '))
let percentualdesconto = desconto / 100
let valorcomdesconto = valorproduto * (1 - percentualdesconto)

console.log('O valor do produto é:', valorproduto, 'O desconto será de ', desconto, '%.' 'O valor final do produto após o desconto é:', valorcomdesconto)

/*Nome e idade*/
var nome = prompt('Insira seu nome: ')
let idade = prompt('Insira sua idade: ')

console.log('Olá, meu nome é', nome, 'e tenho ', idade, 'anos.')

/*Nome e cidade*/
var nome = (prompt('Insira seu nome: '))
let cidade = (prompt('Insira sua cidade: '))

console.log(nome, 'é de ', cidade)

/*Celsius para Fahrenheit*/
let tempcelcius = parseInt(prompt('Insira a temperatura em celsius: '))
let conversao = (tempcelcius * 9/5) + 32

console.log('20°c em fahrenheit é:', conversao)

/*Calculo IMC*/
let peso = parseInt(prompt('Insira seu peso: '))
let alturapessoa = parseInt(prompt('Insira sua altura: '))

let IMC =  (peso / (alturapessoa * alturapessoa)).toFixed(1)

console.log('Seu IMC é:', IMC)

/*Conversor de moedas*/
var moedareal = parseInt(prompt('Insira o valor em real para conversão: '));
var cotacaodolar = (parseInt(prompt('Insira a cotação do dólar atual: '))).toFixed(1)
var conversaoreal = (moedareal / cotacaodolar).toFixed(2)

console.log('R$', moedareal, 'convertidos para Dólar, com a cotação de', cotacaodolar, 'equivale a: $',conversaoreal)

/*Imposto de renda*/
var salariobruto = parseInt(prompt('Qual seu salário bruto?'))
let aliquotair = parseInt(prompt('Qual a alíquota IR atual?'))

let imposto = (salariobruto * aliquotair) / 100

console.log('Seu imposto devido será de:', imposto)
