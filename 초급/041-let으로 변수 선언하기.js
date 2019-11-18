if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue); //global
console.log(blockScopeValue); //RefrenceError


/* 결과

global
Uncaught ReferenceError: blockScopeValue is not defined

*/
