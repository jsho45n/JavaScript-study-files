const CONST_USER = { name: 'jay', age: '30' };
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = { name: 'bbo' }

/* 결과
jay 30
jay2 31
Uncaught TypeError : Assignment to constant variable.

*/
