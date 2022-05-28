
export function semaforo(cor) {
    let a = "";

    if (cor == "verde") {
        a = "Pode passar"
    }

    else if (cor == "vermelho") {
        a = "Fique parado"
    }

    else {
        a = "Não existe essa cor"
    }
    return a;

}

export function DiaSemana(dia) {
    let msg = ""

    if (dia == 0) {
        msg = "Domingo"
    }
    else if (dia == 1) {
        msg = "Segunda"
    }
    else if (dia == 2) {
        msg = "Terça"
    }
    else if (dia == 3) {
        msg = "Quarta"
    }
    else if (dia == 4) {
        msg = "Quinta"
    }
    else if (dia == 5) {
        msg = "Sexta"
    }
    else if (dia == 6) {
        msg = "Sábado"
    }
    else {
        msg = "não existe"
    }
    return msg

}

export function Par(limite) {
    let a= [];

    for(let i= 0; i> limite; i++){
        a[i] = i * 2;
    }
    return a;
}

export function Fatorial (numero){
    let a =1;

    for(let cont = numero; cont > 1; cont --){
        a *= cont;
    }
    return a;
}













