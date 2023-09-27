let winPoints = 0;
let numberPoints = 5;
let words = ['apple', 'pear', 'translate','strawbery', 'computer', 'software', 'hello world', 'phyton', 'europe', 'codewars', 'java script', 'github']
let wrongLetters = [];
let correctLetters = [];

function compChoose() {
    compChoosen = words[Math.floor(Math.random() * words.length)];
}


function converter(wordx) {
    tireler = []
    for (let i of wordx) {
        if (correctLetters.includes(i)) {
            tireler.push(i)
        } else if (i == " ") {
            tireler.push(`&nbsp;`)
        }
        else {
            tireler.push("-")
        }
    }
    newWord = tireler.join(" ")
    word.innerHTML = `${newWord}`
    return word
}

numbers = (x) => {
    newNum = numberPoints + x.length
    number.innerHTML = `${newNum}`
}


window.addEventListener('keyup', (e) => {
    if (wrongLetters.includes(e.key) || correctLetters.includes(e.key)) {
        return 0;
    }
    if (!compChoosen.includes(e.key) && newNum > 0) {
        wrongLetters.push(e.key)
        newNum -= 1
        number.innerHTML = `${newNum}`
        array.innerHTML = `${wrongLetters}`
        if (newNum < 0) {
            wrongLetters = []
            correctLetters = []
            array.innerHTML = `${wrongLetters}`
            compChoose()
            converter(compChoosen)
            numbers(compChoosen)
        };
    } else if (compChoosen.includes(e.key) && newNum > 0) {
        correctLetters.push(e.key)
        newNum -= 1
        number.innerHTML = `${newNum}`
        converter(compChoosen)
        if (!tireler.includes("-")) {
            wrongLetters = []
            correctLetters = []
            winPoints++
            win.innerHTML = `${winPoints}`
            compChoose()
            converter(compChoosen)
            numbers(compChoosen)
        };
    } else if (compChoosen.includes(e.key) && newNum <= 0) {
        wrongLetters = []
        correctLetters = []
        array.innerHTML = `${wrongLetters}`
        compChoose()
        converter(compChoosen)
        numbers(compChoosen)
    } else if (compChoosen.includes(e.key) && newNum == 0) {
        wrongLetters = []
        correctLetters = []
        array.innerHTML = `${wrongLetters}`
        compChoose()
        converter(compChoosen)
        numbers(compChoosen)
    }
    ;
})

compChoose()
converter(compChoosen)
numbers(compChoosen)