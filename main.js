const boton = document.getElementById("boton")
let tiempo = document.getElementById("tiempo")
let resultado = document.getElementById("contador")

boton.addEventListener("click",iniciar)
function iniciar(){
    if (tiempo.value=="") {
        alert("No se puede iniciar, ingrese un valor")
    } else{
        contador(tiempo.value)
    }
}
function contador(time){
    if(time<=0){
        resultado.innerText="Finish"
    } else{
        resultado.innerText= `${time}`;
        setTimeout(contador,1000,time-1)
        
    }
}