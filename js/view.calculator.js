import {keyPressed, } from './keys-controller.js';

export const calculatorView = () => {
    //Container principal
    const container = document.querySelector("#container");
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator-container");

    //Display component
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.value = "0";
    display.readOnly = true;

    //Display wrapper
    const calculatorDisplay = document.createElement("div");
    calculatorDisplay.classList.add("calculator-display");
    calculatorDisplay.append(display);


    function createCalculatorKey(key) {
        const calculatorKey = document.createElement("button");
        calculatorKey.classList.add("calculator-key");
        calculatorKey.id = key;
        calculatorKey.innerHTML = key;
        calculatorKey.addEventListener("click", keyPressed);

        return calculatorKey;
    }

    function columnCreator(keys) {
        let calculatorKeysColumn = document.createElement("div");
        calculatorKeysColumn.classList.add("calculator-keys-column");
        keys.forEach(key => {
            calculatorKeysColumn.append(key)
        })

        return calculatorKeysColumn;
    }    
    
    //Keys section
    const functionKeys = ["AC", "+/-", "%", "&#8592"].map(key => createCalculatorKey(key));
    const firstColumn = [7, 4, 1, 0].map(key => createCalculatorKey(key));
    const secondColumn = [8, 5, 2, '.'].map(key => createCalculatorKey(key));
    const thirdColumn = [9, 6, 3, '='].map(key => createCalculatorKey(key));
    const operatorsColumn = ["+", '-', "*", '/'].map(key => createCalculatorKey(key));

    // Column of keys
    const functionKeysColumn = columnCreator(functionKeys);
    const firstKeysColumn = columnCreator(firstColumn);
    const secondKeysColumn = columnCreator(secondColumn);
    const thirdKeysColumn = columnCreator(thirdColumn);
    const operatorsKeysColumn = columnCreator(operatorsColumn);

    //Keys wrapper
    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(functionKeysColumn, firstKeysColumn, secondKeysColumn, thirdKeysColumn, operatorsKeysColumn);

    //Add display and key's wrapper to calculator container and append to container
    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);
};