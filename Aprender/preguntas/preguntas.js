const { createApp, reactive } = Vue


///////////////////////////////
// Funcion de Matematicas    //
//////////////////////////////
function matematicas() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Cuánto es 2 + 2?', respuesta: '4', opciones: ['1', '3', '4', '5'] },
                    { pregunta: '¿Cuánto es 3 + 2?', respuesta: '5', opciones: ['4', '5', '6', '7'] },
                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosMatematicas', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Matemáticas</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
                <p>Puntuación: {{ state.puntos }}</p>
            </div>
        `
    });
    app.mount('#app');
}


////////////////////////////
///       Lengua         ///
////////////////////////////


function lengua() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Cuánto es 2 + 2?', respuesta: '4', opciones: ['1', '3', '4', '5'] },
                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosLengua', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Lenguaje</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
                <p>Puntuación: {{ state.puntos }}</p>
            </div>
        `
    });
    app.mount('#app');
}

/////////////////
/// Geografia ///
/////////////////

function geografia() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Algunas Personas Consideran que hay seis continentes ?', respuesta: 'si', opciones: ['si', 'no'] },
                    { pregunta: '¿Qué es un mapa?', respuesta: 'es una representacion planade la Tierra o de una parte de ella', opciones: ['es una representacion planade la Tierra o de una parte de ella', 'No es nada'] },
                    { pregunta: '¿Cuál es el océano más grande?', respuesta: 'Océano Pacífico', opciones: ['Océano Pacífico', 'Oceano Azul', 'America', 'El Sol'] },

                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosGeografia', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Geografia</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
                <p>Puntuación: {{ state.puntos }}</p>
            </div>
        `
    });
    app.mount('#app');
}