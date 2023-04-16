function cambiarIdioma(idioma) {
    // Obtener la URL actual
    var urlActual = window.location.href;

    // Extraer el nombre del archivo HTML actual
    var nombreArchivo = urlActual.substring(urlActual.lastIndexOf('/') + 1);

    // Verificar si el archivo actual es el index.html
    if (nombreArchivo === 'index.html') {
        // Construir la URL del archivo de idioma para la versión en inglés del index.html
        if (idioma === 'en') {
            var nuevaUrl = ('../../'+ nombreArchivo);
        } else {
            var nuevaUrl = ('../../Lang/' + idioma + '/' + nombreArchivo);
        }
    } else {
        // Construir la URL del archivo de idioma para otros archivos HTML
        var nuevaUrl = ('../../Lang/' + idioma + '/' + nombreArchivo);
    }

    // Redirigir al archivo de idioma
    window.location.href = nuevaUrl;
}

