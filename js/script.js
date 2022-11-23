let act1Checkbox = document.getElementById("act1")
let act2Checkbox = document.getElementById("act2")
let act3Checkbox = document.getElementById("act3")

act1Checkbox.onclick = act1CheckboxApretado
act2Checkbox.onclick = act2CheckboxApretado
act3Checkbox.onclick = act3CheckboxApretado


let CantP1 = document.getElementById("cantP1")
let CantP2 = document.getElementById("cantP2")
let CantP3 = document.getElementById("cantP3")
let CantM1 = document.getElementById("cantM1")
let CantM2 = document.getElementById("cantM2")
let CantM3 = document.getElementById("cantM3")

CantP1.onchange = mostrarPrecio
CantP2.onchange = mostrarPrecio
CantP3.onchange = mostrarPrecio
CantM1.onchange = mostrarPrecio
CantM2.onchange = mostrarPrecio
CantM3.onchange = mostrarPrecio



function act1CheckboxApretado() {
    if (document.getElementById("act1").checked == true) {
        document.getElementById("MostrarP1").style.display = "flex"
        document.getElementById("MostrarM1").style.display = "flex"
    } else {
        document.getElementById("MostrarP1").style.display = "none"
        document.getElementById("MostrarM1").style.display = "none"
    }
    mostrarPrecio()
}
function act2CheckboxApretado() {
    if (document.getElementById("act2").checked == true) {
        document.getElementById("MostrarP2").style.display = "flex"
        document.getElementById("MostrarM2").style.display = "flex"
    } else {
        document.getElementById("MostrarP2").style.display = "none"
        document.getElementById("MostrarM2").style.display = "none"
    }
    mostrarPrecio()
}
function act3CheckboxApretado() {
    if (document.getElementById("act3").checked == true) {
        document.getElementById("MostrarP3").style.display = "flex"
        document.getElementById("MostrarM3").style.display = "flex"
    } else {
        document.getElementById("MostrarP3").style.display = "none"
        document.getElementById("MostrarM3").style.display = "none"
    }
    mostrarPrecio()
}

function mostrarPrecio(){
    let precio = 0
    let resumen = ""
    if (document.getElementById("act1").checked == true){
        precio += 3000 * document.getElementById("cantP1").value
        if( document.getElementById("cantP1").value > 0){
            resumen += `<p>Tour museo - X${document.getElementById("cantP1").value} adulto/s --------------------------------------------------- $${3000 * document.getElementById("cantP1").value}\n</p>`
        }
        precio += 3000/2 * document.getElementById("cantM1").value
        if( document.getElementById("cantM1").value > 0){
            resumen += `<p>Tour museo - X${document.getElementById("cantM1").value} menor/es --------------------------------------------------- $${3000/2 * document.getElementById("cantM1").value}\n</p>`
        }
    }
    if (document.getElementById("act2").checked == true){
        precio += 3000 * document.getElementById("cantP2").value
        if( document.getElementById("cantP2").value > 0){
            resumen += `<p>Tour cervecero - X${document.getElementById("cantP2").value} adulto/s --------------------------------------------------- $${3000 * document.getElementById("cantP2").value}\n</p>`
        }
        precio += 3000/2 * document.getElementById("cantM2").value
        if( document.getElementById("cantM2").value > 0){
            resumen += `<p>Tour cervecero - X${document.getElementById("cantM2").value} menor/es --------------------------------------------------- $${3000/2 * document.getElementById("cantM2").value}\n</p>`
        }
    }
    if (document.getElementById("act3").checked == true){
        precio += 4500 * document.getElementById("cantP3").value
        if( document.getElementById("cantP3").value > 0){
            resumen += `<p>Tour en barco - X${document.getElementById("cantP3").value} adulto/s --------------------------------------------------- $${4500 * document.getElementById("cantP3").value}\n</p>`
        }
        precio += 4500/2 * document.getElementById("cantM3").value
        if( document.getElementById("cantM3").value > 0){
            resumen += `<p>Tour en barco - X${document.getElementById("cantM3").value} menor/es --------------------------------------------------- $${4500/2 * document.getElementById("cantM3").value}\n</p>`
        }
    }
    if (document.getElementById("act1").checked == true && document.getElementById("act2").checked == true && document.getElementById("act3").checked == true){
        resumen += `<hr><p>Cupon del 20% de descuento al monto de $${precio} por comprar las tres actividades - <strong> Precio final: $${precio - precio * 0.20}<strong></p>`
        precio -= precio * 0.20
    }
    document.getElementById("preciototal").innerHTML = `<div> ${resumen} </div>`
    document.getElementById("preciototal").innerHTML += "<h3> Precio Total: $" + precio + "</h3>\n"
}