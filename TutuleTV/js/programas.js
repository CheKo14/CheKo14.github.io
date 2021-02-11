let imagenes = document.getElementsByClassName('imagen');
let descripcion = document.getElementsByClassName('descripcion');

function activar(){
    descripcion.className = 'color';
}

for(i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click',activar);
}