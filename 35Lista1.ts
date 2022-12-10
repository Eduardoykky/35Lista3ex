// Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
// Ex.:
// Entrada Saída
// 2,1 1
// 3,2 5

function ReceberDoisParams(numero1:number,numero2:number): number {
    if (numero1 == 0 || numero2 == 0) {
        return -1
    }else if (numero1 > 0 && numero2 > 0) {
        let saida : number = (numero1 * numero2) - 1
        return saida
    }else{
        return 0
    }
}

// Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
// Ex.:
// Entrada Saída
// “coDigo” “codigo”
// “CODiGo” “CODIGO”
// “CODigo” “codigo”
let maiusculas : number
let minusculas : number
function ReceberString(palavra:string) {
    let palavraSup :string = ""
    maiusculas = 0
    minusculas = 0
    for (let index = 0; index < palavra.length; index++) {
        if (palavra.charAt(index) >= "A" && palavra.charAt(index) <= "Z") {
            maiusculas++
        }else if ((palavra.charAt(index) >= 'a' && palavra.charAt(index) <= 'z')) {
            minusculas++
        }
    }
    if (maiusculas >= minusculas) {
        palavraSup = palavra.toUpperCase()
    }else if (minusculas >= maiusculas) {
        palavraSup = palavra.toLowerCase()
    }
    console.log(palavraSup)
}

// Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.

// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.

// DeclararVencedor(new Lutador(“Fulano”, 10, 2), new Lutador (“Ciclano”, 7, 3),
// “Ciclano)

// Cliclano ataca Fulano; Fulano agora tem 7 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 5 de vida.
// Cliclano ataca Fulano; Fulano agora tem 4 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 3 de vida.
// Cliclano ataca Fulano; Fulano agora tem 1 de vida.
// Fulano ataca Cliclano; Ciclano agora tem 1 de vida.
// Cliclano ataca Fulano; Fulano agora tem -2 de vida e caiu. Ciclano ganhou!
class Lutador {
    Nome : string
    Vida : number
    Ataque : number
    constructor(nome:string, vida : number, ataque : number) {
        this.Nome = nome
        this.Vida = vida
        this.Ataque = ataque
    }
}
let lutador0 = new Lutador("Blue Pen",10, 2)
let lutador1 = new Lutador("Red Pen",7, 3)
let pararLuta = true
function Porradaria(lutador0:Lutador, lutador1:Lutador, quickAtack:string) {
    let primeiroLutador
    let segundoLutador

    if (quickAtack == lutador0.Nome) {
        primeiroLutador = lutador0
        segundoLutador = lutador1
    } else {
        primeiroLutador = lutador1
        segundoLutador = lutador0
    }
    
    console.log(primeiroLutador)
    console.log(segundoLutador)
    

    while (pararLuta) {
        primeiroLutador.Vida = primeiroLutador.Vida = segundoLutador.Ataque
        segundoLutador.Vida = segundoLutador.Vida = primeiroLutador.Ataque
        if(primeiroLutador.Vida >= 0){
            console.log(primeiroLutador.Nome + " ataca " + segundoLutador.Nome + "; " + segundoLutador.Nome + " agora tem " + segundoLutador.Vida + " de vida.")
        }else {
            console.log(primeiroLutador.Nome + " ataca " + segundoLutador.Nome + "; " + segundoLutador.Nome + " agora tem " + segundoLutador.Vida + " de vida e caiu!" + primeiroLutador.Nome + "Ganhou!!")
            pararLuta = false
            return primeiroLutador.Nome
        }
        if (segundoLutador.Vida >= 0) {
            console.log(segundoLutador.Nome + " ataca " + primeiroLutador.Nome + "; " + primeiroLutador.Nome + " agora tem " + primeiroLutador.Vida + " de vida.")
        }else {
            console.log(segundoLutador.Nome + " ataca " + primeiroLutador.Nome + "; " + primeiroLutador.Nome + " agora tem " + primeiroLutador.Vida + " de vida e caiu!!" + segundoLutador.Nome + "Ganhou!!")
            pararLuta = false
            return segundoLutador.Nome
        }
     }
}
Porradaria(lutador0,lutador1,lutador1.Nome)
