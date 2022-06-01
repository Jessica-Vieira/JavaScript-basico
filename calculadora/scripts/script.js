function calcular (valor1,valor2){
    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)

    seletor = document.getElementById("seletor").value

    switch(seletor){
        case '+':
            calculo = (valor1+valor2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${valor1} + ${valor2} é ${calculo}`
            break
    }
    switch(seletor){
        case '-':
            calculo = (valor1-valor2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${valor1} - ${valor2} é ${calculo}`
            break
    }
    switch(seletor){
        case '*':
            calculo = (valor1*valor2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${valor1} * ${valor2} é ${calculo}`
            break
    }
    switch(seletor){
        case '/':
            calculo = Math.round((valor1/valor2))
            if(calculo == NaN){
                document.getElementById("resultado").innerHTML = `Insira um divisível válido`
            }
            else{
            document.getElementById("resultado").innerHTML = `O resultado da divisão de ${valor1} / ${valor2} é ${calculo}`
            }
            break
    }
}
