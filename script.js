/* =========================================================
   HOJA DE VIDA - EVER ANTONIO ASSIA IBAÑEZ
   JAVASCRIPT + jQUERY - UNIDAD 2
========================================================= */


/* =========================
   INICIO DE JQUERY
========================= */

$(document).ready(function () {


    /* =========================
       DETECTAR PÁGINA ACTUAL
    ========================= */

    const paginaActual =
        window.location.pathname
        .split("/")
        .pop() || "index.html";


    /* =========================
       MARCAR ENLACE ACTIVO
    ========================= */

    $(".nav-link").each(function () {

        const enlace =
            $(this).attr("href");

        if (enlace === paginaActual) {

            $(this).addClass("active");
        }
    });


    /* =========================
       ANIMACIÓN DEL HERO
    ========================= */

    $(".hero-contenido")
        .hide()
        .fadeIn(1200);


    /* =========================
       ANIMACIÓN DE LA FOTO
    ========================= */

    $(".foto-perfil")
        .hide()
        .fadeIn(1000)
        .addClass("pulse");


    /* =========================
       ANIMACIÓN DE TARJETAS
    ========================= */

    $(".tarjeta").each(function (indice) {

        $(this)
            .css({
                opacity: 0,
                transform: "translateY(30px)"
            })

            .delay(250 * indice)

            .animate(
                {
                    opacity: 1
                },
                700
            )

            .css(
                "transform",
                "translateY(0)"
            );
    });


    /* =========================
       ANIMACIÓN DEL CONTENIDO
    ========================= */

    $(".texto-bienvenida")
        .hide()
        .slideDown(900);


    /* =========================
       EFECTO HOVER EN TARJETAS
    ========================= */

    $(".tarjeta").hover(

        function () {

            $(this)
                .find(".icono")
                .css({
                    transform:
                        "scale(1.08) rotate(3deg)"
                });
        },

        function () {

            $(this)
                .find(".icono")
                .css({
                    transform:
                        "scale(1) rotate(0deg)"
                });
        }
    );


    /* =========================
       VALIDACIÓN DEL FORMULARIO
    ========================= */

    $("#formularioContacto")
        .on("submit", function (evento) {


            /* Evitar que la página se recargue */

            evento.preventDefault();


            /* Obtener valores */

            const nombre =
                $("#nombre")
                .val()
                .trim();

            const correo =
                $("#correo")
                .val()
                .trim();

            const mensaje =
                $("#mensaje")
                .val()
                .trim();


            const cajaMensaje =
                $("#mensajeValidacion");


            /* Ocultar mensaje anterior */

            cajaMensaje
                .addClass("d-none")
                .removeClass(
                    "alert-danger alert-success"
                );


            /* =========================
               VALIDAR NOMBRE
            ========================= */

            if (nombre === "") {

                mostrarError(
                    "Por favor, escribe tu nombre."
                );

                $("#nombre").focus();

                return;
            }


            /* =========================
               VALIDAR CORREO VACÍO
            ========================= */

            if (correo === "") {

                mostrarError(
                    "Por favor, escribe tu correo electrónico."
                );

                $("#correo").focus();

                return;
            }


            /* =========================
               VALIDAR CORREO
            ========================= */

            const patronCorreo =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !patronCorreo.test(correo)
            ) {

                mostrarError(
                    "El correo electrónico no tiene un formato válido."
                );

                $("#correo").focus();

                return;
            }


            /* =========================
               VALIDAR MENSAJE
            ========================= */

            if (mensaje === "") {

                mostrarError(
                    "Por favor, escribe un mensaje."
                );

                $("#mensaje").focus();

                return;
            }


            /* =========================
               FORMULARIO CORRECTO
            ========================= */

            cajaMensaje

                .removeClass(
                    "d-none alert-danger"
                )

                .addClass(
                    "alert-success"
                )

                .hide()

                .text(
                    "¡Formulario validado correctamente! Gracias por contactarme."
                )

                .fadeIn(500);


            /* =========================
               CAMBIAR TEXTO DEL BOTÓN
            ========================= */

            $(".btn-enviar")
                .text("¡Enviado!");


            /* Después de un tiempo */

            setTimeout(function () {

                $(".btn-enviar")
                    .text("Enviar mensaje");

            }, 1800);


            /* =========================
               LIMPIAR FORMULARIO
            ========================= */

            $("#formularioContacto")[0]
                .reset();

        });


    /* =========================
       FUNCIÓN PARA MOSTRAR ERRORES
    ========================= */

    function mostrarError(mensaje) {

        $("#mensajeValidacion")

            .removeClass(
                "d-none alert-success"
            )

            .addClass(
                "alert-danger"
            )

            .hide()

            .text(mensaje)

            .fadeIn(400);
    }


    /* =========================
       EFECTO SUAVE EN ENLACES
    ========================= */

    $('a[href^="#"]')
        .on("click", function (evento) {


            const destino =
                $(this).attr("href");


            if (destino !== "#") {

                evento.preventDefault();


                $("html, body")
                    .animate(
                        {
                            scrollTop:
                                $(destino)
                                .offset()
                                .top - 80
                        },
                        700
                    );
            }
        });


    /* =========================
       EFECTO DEL NAVBAR AL HACER SCROLL
    ========================= */

    $(window).on(
        "scroll",
        function () {


            if (
                $(window).scrollTop() > 30
            ) {

                $(".navbar").css({

                    boxShadow:
                        "0 10px 35px rgba(2, 6, 23, 0.28)"
                });

            } else {

                $(".navbar").css({

                    boxShadow:
                        "0 8px 30px rgba(2, 6, 23, 0.16)"
                });
            }
        }
    );


    /* =========================
       ANIMACIÓN DE ENTRADA
    ========================= */

    function revisarElementos() {


        $(".reveal").each(
            function () {


                const posicion =
                    $(this)
                    .offset()
                    .top;


                const pantalla =
                    $(window).scrollTop() +
                    $(window).height();


                if (
                    pantalla >
                    posicion + 80
                ) {

                    $(this)
                        .addClass("visible");
                }
            }
        );
    }


    /* Revisar al hacer scroll */

    $(window).on(
        "scroll",
        revisarElementos
    );


    /* Revisar al cargar */

    revisarElementos();


});