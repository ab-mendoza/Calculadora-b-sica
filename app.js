function operation(type) {
    let numberOne = parseInt(document.getElementById('firstNumber').value);
    let numberTwo = parseInt(document.getElementById('secondNumber').value);
    let result;
    let displayResult = document.getElementById('displayResult');
    switch(type) {
        case 'suma':
            result = (numberOne + numberTwo);
            break;
        case 'resta':
            result = (numberOne - numberTwo);
            break;
        case 'multiplicación':
            result = (numberOne * numberTwo);
            break;
        case 'división':
            if (numberTwo == 0){
                displayResult.textContent = "No es posible dividir por cero.";
                return;
            } else {
                result = (numberOne / numberTwo).toFixed(2);
                break;
            }
    }
    displayResult = document.getElementById('displayResult');
    displayResult.textContent =`El resultado de la ${type} es: ${result}`;
}