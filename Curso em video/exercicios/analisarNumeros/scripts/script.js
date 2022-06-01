function adicionar(){
    var numerotxt = document.getElementById('numerotxt')
    var numero = Number(numerotxt.value)
    var seletor = document.getElementById('seletor')
    if (numerotxt.value.length == 0){
        window.alert('Por favor, digite um número.')
    }else if (numerotxt.value < 1 || numerotxt.value > 100){
        window.alert('Escolha um número de 1 a 100')
    }else{
        var item = document.createElement('option')
        var itemValor = []
        itemValor.push(numero)
        item.text = `O valor ${itemValor} foi adicionado`
        seletor.appendChild(item)
        itemValor.sort()
        function finalizar(){
            var resultado = document.getElementById('resultado')
            resultado.innerHTML += `Foram adicionados ${itemValor.length} valores.`
        }
    }
}