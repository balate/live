let oDatos = { precio: 12, iva: 1.16 };


/** Usando function de JS tradicional. En este caso del this hace refeencia 
 * fuera del marco de la ejecución de la funcion principal calculaIvaAsyncUsingTradicctionalFunction */
oDatos.calculaIvaAsyncUsingTradicctionalFunction = function() {
    setTimeout(function() {
        let precioFinal = this.precio * this.iva //estos this se declararian un segundo mas tarde  y fuera de la funcion
        console.log(`Usando las fucnones arrow el precio final es : 
                        ${precioFinal.toFixed(2)} `)
    }, 1000)
}

/** Usando function arrow se soluccionaria el problema anterior. Ya que el this hace referencia sl objeto (a la funcion principal) calculaIvaAsync*/
oDatos.calculaIvaAsync = function() {
    setTimeout(() => {
        let precioFinal = this.precio * this.iva
        console.log(`Usando las fucnones arrow el precio final es : 
                        ${precioFinal.toFixed(2)} `)
    }, 1000)
}


oDatos.calculaIvaAsyncUsingTradicctionalFunction();
oDatos.calculaIvaAsync();