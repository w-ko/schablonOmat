(function () {
    'use strict';
    let inputs = document.querySelectorAll('input, select');

    inputs.forEach(function(input) {
        input.addEventListener('input', createSentence);
    });
    
    let resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = '';
        });
        createSentence();
    });
    
    let copyButton = document.querySelector('#copy');
    copyButton.addEventListener('click', () => {
        let sentence = document.querySelector('#sentence');
        let range = document.createRange();
        range.selectNode(sentence);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        
        let tooltip = document.querySelector('#tooltip');
        tooltip.style.display = 'inline';
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 1250);
    });
})();

function createSentence() {
    let inputs = document.querySelectorAll('input, select');
    let sentence = '';

    inputs.forEach(input => {
        if (input.value) {
            sentence += input.value + ' ';
        }
    });

    document.querySelector('#sentence').textContent = sentence;
}
