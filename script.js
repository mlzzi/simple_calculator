'use strict';

const ac = document.querySelector('.ac');
const displayCalcs = document.querySelector('.history');

const dot = document.querySelector('.dot');

const topBar = document.getElementsByClassName('top_bar');
const numbers = document.getElementsByClassName('digit');
const side = document.getElementsByClassName('operator');

const compute = document.querySelector('.compute');
const mathOperation = (document.querySelector('.compute').value = 0);

let operation = [];
let operationsDone;

ac.addEventListener('click', function () {
  compute.value = 0;
  operation = [];
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function (e) {
    if (operation[1] === undefined) {
      if (compute.value === '0') {
        operation[0] = e.target.value;
        compute.value = operation[0];
      } else if (operation[0] !== '0' && !operation[1]) {
        compute.value = operation[0] + e.target.value;
        operation[0] = compute.value;
      }
    } else {
      if (operation[2] === undefined) {
        operation[2] = e.target.value;
        compute.value =
          operation[0] + ' ' + operation[1] + ' ' + e.target.value;
      } else {
        operation[2] = operation[2] + e.target.value;
        compute.value = operation[0] + ' ' + operation[1] + ' ' + operation[2];
      }
    }
  });
}

for (let i = 0; i < side.length; i++) {
  side[i].addEventListener('click', function (e) {
    if (
      e.target.value !== '=' &&
      e.target.value !== '*' &&
      e.target.value !== '/'
    ) {
      if (!operation[0]) {
        operation[0] = e.target.value;
        compute.value = operation[0];
        // } else if (!operation[0] && !operation[1]) {
        // operation[0] = operation[0] + e.target.value;
        // compute.value = operation[0];
        // operation[1] = undefined;
      } else if (operation[0] && !operation[1]) {
        operation[1] = e.target.value;
        compute.value = operation[0] + ' ' + operation[1];
        operationsDone = '';
      }
    } else if (e.target.value === '=') {
      // if (
      //   operation[0] === undefined ||
      //   operation[1] === undefined ||
      //   operation[2] === undefined
      // ) {
      //   console.log('no');
      // } else {
      const current = operator(Number(operation[0]), Number(operation[2]));
      compute.value = current;
      operationsDone =
        operation[0] +
        ' ' +
        operation[1] +
        ' ' +
        operation[2] +
        ' ' +
        ' ' +
        '=' +
        ' ' +
        operator(Number(operation[0]), Number(operation[2]));
      operation = [current, undefined, undefined];

      const html = `<p class="calc">${operationsDone}</p>`;
      displayCalcs.insertAdjacentHTML('beforeEnd', html);
    }
  });
}

for (let i = 0; i < topBar.length; i++) {
  topBar[i].addEventListener('click', function (e) {
    if (e.target.value === '+/-') {
      compute.value *= -1;
    }
  });
}

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
