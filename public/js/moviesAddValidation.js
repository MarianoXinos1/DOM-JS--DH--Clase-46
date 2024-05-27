window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

console.log("El script se está cargando");    // Se ve solo Consola Cliente
let inputTitle = document.querySelector('#title');
inputTitle.focus();

formulario.addEventListener('submit', function(evento){

    let inputFields = document.querySelectorAll('input');

    for (let i = 0; i < inputFields.length; i++) {
        console.log(inputFields[i].value);
        if (inputFields[i].value == "") {
            evento.preventDefault();
            alert('Todos los campos son obligatorios');
            return
        }
    }
})





}