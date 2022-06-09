const ac = document.querySelector('.ac');

const dot = document.querySelector('.dot');

const numbers = document.querySelector('.numbers');
const side = document.querySelector('.side');

const compute = document.querySelector('.compute');
const mathOperation = (document.querySelector('.compute').value = 0);

let firstNumber = '0';
let operator;
let secondNumber = '0';

ac.addEventListener('click', function () {
  compute.value = 0;
  firstNumber = undefined;
  operator = undefined;
  secondNumber = undefined;
  console.log(firstNumber, operator, secondNumber);
});

numbers.addEventListener('click', function (e) {
  // console.log(e.target.textContent);

  if (compute.value === '0') {
    compute.value = e.target.textContent;
    firstNumber = e.target.textContent;
  } else if (firstNumber !== '0' && operator === undefined) {
    compute.value = firstNumber + e.target.textContent;
    firstNumber = compute.value;
    console.log(firstNumber);
  } else if (
    firstNumber !== '0' &&
    operator !== undefined &&
    secondNumber === '0'
  ) {
    compute.value = firstNumber + ' ' + operator + ' ' + e.target.textContent;
    secondNumber = e.target.textContent;
  } else if (
    firstNumber !== '0' &&
    operator !== undefined &&
    secondNumber !== '0'
  ) {
    compute.value =
      firstNumber + ' ' + operator + ' ' + secondNumber + e.target.textContent;
    secondNumber = compute.value;
  }
});

side.addEventListener('click', function (e) {
  if (operator === undefined) {
    compute.value = firstNumber + ' ' + e.target.textContent;
    operator = e.target.textContent;
    console.log(operator);
  } else {
    console.log('note clickbel');
  }
});
