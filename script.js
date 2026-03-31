function appendNumber(number) {
        const resultElement = document.getElementById('result');
        if (resultElement.textContent === '0') {
            resultElement.textContent = number;
        } else {
            resultElement.textContent += number;
        }
    }
    function appendOperator(operator) {
        const resultElement = document.getElementById('result');
        resultElement.textContent += operator;
    }

    function appendDecimal() {
        const resultElement = document.getElementById('result');
        resultElement.textContent += "."
    }

    function calculate() {
        const resultElement = document.getElementById('result')
        const result = eval(resultElement.textContent);
        resultElement.textContent = result;
    }

    function clearResult() {
        const resultElement = document.getElementById('result');
        resultElement.textContent = " "
    } 