let result = document.getElementById('result');

let button = document.querySelectorAll("button")
let resultValue = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            resultValue += buttonText;
            result.value = resultValue;
        }
        else if (buttonText == 'AC') {
            resultValue = '';
            result.value = resultValue;
        }
        else if (buttonText == '=') {

            result.value = eval(resultValue);
            resultValue=result.value
        }
        else if (buttonText == 'C') {
            let inputArray = new String(resultValue);
            resultValue = inputArray.slice(0, inputArray.length - 1);
            result.value = resultValue;
        }
        else {
            resultValue += buttonText;
            result.value = resultValue;
        }
    })
}
