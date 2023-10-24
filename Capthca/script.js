function generateWords() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const wordLength = 10; // You can change the length as needed
    const generatedWords = [];

    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            const word = alphabet[i] + numbers[j];
            generatedWords.push(word);
        }
    }

    return generatedWords;
}

const words = generateWords();
let currentWordIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let startTime = 0;

function updateWordDisplay() {
    document.getElementById("wordDisplay").textContent = words[currentWordIndex];
}

function checkInput() {
    const inputField = document.getElementById("inputField");
    const input = inputField.value;
    const currentWord = words[currentWordIndex];

    if (currentWord.startsWith(input)) {
        inputField.style.borderColor = "green";
        if (input === currentWord) {
            correctCount++;
            currentWordIndex++;
            inputField.value = "";
            if (currentWordIndex >= words.length) {
                currentWordIndex = 0;
            }
            updateWordDisplay();
        }
    } else {
        inputField.style.borderColor = "red";
        incorrectCount++;
    }

    if (startTime === 0) {
        startTime = new Date().getTime();
    }

    const elapsedTime = (new Date().getTime() - startTime) / 1000 / 60;
    const wpm = Math.round((correctCount / elapsedTime) * 60);

    document.getElementById("correctCount").textContent = correctCount;
    document.getElementById("incorrectCount").textContent = incorrectCount;
    document.getElementById("wpm").textContent = wpm;
}

updateWordDisplay();
