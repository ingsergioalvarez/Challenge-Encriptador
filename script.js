function abrirPDF(rutaPDF) {
    var lectorPDF = document.getElementById('visor-pdf');
    lectorPDF.src = rutaPDF;


}
function reemplazarNumeros() {
    // Obtener el texto de entrada
    var entradaText = document.getElementById("entrada").value;

    // Realizar el reemplazo de acuerdo con la lógica proporcionada
    var salidaText = entradaText.replace(/a/g, '208.137.1.1.3.3#')
        .replace(/b/g, '165.77.10.1.11#')
        .replace(/c/g, '208.3.2.1.5.5#')
        .replace(/d/g, '208.59.1.1.3.1#')
        .replace(/e/g, '155.43.5.1.6.4#')
        .replace(/f/g, '165.155.1.2.11.1#')
        .replace(/g/g, '208.135.3.6.10.3#')
        .replace(/h/g, '155.1.2.1.1.3#')
        .replace(/i/g, '165.92.4.2.2.5#')
        .replace(/j/g, '208.24.2.1.5.1#')
        .replace(/k/g, '165.157.1.1.8.3#')
        .replace(/l/g, '208.124.1.1.1.1')
        .replace(/m/g, '165.10.1.1.5.1#')
        .replace(/n/g, '208.19.1.1.4.4')
        .replace(/o/g, '165.1.1.1.2.9#')
        .replace(/p/g, '208.129.1.1.2.3#')
        .replace(/q/g, '165.51.10.1.4.7#')
        .replace(/r/g, '208.86.6.2.2.1')
        .replace(/s/g, '155.89.4.1.4.1#')
        .replace(/t/g, '208.163.1.1.2.5')
        .replace(/v/g, '155.134.2.1.1.1#')
        .replace(/W/g, '165.88.2.1.11.1#')
        .replace(/x/g, '155.89.8.3.2#')
        .replace(/y/g, '208.207.13.1.7.5#')
        .replace(/z/g, '165.108.9.1.8.5#')
        /*.replace(/1/g, '\u051D#')
        .replace(/2/g, '\u049A#')
        .replace(/3/g, '\u0559#')
        .replace(/4/g, '\u0543#')
        .replace(/5/g, '\u065A#')
        .replace(/6/g, '\u0644#')
        .replace(/7/g, '\u0a3D#')
        .replace(/8/g, '\u0df7#')
        .replace(/9/g, '\u16C7#')
        .replace(/0/g, '\u1505#')*/
        .replace(/1/g, '\u058D')
        .replace(/2/g, '\u052A')
        .replace(/3/g, '\u0579')
        .replace(/4/g, '\u0583')
        .replace(/5/g, '\u070A')
        .replace(/6/g, '\u0814')
        .replace(/7/g, '\u0A2D')
        .replace(/8/g, '\u0DE7')
        .replace(/9/g, '\u15C7')
        .replace(/0/g, '\u1805')
                                /*.replace(/~/g, '\u1929')*/;
    // Asignar el resultado al elemento de salida
    document.getElementById("salida").textContent = salidaText;
    

}
function descodificarNumeros() {
    // Obtener el texto de entrada codificado
    var entradaTextCodificado = document.getElementById("entrada").value;

    // Realizar el reemplazo inverso de acuerdo con la lógica proporcionada
    var salidaText = entradaTextCodificado
        .replace(/\u058D/g, '1')
        .replace(/\u052A/g, '2')
        .replace(/\u0579/g, '3')
        .replace(/\u0583/g, '4')
        .replace(/\u070A/g, '5')
        .replace(/\u0814/g, '6')
        .replace(/\u0A2D/g, '7')
        .replace(/\u0DE7/g, '8')
        .replace(/\u15C7/g, '9')
        .replace(/\u1805/g, '0')
        
        .replace(/208.137.1.1.3.3#/g, 'a')
        .replace(/165.77.10.1.11#/g, 'b')
        .replace(/208.3.2.1.5.5#/g, 'c')
        .replace(/208.59.1.1.3.1#/g, 'd')
        .replace(/155.43.5.1.6.4#/g, 'e')
        .replace(/165.155.1.2.11.1#/g, 'f')
        .replace(/208.135.3.6.10.3#/g, 'g')
        .replace(/155.1.2.1.1.3#/g, 'h')
        .replace(/165.92.4.2.2.5#/g, 'i')
        .replace(/208.24.2.1.5.1#/g, 'j')
        .replace(/165.157.1.1.8.3#/g, 'k')
        .replace(/208.124.1.1.1.1/g, 'l')
        .replace(/165.10.1.1.5.1#/g, 'm')
        .replace(/208.19.1.1.4.4/g, 'n')
        .replace(/165.1.1.1.2.9#/g, 'o')
        .replace(/208.129.1.1.2.3#/g, 'p')
        .replace(/165.51.10.1.4.7#/g, 'q')
        .replace(/208.86.6.2.2.1/g, 'r')
        .replace(/155.89.4.1.4.1#/g, 's')
        .replace(/208.163.1.1.2.5/g, 't')
        .replace(/155.134.2.1.1.1#/g, 'v')
        .replace(/165.88.2.1.11.1#/g, 'W')
        .replace(/155.89.8.3.2#/g, 'x')
        .replace(/208.207.13.1.7.5#/g, 'y')
        .replace(/165.108.9.1.8.5#/g, 'z')
        ;

    // Asignar el resultado descodificado al elemento de salida
    document.getElementById("salida").textContent = salidaText;
}
function cargarEmojis() {
    var emojis = ['😀', '😍', '🚀', '🌈', '🎉', '🍎', '🚗', '🐱', '🌺', '📱', '⚽', '🎸', '🍕', '🏰', '🎈', '🌍', '🎃', '🌟', '🍓', '🚲', '📷', '🎵', '🐧', '🏆', '🚢', '🍔', '🌼', '🎨', '👾', '🌮', '🚁', '🍦', '📚', '🎤', '🐳', '🚂', '🍟', '🌸', '🎮', '🏝', '🎯', '🚑', '🍩', '📺', '🎻', '🐼', '🏀', '🍇', '🌞', '🎢', '🚀', '🍉', '🎧', '🏅', '🍭', '🌌', '🎁', '🚄', '🐨', '🍒', '🌷', '🎱', '🚴', '📱', '🌈', '😊', '😂', '😎', '😜', '😇', '😋', '😍', '😘', '🥰', '🤩', '🥳', '😳', '😢', '😭', '😡', '😱', '🤔', '🙄', '🤗', '🤓', '😴', '😷', '🤢', '🤮', '🤕', '🥺', '🤥', '🤫', '🤭'];

    // Función para generar dinámicamente los elementos
    function generarElementos(letra) {
        var bloqueLetra = document.createElement('div');
        bloqueLetra.classList.add('bloque-letra');
        bloqueLetra.id = letra;

        var letrasContainer = document.querySelector('.letras');
        letrasContainer.appendChild(bloqueLetra);

        var selectId = "emojiSelector" + letra.toUpperCase();
        var inputId = "codigoEmoji" + letra.toUpperCase();

        // Crear el elemento <p>
        var pElement = document.createElement('p');
        pElement.innerHTML = letra;

        // Crear el elemento <select>
        var selectElement = document.createElement('select');
        selectElement.classList.add('selector');
        selectElement.id = selectId;
        selectElement.onchange = function () {
            mostrarCodigoEmoji(this, inputId);
        };

        // Llenar el select con las opciones de emojis
        for (var i = 0; i < emojis.length; i++) {
            var option = document.createElement('option');
            option.value = emojis[i];
            option.text = emojis[i];
            selectElement.appendChild(option);
        }

        // Crear el elemento <input>
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = inputId;
        inputElement.readOnly = true;

        // Adjuntar los elementos al <p>
        pElement.appendChild(selectElement);
        pElement.appendChild(inputElement);

        // Adjuntar el <p> al formulario
        bloqueLetra.appendChild(pElement);

        // Mostrar el código del emoji seleccionado
        mostrarCodigoEmoji(selectElement, inputId);
    }

    // Llamar a la función para cada letra de la 'a' a la 'z'
    for (var i = 0; i < 26; i++) {
        var letra = String.fromCharCode(97 + i);
        generarElementos(letra);
    }
}


function mostrarCodigoEmoji(select, inputId) {
    var codigoEmojiInput = document.getElementById(inputId);
    var codigoEmoji = select.value.codePointAt(0).toString(16).toUpperCase();
    codigoEmojiInput.value = "&#x" + codigoEmoji;
}
function validarEmojisUnicos() {
    var emojisSeleccionados = [];

    // Recorre cada letra y verifica los emojis seleccionados
    for (var i = 0; i < 26; i++) {
        var letra = String.fromCharCode(97 + i);
        var emojiSelector = document.getElementById("emojiSelector" + letra.toUpperCase());
        var emojiSeleccionado = emojiSelector.value;

        // Verifica si el emoji ya fue seleccionado
        if (emojisSeleccionados.includes(emojiSeleccionado)) {
            alert("¡Error! Se ha seleccionado el mismo emoji más de una vez.");
            return false;
        }

        emojisSeleccionados.push(emojiSeleccionado);
    }

    // Si llega hasta aquí, todos los emojis son únicos
    alert("¡Validación exitosa! Todos los emojis son diferentes.");
    return true;
}
function seleccionarAleatoriamente() {
    var emojisDisponibles = ['😀', '😍', '🚀', '🌈', '🎉', '🍎', '🚗', '🐱', '🌺', '📱', '⚽', '🎸', '🍕', '🏰', '🎈', '🌍', '🎃', '🌟', '🍓', '🚲', '📷', '🎵', '🐧', '🏆', '🚢', '🍔', '🌼', '🎨', '👾', '🌮', '🚁', '🍦', '📚', '🎤', '🐳', '🚂', '🍟', '🌸', '🎮', '🏝', '🎯', '🚑', '🍩', '📺', '🎻', '🐼', '🏀', '🍇', '🌞', '🎢', '🚀', '🍉', '🎧', '🏅', '🍭', '🌌', '🎁', '🚄', '🐨', '🍒', '🌷', '🎱', '🚴', '📱', '🌈', '😊', '😂', '😎', '😜', '😇', '😋', '😍', '😘', '🥰', '🤩', '🥳', '😳', '😢', '😭', '😡', '😱', '🤔', '🙄', '🤗', '🤓', '😴', '😷', '🤢', '🤮', '🤕', '🥺', '🤥', '🤫', '🤭'];

    // Recorre cada letra y selecciona un emoji aleatorio
    for (var i = 0; i < 26; i++) {
        var letra = String.fromCharCode(97 + i);
        var emojiSelector = document.getElementById("emojiSelector" + letra.toUpperCase());

        // Selecciona un emoji aleatorio
        var emojiAleatorio = emojisDisponibles[Math.floor(Math.random() * emojisDisponibles.length)];

        // Asigna el emoji al select
        emojiSelector.value = emojiAleatorio;

        // Remueve el emoji seleccionado para que no se repita
        emojisDisponibles = emojisDisponibles.filter(function (emoji) {
            return emoji !== emojiAleatorio;
        });
    }
}

function guardarConfiguracion() {
    var configuracion = {};

    // Recopila la configuración del usuario (puedes ajustar según tu estructura)
    for (var i = 0; i < 26; i++) {
        var letra = String.fromCharCode(97 + i);
        var emojiSelector = document.getElementById("emojiSelector" + letra.toUpperCase());
        var codigoEmoji = document.getElementById("codigoEmoji" + letra.toUpperCase());

        configuracion[letra] = {
            emoji: emojiSelector.value,
            codigo: codigoEmoji.value
        };
    }

    // Convierte la configuración a JSON
    var configuracionJSON = JSON.stringify(configuracion);

    // Crea un objeto Blob con el contenido y el tipo MIME
    var blob = new Blob([configuracionJSON], { type: "application/json" });

    // Crea un enlace de descarga y haz clic en él
    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = "configuracion.json";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}
function cargarConfiguracion() {
    var inputArchivo = document.createElement("input");
    inputArchivo.type = "file";

    // Escucha el evento de cambio de archivo
    inputArchivo.addEventListener("change", function (event) {
        var archivo = event.target.files[0];

        if (archivo) {
            var lector = new FileReader();

            // Lee el contenido del archivo
            lector.onload = function (e) {
                var contenido = e.target.result;

                // Parsea el contenido JSON
                var configuracion = JSON.parse(contenido);

                // Aplica la configuración al formulario (puedes ajustar según tu estructura)
                for (var letra in configuracion) {
                    var emojiSelector = document.getElementById("emojiSelector" + letra.toUpperCase());
                    var codigoEmoji = document.getElementById("codigoEmoji" + letra.toUpperCase());

                    emojiSelector.value = configuracion[letra].emoji;
                    codigoEmoji.value = configuracion[letra].codigo;
                }
            };

            lector.readAsText(archivo);
        }
    });

    // Simula un clic en el input de archivo
    inputArchivo.click();
}
function pegarDesdePortapapeles() {
    navigator.clipboard.readText().then(function (clipboardText) {
        // Obtener el elemento de textarea
        var textarea = document.getElementById("entrada");

        // Pegar el texto del portapapeles en el textarea
        textarea.value = clipboardText;
    }).catch(function (err) {
        console.error('Error al leer el portapapeles: ', err);
    });
}
function copiarAlPortapapeles() {
    // Obtener el elemento de textarea
    var textareaSalida = document.getElementById("salida");

    // Copiar el texto del textarea al portapapeles
    navigator.clipboard.writeText(textareaSalida.value).then(function () {
        console.log('Texto copiado al portapapeles');
    }).catch(function (err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
