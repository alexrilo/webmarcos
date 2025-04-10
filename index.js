
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

    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("toggleFormaciones");
        const formacionesContent = document.getElementById("formacionesContent");
    
        toggleButton.addEventListener("click", function () {
            const isOpen = formacionesContent.classList.contains("open");
    
            if (isOpen) {
                // Cierre: altura actual → 0
                formacionesContent.style.height = formacionesContent.scrollHeight + "px";
                requestAnimationFrame(() => {
                    formacionesContent.style.height = "0px";
                    formacionesContent.classList.remove("open");
                });
            } else {
                // Apertura: altura 0 → altura natural
                formacionesContent.classList.add("open");
                formacionesContent.style.height = "0px";
                requestAnimationFrame(() => {
                    formacionesContent.style.height = formacionesContent.scrollHeight + "px";
                });
            }
    
            // Gira la flecha
            toggleButton.classList.toggle("open");
        });
    
        // Reset height después de la transición (para evitar conflictos)
        document.getElementById("formacionesContent").addEventListener("transitionend", () => {
            if (formacionesContent.classList.contains("open")) {
                formacionesContent.style.height = "auto";
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("AG_yRzE18h_xu1dXe"); // Reemplaza con tu User ID de EmailJS

        document.querySelector(".contact__form").addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío tradicional del formulario
            // Capturar los valores del formulario
            const formData = {
                name: document.querySelector('input[name="nombre"]').value,
                email: document.querySelector('input[name="email"]').value,
                message: document.querySelector('textarea[name="mensaje"]').value
            };

            // Enviar el correo con EmailJS
            emailjs.send("service_st2be2e", "template_zsfjio9", formData)
                .then(function (response) {
                    alert("¡Mensaje enviado con éxito!");
                }, function (error) {
                    alert("Error al enviar el mensaje. Inténtalo de nuevo.");
                });
            document.querySelector(".contact__form").reset();
        });
    });


    