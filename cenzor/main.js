let badWords = document.querySelector('.bad-words');
const ENTER = document.querySelector('.enter');
const ADD_BTN = document.querySelector('.add-btn');
const RESET_BTN = document.querySelector('.reset-btn');
let arrBad = ['Java', 'Tottenham'];
badWords.textContent = arrBad.join();
ADD_BTN.addEventListener('click', () => {
    if (ENTER.value != '') {
        arrBad.push(ENTER.value);
        badWords.textContent = arrBad.join();
        ENTER.value = '';
        ENTER.style.borderColor = "";
        ENTER.placeholder = "word here..";
    }
    else {
        ENTER.style.borderColor = "red";
        ENTER.placeholder = "Please write a word!";
    }
});
const TEXTAREA = document.querySelector('.textarea');
const CENZOR_BTN = document.querySelector('.cenzor-btn');
CENZOR_BTN.addEventListener('click', () => {
    if (TEXTAREA.value != '') {
        let arrCheck = TEXTAREA.value.split(' ');
        for (let i = 0; i < arrCheck.length; i++) {
            for (let j = 0; j < arrBad.length; j++) {
                if (arrCheck[i] == arrBad[j]) {
                    arrCheck[i] = '*'.repeat(arrCheck[i].length);
                }
            }
        }
        TEXTAREA.value = arrCheck.join(' ');
        TEXTAREA.style.borderColor = "";
        TEXTAREA.placeholder = "text here..";
    }
    else {
        TEXTAREA.placeholder = "Please write a text!";
        TEXTAREA.style.borderColor = "red";
    }
});
RESET_BTN.addEventListener('click', () => {
    TEXTAREA.value = '';
    ENTER.value = '';
    badWords.textContent = '';
    arrBad = [];
});
