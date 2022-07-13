export const keyPressed = (event) => {
    const pressedKey = event.target.innerHTML;    
    handleValidations(pressedKey);
};

function deleteOneCharacter() {
    pressedKeys.pop();
    updateView()
}

function solveExpression() {
    let result = eval(pressedKeys.join(''));
    pressedKeys = [];
    pressedKeys.push(result);
    updateView()
}

function handleValidations(pressedKey) {
    if (isNaN(parseInt(pressedKey))) {
        let lastItem = pressedKeys[pressedKeys.length - 1]

        if (isNaN(lastItem) && pressedKey !== '=') {
            return;
        }
    }

    if (pressedKey === "AC") {
        cleanDisplay()
        return
    }

    if (pressedKey === '=') {
        solveExpression();
        return;
    }

    if (pressedKey === '←') {
        deleteOneCharacter();
        return;
    }

    pressedKeys.push(pressedKey);

    updateView();
}

function cleanDisplay() {
    pressedKeys = [];
    updateView()
}

export const updateView = () => {
    const display = document.querySelector('#display');
    display.value = pressedKeys.join('');
}

let pressedKeys = [];