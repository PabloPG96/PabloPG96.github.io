/* Carrusel */
const carrusel = document.getElementById('carrusel');
const izq = document.getElementById('izq');
const der = document.getElementById('der');
const tarjeta1 = document.getElementById('tarjeta1');
const tarjeta5 = document.getElementById('tarjeta5');
const tarjeta4 = document.getElementById('tarjeta4');
const tarjeta2 = document.getElementById('tarjeta2');
const tarjeta3 = document.getElementById('tarjeta3');

const tarjetas = document.querySelectorAll('.tarjeta');

let currentIndex = 0;

    tarjeta1.style.visibility = 'visible';
    tarjeta5.style.visibility = 'visible';
    tarjeta1.style.display = 'none';
    tarjeta5.style.display = 'none';

    izq.addEventListener('click', () => {
        if (currentIndex > -1) {
            currentIndex--;
        } else {
            currentIndex = 1;
        }        
        updateDivVisibilityResponsive();          
        updateButtonState();
    });
    
    der.addEventListener('click', () => {
        if (currentIndex < carrusel.children.length - 4) {
            currentIndex++;
        } else {
            currentIndex = -1;
        }
        updateDivVisibilityResponsive();
        updateButtonState();
    });

    updateButtonState();


function showCard(card) {
    card.style.display = 'flex';
    requestAnimationFrame(() => {
        card.classList.remove('hidden');
    });
}

function hideCard(card) {
    card.classList.add('hidden');
    card.addEventListener('transitionend', function handleTransitionEnd(event) {
        if (event.propertyName === 'opacity' && card.classList.contains('hidden')) {
            card.style.display = 'none';
        }
        card.removeEventListener('transitionend', handleTransitionEnd);
    });
}

// Estilo CSS en línea para el desvanecimiento
const style = document.createElement('style');
style.innerHTML = `
    .tarjeta {
        transition: opacity 0.5s ease, visibility 0.5s ease;
        opacity: 1;
        visibility: visible;
    }

    .tarjeta.hidden {
        opacity: 0;
        visibility: hidden;
    }

    .disabled-button {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

document.head.appendChild(style);

function updateDivVisibilityResponsive() {    
    if (currentIndex === 0) {
        hideCard(tarjeta1);
        hideCard(tarjeta5);
        showCard(tarjeta2);
        showCard(tarjeta4);

    } else if (currentIndex === 1) {
        hideCard(tarjeta1);
        showCard(tarjeta5);
        hideCard(tarjeta2);
        showCard(tarjeta4);

    } else if (currentIndex === -1) {
        showCard(tarjeta1);
        hideCard(tarjeta5);
        showCard(tarjeta2);
        hideCard(tarjeta4);
    }
}

// Función para actualizar el estado de los botones
function updateButtonState() {
    if (currentIndex === -1) {
        izq.disabled = true;
        izq.classList.add('disabled-button');
    } else {
        izq.disabled = false;
        izq.classList.remove('disabled-button');
    }

    if (currentIndex === 1) {
        der.disabled = true;
        der.classList.add('disabled-button');
    } else {
        der.disabled = false;
        der.classList.remove('disabled-button');
    }
}

function selectCard(selectedCard) {
    tarjetas.forEach(card => {
        if (card === selectedCard) {
            card.classList.add('tarjetaSeleccionada');
        } else {
            card.classList.remove('tarjetaSeleccionada');
        }
    });
}

// Agregar evento de clic a todas las tarjetas
tarjetas.forEach(card => {
    card.addEventListener('click', () => {
        selectCard(card);
    });
});


/* 
 -------------------------------------------------------------------------------------------------
 Seleccion de servicio 
 -------------------------------------------------------------------------------------------------
 */

 const tarjetasS = document.querySelectorAll('.tarjeta-servicio');

 function selectCardS(selectedCard) {
    tarjetasS.forEach(card => {
        if (card === selectedCard) {
            card.classList.add('tarjeta-servicio-seleccionada');
        } else {
            card.classList.remove('tarjeta-servicio-seleccionada');
        }
    });
}

// Agregar evento de clic a todas las tarjetas
tarjetasS.forEach(card => {
    card.addEventListener('click', () => {
        selectCardS(card);
    });
});

/* 
 -------------------------------------------------------------------------------------------------
 Seleccion de citas 
 -------------------------------------------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', function() {
    const inputNumero1 = document.getElementById('fecha-cita1');
    const btnIncrementar1 = document.getElementById('incrementar1');
    const btnDecrementar1 = document.getElementById('decrementar1');

    const inputNumero2 = document.getElementById('fecha-cita2');
    const btnIncrementar2 = document.getElementById('incrementar2');
    const btnDecrementar2 = document.getElementById('decrementar2');

    const inputNumero3 = document.getElementById('fecha-cita3');
    const btnIncrementar3 = document.getElementById('incrementar3');
    const btnDecrementar3 = document.getElementById('decrementar3');

    btnIncrementar1.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = inputNumero1.value;
        if(numeroActual === 'AM')
        // Incrementamos el valor
        numeroActual='PM';
        else
        numeroActual='AM';
        // Actualizamos el valor del input
        inputNumero1.value = numeroActual;
    });
    btnDecrementar1.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = inputNumero1.value;
        if(numeroActual === 'AM')
        // Incrementamos el valor
        numeroActual='PM';
        else
        numeroActual='AM';
        // Actualizamos el valor del input
        inputNumero1.value = numeroActual;
    });

    btnIncrementar2.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = parseInt(inputNumero2.value);
        if(numeroActual!=12)
        // Incrementamos el valor
        numeroActual++;
        else
        numeroActual=0;
        // Actualizamos el valor del input
        inputNumero2.value = numeroActual;
    });

    btnDecrementar2.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = parseInt(inputNumero2.value);
        if(numeroActual!=0)
        // Decrementamos el valor
        numeroActual--;
        else
        numeroActual=12;
        // Actualizamos el valor del input
        inputNumero2.value = numeroActual;
    });


    btnIncrementar3.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = parseInt(inputNumero3.value);
        if(numeroActual!=59)
        // Incrementamos el valor
        numeroActual++;
        else
        numeroActual=0;
        // Actualizamos el valor del input
        inputNumero3.value = numeroActual;
    });

    btnDecrementar3.addEventListener('click', function() {
        // Obtenemos el valor actual del input como un número
        let numeroActual = parseInt(inputNumero3.value);
        if(numeroActual!=0)
        // Decrementamos el valor
        numeroActual--;
        else
        numeroActual=59;
        // Actualizamos el valor del input
        inputNumero3.value = numeroActual;
    });
});