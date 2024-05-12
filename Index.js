var Input = document.getElementById("Calculate");
var buttons = document.querySelectorAll('button');
const operators = ["+", "-", "*", "/"];


document.addEventListener('DOMContentLoaded', function () {
    Calculate();
});

function Calculate() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var buttonContent = this.textContent;
            var LastCharacter = Input.value.charAt(Input.value.length - 1);
            var IsWrite = true;
            for (let i = 0; i < operators.length; i++) {
                if (Input.value === "" && operators[i] === buttonContent)
                    IsWrite = false;
                if (Input.value != "" && operators[i] == LastCharacter) {
                    for (let i = 0; i < operators.length; i++) {
                        if (operators[i] == buttonContent)
                            IsWrite = false;
                    }
                }
            }
            if (IsWrite) {
                switch (buttonContent) {
                    case "CE":
                        Input.value = "";
                        break;
                    case "=":
                        Input.value = eval(Input.value);
                        break;
                    default:
                        Input.value += buttonContent;
                }
            }
        }
        );
    }
}




