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

    // BLOQUE: modal tratamientos
    const tratamientos = [
        {
            titulo: "TERAPIA MANUAL",
            imagen: "images/terapiamanual.webp",
            descripcion: "Es una técnica de la fisioterapia en la que el profesional utiliza las manos para tratar distintas alteraciones del sistema musculoesquelético ,entre ellas, podemos destacar los masajes terapéuticos (masoterapia), movilizaciones articulares , manipulaciones articulares (thrust), etc. Con esta técnica conseguiremos estimular el flujo sanguíneo, disminuir el dolor, recuperar la movilidad de las articulaciones y por tanto, mejorar la funcionalidad del paciente."
        },
        {
            titulo: "PUNCIÓN SECA",
            imagen: "images/puncionseca.webp",
            descripcion: "Es una técnica que utilizamos en fisioterapia que consiste en introducir agujas muy finas, similares a las de acupuntura, justo en el punto donde se acumula tensión o donde se forma una “contractura”. Se utiliza para disminuir la tensión muscular, reducir el dolor y favorecer la regeneración del tejido."
        },
        {
            titulo: "ELECTROPUNCIÓN Y NEUROMODULACIÓN",
            imagen: "images/electropuncion.webp",
            descripcion: "La electropunción es una técnica que se realiza combinando agujas de acupuntura con impulsos eléctricos. Por otro lado, la neuromodulación utiliza los impulsos eléctricos para modificar la manera en que los nervios envían la información, lo que ayuda a reducir el dolor crónico. Por lo tanto, ambas son técnicas avanzadas de fisioterapia que se utilizan para mejorar la función neuromuscular y disminuir el dolor."
        },
        {
            titulo: "EJERCICIO TERAPÉUTICO",
            imagen: "images/terapiamanual.webp",
            descripcion: "Es una parte importante del tratamiento en fisioterapia, ya que favorece una mejor recuperación tras una lesión. Además, está demostrado que ayuda a las personas que presentan dolor crónico. Consiste en ejercicios planificados y adaptados a cada individuo para reducir el dolor de forma progresiva, disminuir la rigidez articular y muscular, y activar el sistema nervioso para regular la sensibilidad al dolor, especialmente, en pacientes de larga evolución."
        },
        {
            titulo: "FISIOTERAPIA DEPORTIVA",
            imagen: "images/vendajefuncional.webp",
            descripcion: "Es una especialidad de la fisioterapia que utiliza diferentes técnicas para recuperar a las personas que sufren lesiones derivadas del deporte. Se utilizan diferentes tratamientos, aunque podemos destacar la utilización de vendajes, como el kinesiotape y el vendaje funcional, que se pueden utilizar para modificar las sensaciones del deportista o limitar ciertos movimientos dolorosos para conseguir una mejor recuperación."
        },

        // ... más tratamientos
    ];

    const gridItems = document.querySelectorAll('#grid-tratamientos .grid-item');
    const modal = document.getElementById('modalTratamiento');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalCerrar = document.getElementById('modal-cerrar');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modal && modalImg && modalTitulo && modalDescripcion && modalCerrar) {
        gridItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const t = tratamientos[index];
                if (!t) return;
                modalImg.src = t.imagen;
                modalTitulo.textContent = t.titulo;
                modalDescripcion.textContent = t.descripcion;
                modalOverlay.classList.remove('hidden');
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // bloquea scroll
            });
        });

        modalCerrar.addEventListener('click', () => {
            modal.classList.add('hidden');
            modalOverlay.classList.add('hidden');
            document.body.style.overflow = ''; // permite scroll
        });
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

