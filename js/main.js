document.addEventListener('DOMContentLoaded', function() {
    // Inicializar categorías
    if (window.initCategorias) window.initCategorias();
    // Inicializar búsqueda
    if (window.initBusqueda && window.getCategoriaActual && window.getSecciones) {
        window.initBusqueda(window.getCategoriaActual(), window.getSecciones());
    }
    // Inicializar carrito
    if (window.initCarrito) window.initCarrito();
});