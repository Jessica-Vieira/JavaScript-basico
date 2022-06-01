function gerar(){
    var numerotxt = document.getElementById('numerotxt')
    var numero = Number(numerotxt.value)
    var tabuada = document.getElementById('seltab')
    if(numerotxt.value.length==0){
        window.alert('digite um número')
    }else{
        tabuada.innerHTML = ''
        for(var c = 1; c<=10; c++){
            var item = document.createElement('option')
            item.text = ` ${numero} X ${c} = ${numero*c}`
            tabuada.appendChild(item)
        }
    }
}