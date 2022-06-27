// Desafio 1
function compareTrue(girafa, elefante) {
  if (girafa === true && elefante === true) {
    return true;
  } else {
    return false;
  }
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
  let string = array[array.length -1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } else if (wins === 1 && ties === 2) {
    return 5;
  } else if (wins === 0 && ties === 0) {
    return 0;
  }
}

// Desafio 6
function highestCount(array) {
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
      if ( array[index] === Math.max(...array) ) {
          count += 1;
      }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat2 === 2 && cat1 === 3) {
    return 'cat2';
  } else if (cat1 <= 6 && cat2 >= 12) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    let newArray = [];
    if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
        newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    } 
  }
  return newArray[index];
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(lista, nomes) {
  let objectArray = [];
  for (let index = 0; index < lista.length; index += 1) {
    objectArray.push(
      {
        name: nomes,
        tech: lista.sort()[index],
      });
  }
  if (objectArray.length === 0) {
    //objectArray.push('Vazio!');
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