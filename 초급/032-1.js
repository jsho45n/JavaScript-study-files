var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;
console.log(`0) b >>>${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);

/*

0) b >>>1

0) c >>> 2

0) rest >>> 30,44,5

1) a >>> 1

1) f >>> 9

2) a >>> 9

2) f >>> 1

3) a >>> 1

3) f >>> 6

*/