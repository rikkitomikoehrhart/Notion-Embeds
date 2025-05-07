const buttons = document.querySelectorAll('.btn');
var currentTotal = 0;
let currentInput = '';
let expression = [];

function main() {
  setDisplay(currentTotal);
  buttonClicksStyle()

  math();
  
}


function math() {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.innerText;

      if (!isNaN(value) || value === '.') {
        currentInput += value;
        setDisplay(currentInput);
      } 
      else if (['+', '-', 'x', '÷'].includes(value)) {
        if (currentInput !== '') {
          expression.push(currentInput);
          currentInput = '';
        }

        if (['+', '-', 'x', '÷'].includes(expression[expression.length - 1])) {
          expression[expression.length - 1] = value;
        } else {
          expression.push(value);
        }

        setDisplay(expression.join(' '));
      } 
      else if (value === '=') {
        if (currentInput !== '') expression.push(currentInput);
        calculateResult();
      } 
      else if (value === 'AC') {
        currentInput = '';
        expression = [];
        setDisplay(0);
      }
      
      if (value === 'AC') {
        currentInput = '';
        expression = [];
        setDisplay(0);
      } else if (value === '+/-') {
        if (currentInput) {
          if (currentInput.startsWith('-')) {
            currentInput = currentInput.slice(1);
          } else {
            currentInput = '-' + currentInput;
          }
          setDisplay(currentInput);
        }
      }
      else if (value === '%') {
        if (currentInput) {
          currentInput = (parseFloat(currentInput) / 100).toString();
          setDisplay(currentInput);
        }
      }
    });
  });
}


function calculateResult() {
  let expString = expression.join(' ')
    .replace(/x/g, '*')
    .replace(/÷/g, '/');

  try {
    let result = eval(expString);
    setDisplay(result);
    // Reset for next round
    currentInput = result.toString();
    expression = [];
  } catch (err) {
    setDisplay('Error');
    currentInput = '';
    expression = [];
  }
}

function buttonClicksStyle() {
   buttons.forEach(btn => {
    btn.onmousedown = function() {
      this.classList.add('clicked')
    };
    btn.onmouseup = function() {
      this.classList.remove('clicked')
    }
  });
}

function setDisplay(num) {
  document.getElementById('show').innerHTML = num;
}


main();