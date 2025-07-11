function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');

    menu.classList.toggle('open');
    overlay.classList.toggle('hidden');

    // También puedes prevenir scroll
    if (menu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // BLOQUE: toggleFormaciones
    const toggleButton = document.getElementById("toggleFormaciones");
    const formacionesContent = document.getElementById("formacionesContent");
    const buttonMenu = document.getElementById("buttonMenu");

    if (buttonMenu && toggleButton && formacionesContent) {
        buttonMenu.addEventListener("click", function () {
            const isOpen = formacionesContent.classList.contains("open");
            if (!isOpen) {
                formacionesContent.classList.add("open");
                formacionesContent.style.height = "0px";
                requestAnimationFrame(() => {
                    formacionesContent.style.height = formacionesContent.scrollHeight + "px";
                });
                toggleButton.classList.toggle("open");
            }
        });

        toggleButton.addEventListener("click", function () {
            const isOpen = formacionesContent.classList.contains("open");
            if (isOpen) {
                formacionesContent.style.height = formacionesContent.scrollHeight + "px";
                requestAnimationFrame(() => {
                    formacionesContent.style.height = "0px";
                    formacionesContent.classList.remove("open");
                });
            } else {
                formacionesContent.classList.add("open");
                formacionesContent.style.height = "0px";
                requestAnimationFrame(() => {
                    formacionesContent.style.height = formacionesContent.scrollHeight + "px";
                });
            }
            toggleButton.classList.toggle("open");
        });

        formacionesContent.addEventListener("transitionend", () => {
            if (formacionesContent.classList.contains("open")) {
                formacionesContent.style.height = "auto";
            }
        });
    }

    // BLOQUE: IntersectionObserver hamburguesa
    const btn = document.getElementById("hamburgerBtn");
    const hero = document.querySelector(".hero");

    if (btn && hero) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    btn.classList.remove("dark");
                    btn.classList.add("white");
                } else {
                    btn.classList.remove("white");
                    btn.classList.add("dark");
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(hero);
    }


});

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("AG_yRzE18h_xu1dXe"); // Reemplaza con tu User ID de EmailJS

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
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
        document.querySelector(".contact-form").reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });

    // Cierre al hacer clic fuera del modal
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });
});


