function contar(){
    var inicio=document.getElementById('txti')
    var fim= document.getElementById('txtf')
    var salto=document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0){
        res.innerHTML = 'Impossível contar. Pois, faltam dados!'
    }else{
        res.innerHTML = 'Contando: </br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var s = Number(salto.value)
        if(s <= 0){
            window.alert('Salto inválido. Considerando salto = 1')
            s = 1
            for(var c = i; c <= f; c += s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(var c = i; c <= f; c += s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            for(var c = i; c>= f; c -= s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}