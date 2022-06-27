let arr1 = [1, 9, 2, 3, 9, 5, 7];
let arr2 = [0, 4, 4, 4, 9, 2, 1];
let arr3 = [-2, -2, -1];
let arr4 = [0, 0, 0];
let count = 0;

for (let index = 0; index < arr1.length; index += 1) {
    if ( arr1[index] === Math.max(...arr1) ) {
        count += 1;
    }
}
console.log(count);

