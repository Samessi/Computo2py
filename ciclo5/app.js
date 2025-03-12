// Función para ampliar las imágenes
function ampliarImagen(img) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Función para cerrar el modal cuando se hace clic en el fondo
function cerrarModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Función para manejar el reproductor de música
function inicializarReproductor() {
    const audioPlayer = document.getElementById('audioPlayer');

    audioPlayer.addEventListener('play', () => {
        console.log('La música está reproduciéndose');
    });

    audioPlayer.addEventListener('pause', () => {
        console.log('La música está pausada');
    });

    audioPlayer.addEventListener('ended', () => {
        console.log('La música ha terminado');
    });
}

// Inicializa las funcionalidades cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarReproductor();

    var modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });
});