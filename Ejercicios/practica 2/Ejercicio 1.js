let numero = 1, negativos = 0, positivos = 0, mayor = -999999, menor = 999999, c_positivos = 0, c_negativos = 0, linea_texto;

while(numero != 0){
    numero = parseInt(prompt("Almacena un numero"));
    console.log(numero);

    if (numero < 0){
        negativos ++;
    }else{ if(numero > 0)
        positivos ++;
    }

    if(numero > mayor){
        mayor = numero;
    }

    if(numero < menor){
        menor = numero;
    }
    
}

while(c_positivos <= positivos){
    c_positivos++;
    linea_texto = "*" ;
    console.log("Cantidad de positivos:",linea_texto);    
}

while(c_negativos <= negativos){
    c_negativos++;
    linea_texto = "*"
    console.log("Cantidad de negativos:", linea_texto);
}

console.log("mayor numero ingresado:", mayor);
console.log("menor numero ingresado:", menor);


