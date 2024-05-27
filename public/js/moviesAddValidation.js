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
inputTitle.focus();  // Para cuando cargue la pagina se posicione en x input.

let inputFields = document.querySelectorAll('input');


inputFields.forEach(inputField => {
    inputField.addEventListener('input', function(evento) {   // Evento input: se dispara cada vez que el valor de un input cambia, validacion tiempo real para el usuariio.
        if (inputField.value == "") {
            inputField.classList.add('is-invalid');
            alert('Este campo es obligatorio');
        } else {
            inputField.classList.remove('is-invalid');
        }
    });
});


formulario.addEventListener('submit', function(evento){
    let EmptyField = false;
    
    inputFields.forEach(inputField => {
        if (inputField.value == "") {
            evento.preventDefault();
            inputField.classList.add('is-invalid');
            EmptyField = true;
        }
    });

    if (EmptyField) {
        alert('Todos los campos son obligatorios');
    }
});





}