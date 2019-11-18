hello();
function hello() {
    console.log("안녕하세요");
}

hello2();
var hello2 = function () {
    console.log("안녕하세요");
}



/* 결과
안녕하세요
*/

/* 결과
// Uncaught TypeError: hello is not a function
*/
