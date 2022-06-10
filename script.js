const ac = document.querySelector('.ac');
const displayCalcs = document.querySelector('.history');

const dot = document.querySelector('.dot');

const numbers = document.querySelector('.numbers');
const side = document.querySelector('.side');

const compute = document.querySelector('.compute');
const mathOperation = (document.querySelector('.compute').value = 0);

let operation = [];
let operationsDone;

ac.addEventListener('click', function () {
  compute.value = 0;
  operation = [];
});

numbers.addEventListener('click', function (e) {
  if (operation[1] === undefined) {
    if (compute.value === '0') {
      operation[0] = e.target.textContent;

      compute.value = operation[0];
    } else if (operation[0] !== '0' && operation[1] === undefined) {
      compute.value = operation[0] + e.target.textContent;
      operation[0] = compute.value;
    }
  } else {
    if (operation[2] === undefined) {
      operation[2] = e.target.textContent;
      compute.value = operation[0] + operation[1] + e.target.textContent;
    } else {
      operation[2] = operation[2] + e.target.textContent;
      compute.value = operation[0] + operation[1] + operation[2];
    }
  }
});

side.addEventListener('click', function (e) {
  if (e.target.textContent !== '=') {
    operation[1] = e.target.textContent;
    compute.value = operation[0] + operation[1];
    operationsDone = '';
  } else {
    const current = operator(Number(operation[0]), Number(operation[2]));
    compute.value = current;
    operationsDone =
      operation[0] +
      operation[1] +
      operation[2] +
      '=' +
      operator(Number(operation[0]), Number(operation[2]));
    operation = [current, undefined, undefined];
  }
});

side.addEventListener('click', function (e) {
  if (e.target.textContent === '=') {
  }

  const html = `<p class="calc">${operationsDone}</p>`;
  displayCalcs.insertAdjacentHTML('afterend', html);
});

const operator = function (par1, par2) {
  switch (operation[1]) {
    case '+':
      return par1 + par2;
    case '-':
      return par1 - par2;
    case '*':
      return par1 * par2;
    case '/':
      return par1 / par2;
  }
};
