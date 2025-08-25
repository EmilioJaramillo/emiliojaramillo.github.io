// Funciones y lógica para el carrito de compras y el modal
(function(){
    let carrito = [];
    let btnCarrito = null;
    let modalCarrito = null;
    let contenidoCarrito = null;
    let btnCerrarCarrito = null;

    function actualizarCarrito() {
        // Actualiza el badge
        var badge = btnCarrito.querySelector('.carrito-badge');
        if (badge) badge.textContent = carrito.length;
    }

    function mostrarCarrito() {
        contenidoCarrito.innerHTML = '<h2>Carrito de compras</h2>';
        if (carrito.length === 0) {
            contenidoCarrito.innerHTML += '<p>El carrito está vacío.</p>';
        } else {
            let lista = document.createElement('ul');
            let total = 0;
            carrito.forEach((item) => {
                let precioNum = parseInt(item.precio.replace(/[^0-9]/g, ''));
                total += precioNum;
                let li = document.createElement('li');
                li.textContent = `${item.nombre} - ${item.precio}`;
                lista.appendChild(li);
            });
            contenidoCarrito.appendChild(lista);
            contenidoCarrito.innerHTML += `<h3>Total a pagar: $${total.toLocaleString()}</h3>`;
            // Botón terminar compra
            let btnTerminar = document.createElement('button');
            btnTerminar.textContent = 'Terminar compra';
            btnTerminar.className = 'btn-terminar-compra';
            btnTerminar.onclick = function() {
                contenidoCarrito.innerHTML = '<h2>¡Artículos vendidos!</h2><p>Gracias por tu compra.</p>';
                carrito = [];
                actualizarCarrito();
                contenidoCarrito.appendChild(btnCerrarCarrito);
            };
            contenidoCarrito.appendChild(btnTerminar);
            // Botón cancelar venta
            let btnCancelar = document.createElement('button');
            btnCancelar.textContent = 'Cancelar venta';
            btnCancelar.className = 'btn-cancelar-venta';
            btnCancelar.onclick = function() {
                carrito = [];
                actualizarCarrito();
                mostrarCarrito();
            };
            contenidoCarrito.appendChild(btnCancelar);
        }
        contenidoCarrito.appendChild(btnCerrarCarrito);
        modalCarrito.style.display = 'flex';
    }

    window.initCarrito = function() {
        // Buscar el botón del carrito por clase y texto
        btnCarrito = document.querySelector('.carrito, .btn-outline-warning');
        // Delegación de eventos para agregar al carrito
        var productosContenedor = document.querySelector('.productos');
        if (productosContenedor) {
            productosContenedor.addEventListener('click', function(e) {
                if (e.target && e.target.tagName === 'BUTTON' && e.target.textContent.includes('Agregar al carrito')) {
                    const prod = e.target.closest('.producto');
                    if (prod) {
                        const nombre = prod.querySelector('h4')?.textContent || '';
                        const precio = prod.querySelector('p')?.textContent || '';
                        carrito.push({nombre, precio});
                        actualizarCarrito();
                    }
                }
            });
        }
        actualizarCarrito();
        // Modal para mostrar el carrito
        modalCarrito = document.createElement('div');
        modalCarrito.className = 'modal-carrito';
        document.body.appendChild(modalCarrito);
        contenidoCarrito = document.createElement('div');
        contenidoCarrito.className = 'contenido-carrito';
        modalCarrito.appendChild(contenidoCarrito);
        btnCerrarCarrito = document.createElement('button');
        btnCerrarCarrito.textContent = 'Cerrar';
        btnCerrarCarrito.className = 'btn-cerrar-carrito';
        btnCerrarCarrito.onclick = () => { modalCarrito.style.display = 'none'; };
        if (btnCarrito) btnCarrito.addEventListener('click', mostrarCarrito);
    };
})();