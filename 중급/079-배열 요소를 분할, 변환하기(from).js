const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

const modifedArr = Array.from(distributeArr, el => el * 2);
console.log(modifedArr);
