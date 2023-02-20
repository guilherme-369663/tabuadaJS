function calcular() {
    let entrada = document.getElementById('entrada')
    let tab  = document.getElementById('tabuada')
    let parseEntrada = Number(entrada.value)
    //Caso nada seja digitado, mostrar alerta solicitando um número
    if (entrada.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
        let parseEntrada = Number(entrada.value)
        let c = 1

        //Para limpar os campos para receber os números do presente cálculo
        tab.innerHTML = ''
        while ( c < 11 ) {
            let item = document.createElement('option')
            item.text=`${parseEntrada} x ${c} = ${parseEntrada * c}`
            item.value - `tab${c}`
            c++
            tab.appendChild(item)      
        }
    }
   
    
    
}