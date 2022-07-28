let numeroDeALunos = 10 

for (let contador = 0; contador < numeroDeALunos; contador++) {
    console.log(contador);

    if (contador == 10) {
            console.log("Numero igual a Zero")
    }
    else if (contador % 2 == 0) {
            console.log("número par")
    }
    else {
        console.log("número impar")
    }
}