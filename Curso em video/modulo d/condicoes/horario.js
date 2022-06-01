var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
if (hora>=6 && hora < 12){
    console.log(`Bom dia! São ${hora}h${minuto}.`)
}else if(hora>12 && hora < 18){
    console.log(`Boa tarde! São ${hora}h${minuto}.`)
}else if( hora >18 && hora <24){
    console.log(`Boa noite! São ${hora}h${minuto}.`)
}else{
    console.log(`Boa madrugada! São ${hora}h${minuto}.`)
}