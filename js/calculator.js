
                    let display = document.getElementById("display");
                    let currentInput = "";
                    let operator = null;
                    let previousOperand = null;
                
                    function appendNumber(number) {
                      currentInput += number;
                      display.value = currentInput;
                    }
                
                    function appendOperator(op) {
                      if (currentInput !== "") {
                        previousOperand = parseFloat(currentInput);
                        operator = op;
                        currentInput = "";
                      }
                    }
                
                    function calculate() {
                      if (operator !== null && currentInput !== "") {
                        let currentOperand = parseFloat(currentInput);
                        switch (operator) {
                          case "+":
                            currentInput = previousOperand + currentOperand;
                            break;
                          case "-":
                            currentInput = previousOperand - currentOperand;
                            break;
                          case "*":
                            currentInput = previousOperand * currentOperand;
                            break;
                          case "/":
                            if (currentOperand === 0) {
                              alert("Деление на ноль!");
                              currentInput = "";
                              return;
                            }
                            currentInput = previousOperand / currentOperand;
                            break;
                        }
                        operator = null;
                        previousOperand = null;
                        display.value = currentInput;
                      }
                    }
                
                    function clearDisplay() {
                      currentInput = "";
                      operator = null;
                      previousOperand = null;
                      display.value = "";
                    }
                 