
    // Selecciona todos los enlaces del navbar
    const navbarLinks = document.querySelectorAll('.navbar a');
    const menuToggle = document.getElementById('menu-toggle');

    // Agrega un evento de clic a cada enlace
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Desmarca el checkbox para cerrar el menú
            menuToggle.checked = false;
            document.body.classList.remove('no-scroll');
        });
    });

    menuToggle.addEventListener('change', () => {
        document.body.classList.toggle('no-scroll', menuToggle.checked);
    });
