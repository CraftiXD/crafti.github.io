document.addEventListener('DOMContentLoaded', () => {
    // Manejo de errores de imágenes
    const images = document.querySelectorAll('.card-image');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Si la imagen falla (no existe en el servidor), ocultamos el elemento
            this.style.display = 'none';
            console.warn('Imagen no encontrada:', this.src);
        });
    });

    console.log('SuperCraft Studios cargado correctamente.');
});
