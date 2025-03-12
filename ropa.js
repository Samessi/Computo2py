let carrito = [];

// Función para abrir modal de imagen
function openModal(element) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "flex"; // Mostrar modal
    modalImg.src = element.src; // Asignar imagen clickeada al modal
}

// Cierra el modal al tocar fuera de la imagen o en la "X"
document.querySelector(".close").onclick = function () {
    document.getElementById("modal").style.display = "none";
};

document.getElementById("modal").onclick = function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};

// Función para mostrar detalles del producto en el modal
function mostrarDetalles(nombre, precio, imagen) {
    document.getElementById('modal-imagen').src = imagen;
    document.getElementById('modal-nombre').innerText = nombre;
    document.getElementById('modal-precio').innerText = "$" + precio;
    document.getElementById('modal-producto').style.display = 'flex';
}

// Cierra el modal de detalles
function cerrarDetalles() {
    document.getElementById('modal-producto').style.display = 'none';
}

// Agregar producto al carrito
function agregarAlCarrito() {
    let nombre = document.getElementById('modal-nombre').innerText;
    let precio = parseFloat(document.getElementById('modal-precio').innerText.replace('$', ''));

    carrito.push({ nombre, precio });

    // Guardar carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();
    alert('Producto agregado al carrito');
}

// Función para actualizar carrito en pantalla
function actualizarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        let item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;

        // Agregar botón para eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "X";
        botonEliminar.onclick = function () {
            eliminarDelCarrito(index);
        };

        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
    });
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    
    // Actualizar localStorage y la lista en pantalla
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

// Mostrar/Ocultar carrito
function toggleCarrito() {
    let carritoDiv = document.getElementById('carrito');
    carritoDiv.style.display = carritoDiv.style.display === 'none' ? 'block' : 'none';
}

// Recuperar carrito del localStorage al cargar la página
window.onload = function () {
    let carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
};
