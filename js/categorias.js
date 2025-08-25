// Funciones y lógica para mostrar y cambiar categorías
(function(){
    window.mostrarBienvenida = function() {
        // Oculta todas las secciones de productos
        if (secciones) {
            secciones.forEach(sec => sec.style.display = 'none');
        }
        // Muestra solo la bienvenida
        var bienvenida = document.querySelector('.bienvenida');
        if (bienvenida) bienvenida.style.display = 'block';
    };
    let categoriaActual = null;
    let secciones = null;

    window.initCategorias = function() {
        secciones = document.querySelectorAll('.productos > section');
        secciones.forEach(sec => {
            sec.style.display = 'none';
        });
        // Al inicio no se muestra ninguna categoría, solo la bienvenida
        var bienvenida = document.querySelector('.bienvenida');
        if (bienvenida) bienvenida.style.display = 'block';
        window.setCategoria = setCategoria;
        window.getCategoriaActual = function() { return categoriaActual; };
        window.getSecciones = function() { return secciones; };
    };

    function setCategoria(idCategoria) {
    categoriaActual = idCategoria;
    // Oculta bienvenida
    var bienvenida = document.querySelector('.bienvenida');
    if (bienvenida) bienvenida.style.display = 'none';
    secciones.forEach(sec => sec.style.display = 'none');
    const seleccionada = document.getElementById(idCategoria);
    if (seleccionada) seleccionada.style.display = 'block';
    if (window.setCategoriaBusqueda) window.setCategoriaBusqueda(idCategoria);
    }
    function mostrarProductosPorCategoria(categoria) {
    // Eliminada función, ya no se usa
    }
    window.mostrarCategoria = setCategoria;
})();
