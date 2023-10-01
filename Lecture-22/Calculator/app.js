const keyPad = document.getElementById('keypad');
const inp = document.getElementById('inp');

keyPad.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const buttonText = e.target.innerText;

    if (buttonText === "C") {
        inp.value = "";
    }
    else if (buttonText === '=') {
        try {
            inp.value = eval(inp.value); 
        } catch (e) {
            inp.value = "Invalid Expression";
        }
    }
    else {
        inp.value += buttonText;   
    }
})