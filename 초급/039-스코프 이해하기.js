var a = 10;
console.log(a);

function print() {
    var b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);

/* 결과

10
30
ReferenceError: b is not defined

*/
