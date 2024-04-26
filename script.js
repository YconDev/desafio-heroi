function caclNivel(saldo){
    
    if(saldo <= 1000) return "ferro"
    if(saldo <= 2000) return "bronze"
    if(saldo <= 5000) return "ouro"
    if(saldo <= 7000) return "platina"
    if(saldo <= 9000) return "ascendente"
    if(saldo <= 10000) return "imortal"
    else return "radiante"

}

let nome = prompt("Digite seu nome: ")
let xp = prompt("Digite sua quantidade de xp: ")

let nivel = caclNivel(xp)
alert("O heroi de nome "+ nome +" está no nivel "+ nivel)