let act1Checkbox = document.getElementById("act1")
let act2Checkbox = document.getElementById("act2")
let act3Checkbox = document.getElementById("act3")

act1Checkbox.onclick = act1CheckboxApretado
act2Checkbox.onclick = act2CheckboxApretado
act3Checkbox.onclick = act3CheckboxApretado


let CantP1 = document.getElementById("cantP1")
let CantP2 = document.getElementById("cantP2")
let CantP3 = document.getElementById("cantP3")

CantP1.onchange = mostrarPrecio
CantP2.onchange = mostrarPrecio
CantP3.onchange = mostrarPrecio



function act1CheckboxApretado() {
    if (document.getElementById("act1").checked == true) {
        document.getElementById("MostrarP1").style.display = "flex"
    } else {
        document.getElementById("MostrarP1").style.display = "none"
    }
    mostrarPrecio()
}
function act2CheckboxApretado() {
    if (document.getElementById("act2").checked == true) {
        document.getElementById("MostrarP2").style.display = "flex"
    } else {
        document.getElementById("MostrarP2").style.display = "none"
    }
    mostrarPrecio()
}
function act3CheckboxApretado() {
    if (document.getElementById("act3").checked == true) {
        document.getElementById("MostrarP3").style.display = "flex"
    } else {
        document.getElementById("MostrarP3").style.display = "none"
    }
    mostrarPrecio()
}

function mostrarPrecio(){
    let precio = 0
    if (document.getElementById("act1").checked == true){
        precio += 5000 * document.getElementById("cantP1").value
    }
    if (document.getElementById("act2").checked == true){
        precio += 6000 * document.getElementById("cantP2").value
    }
    if (document.getElementById("act3").checked == true){
        precio += 7000 * document.getElementById("cantP3").value
    }
    document.getElementById("preciototal").innerHTML = "<p> Precio Total: $" + precio + "</p>"
}