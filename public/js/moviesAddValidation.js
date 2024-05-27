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

let errorMessages = document.querySelectorAll('.error-message');



inputFields.forEach((inputField, index) => {
    inputField.addEventListener('input', function(evento) {  // Evento input: se activa cada vez que el valor de un input cambia, validacion en tiempo real para el usuariio.
        if (inputField.value == "") {
            inputField.classList.add('is-invalid');                          // la agrego y saco porque es en tiempo real la validacion (no es necesaria si no)
            errorMessages[index].textContent = 'Este campo es obligatorio';

        } else {
            inputField.classList.remove('is-invalid');                       // la agrego y saco porque es en tiempo real la validacion (no es necesaria si no)
            inputField.classList.add('is-valid');   
            errorMessages[index].textContent = '';                          // Para limpia el mensaje de error.
        }

        if (inputField.name == 'rating' || inputField.name == 'awards') {
            let value = parseFloat(inputField.value);                       // parseFloat: convierte un string a un número decimal.
            if (isNaN(value) || value < 0 || value > 10) {                  // isNan: devuelve true si el valor no es un número.
                inputField.classList.add('is-invalid');
                inputField.classList.remove('is-valid');
                errorMessages[index].textContent = 'El valor debe estar entre 0 y 10';
            } else {
                inputField.classList.remove('is-invalid');
                inputField.classList.add('is-valid'); 
            }
        }

        if (inputField.name == 'length') {
            let value = parseInt(inputField.value);                         // parseInt: convierte un string a un número entero.
            if (value < 60 || value > 360) {
                inputField.classList.add('is-invalid');
                inputField.classList.remove('is-valid');
                errorMessages[index].textContent = 'La duración debe estar entre 60 y 360 minutos';
            } else {
                inputField.classList.remove('is-invalid');
                inputField.classList.add('is-valid'); 
            }
        }
        


    });
});


formulario.addEventListener('submit', function(evento){
    let EmptyField = false;
    
    inputFields.forEach((inputField, index) => {
        if (inputField.value == "") {
            evento.preventDefault();
            inputField.classList.add('is-invalid');
            errorMessages[index].textContent = 'Este campo es obligatorio';
            EmptyField = true;
        }
    });



    if (EmptyField) {
        alert('Todos los campos son obligatorios');
    } else {
        alert('La película se guardó satisfactoriamente');
    }

    
});





}