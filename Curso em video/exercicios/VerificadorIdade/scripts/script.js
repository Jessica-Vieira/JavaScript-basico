function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './imagens/menino.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagens/jovem_homem.jpg')
            }else if(idade <60){
                //adulto
                img.setAttribute('src', './imagens/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', './imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './imagens/menina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagens/jovem_mulher.jpg')
            }else if(idade <60){
                //adulto
                img.setAttribute('src', './imagens/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', './imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Foi dectado ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}