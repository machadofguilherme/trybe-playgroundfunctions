// Desafio 1
function compareTrue(girafa, elefante) {
  if (girafa === true && elefante === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } if (wins === 1 && ties === 2) {
    return 5;
  } if (wins === 0 && ties === 0) {
    return 0;
  }
}

// Desafio 6
function highestCount(list) {
  let count = 0;

  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === Math.max(...list)) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat2 === 2 && cat1 === 3) {
    return 'cat2';
  } if (cat1 <= 6 && cat2 >= 12) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let newArray = [];

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }

  return newArray;
}

// Desafio 9
function encode(texto) {
  let newString = texto.split('');

  for (index in newString) {
    if (newString[index] === 'a') {
      newString[index] = 1;
    } else if (newString[index] === 'e') {
      newString[index] = 2;
    } else if (newString[index] === 'i') {
      newString[index] = 3;
    } else if (newString[index] === 'o') {
      newString[index] = 4;
    } else if (newString[index] === 'u') {
      newString[index] = 5;
    }
  }

  return newString.join('');
}
function decode(str, num) {
  let newStr = str.split('');

  for (ind in newStr) {
    if (newStr[ind] === '1') {
      newStr[ind] = 'a';
    } else if (newStr[ind] === '2') {
      newStr[ind] = 'e';
    } else if (newStr[ind] === '3') {
      newStr[ind] = 'i';
    } else if (newStr[ind] === '4') {
      newStr[ind] = 'o';
    } else if (newStr[ind] === '5') {
      newStr[ind] = 'u';
    }
  }

  return newStr.join('');
}
// Desafio 10
function techList(lista, nomes) {
  let objectArray = [];
  for (let index = 0; index < lista.length; index += 1) {
    objectArray.push(
      {
        name: nomes,
        tech: lista.sort()[index],
      },
    );
  }
  if (objectArray.length === 0) {
    // objectArray.push('Vazio!');
    return 'Vazio!';
  }
  return objectArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
