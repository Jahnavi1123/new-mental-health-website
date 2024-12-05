document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault();

    // Get the answers and store them in an array
    let results = [];
    for (let i = 1; i <= 15; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            results.push(parseInt(selectedOption.value));
        } else {
            results.push(0); // No answer selected, push a default value (or handle this case differently)
        }
    }

    // Store results in localStorage
    localStorage.setItem('quizResults', JSON.stringify(results));

    // Redirect to result page
    window.location.href = "result.html";
};

// Progress Bar Logic
let currentQuestion = 1;
const totalQuestions = 15;
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    let percentage = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = percentage + "%";
}

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        currentQuestion++;
        updateProgressBar();
    });
});

updateProgressBar();
