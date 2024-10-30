function checkAnswers() {
    const answers = {
        question1: 'virus',
        question2: 'lan',
        question3: 'internet'
    };

    let allCorrect = true;

    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = document.getElementById(question).value.trim().toLowerCase();
        const hint = document.getElementById(`hint${question.slice(-1)}`);
        if (userAnswer !== answer) {
            hint.style.display = 'block';
            allCorrect = false;
        } else {
            hint.style.display = 'none';
        }
    }

    if (allCorrect) {
        document.getElementById('congrats').style.display = 'block';
    }
}

/**
 * La función `checkAnswers` verifica las respuestas proporcionadas por el usuario en un formulario de preguntas.
 * 
 * Primero, define un objeto `answers` que contiene las respuestas correctas para cada pregunta.
 * 
 * Luego, inicializa una variable `allCorrect` en `true`, que se usará para determinar si todas las respuestas son correctas.
 * 
 * Utiliza un bucle `for...of` para iterar sobre las entradas del objeto `answers`.
 * 
 * En cada iteración, desestructura el par `[question, answer]` y obtiene la respuesta del usuario desde el DOM.
 * 
 * La respuesta del usuario se convierte a minúsculas y se recortan los espacios en blanco.
 * 
 * Luego, obtiene el elemento de pista correspondiente usando `document.getElementById`.
 * 
 * Si la respuesta del usuario no coincide con la respuesta correcta, muestra la pista y establece `allCorrect` en `false`.
 * 
 * Si la respuesta es correcta, oculta la pista.
 * 
 * Después del bucle, si todas las respuestas son correctas (`allCorrect` es `true`), muestra una felicitación.
 */
