#!/usr/bin/env node
// file: calculator.js

const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

let result = `Solving ${num1} ${operation} ${num2}`;

// Implementation goes here
// if you get an error, exit with an error of 1 by calling process.exit(1);

if (operation == "add") {
  result = add(num1, num2);
} else {
  if (operation == "subtract") {
    result = subtract(num1, num2);
  } else {
    if (operation == "times") {
      result = times(num1, num2);
    } else {
      if (operation == "multiply") {
        result = times(num1, num2);
      } else {
        if (operation == "divide") {
          result = divide(num1, num2);
        } else {
          if (operation == "modulus") {
            result = modulus(num1, num2);
          } else {
            if (operation == "remainder") {
              result = modulus(num1, num2);
            } else {
              if (operation == "power") {
                result = power(num1, num2);
              }
            }
          }
        }
      }
    }
  }
}



console.log("result: ", result);
process.exit(0);
