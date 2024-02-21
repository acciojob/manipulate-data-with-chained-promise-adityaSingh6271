//your JS code here. If required.
function processData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

function filterOutOddNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = array.filter(number => number % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbersByTwo(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = array.map(number => {
        if (number % 2 === 0) {
          return number * 2;
        } else {
          return number;
        }
      });
      resolve(multipliedArray);
    }, 2000);
  });
}

const inputArray = [1, 2, 3, 4];

processData(inputArray)
  .then(filterOutOddNumbers)
  .then(multiplyEvenNumbersByTwo)
  .then(resultArray => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = resultArray.join(", ");
  });
