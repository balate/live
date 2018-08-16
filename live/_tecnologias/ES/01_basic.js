const aDatos = [{ precio: 12 }, { precio: 23 }, { precio: 56 }]
aDatos.push({ precio: 68 });

// console.log(aDatos);

calcularPrecio();

function calcularPrecio(iva = 22) {
    {
        let finalIva = 1 + (iva / 100)
        console.log(finalIva)
        let precioFinal
        aDatos.forEach(ele => {
            precioFinal = ele.precio * finalIva
            mostrarPrecio(precioFinal)
        })
    }

    function mostrarPrecio(precioFinal) {
        console.log(
            `
            El precio final es de: 
                ${precioFinal.toFixed(2)} `
        )
    }
}