const inputText = document.querySelector('#enteredText');
const input = document.querySelector('input');
const outputSpan = document.querySelector('span');

function countLength() {
    let wordLength = inputText.value.length;
        console.log(wordLength);
      return outputSpan.innerText = wordLength;
}

input.addEventListener('input',countLength)


       
   