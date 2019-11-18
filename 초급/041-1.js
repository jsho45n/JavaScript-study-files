let value = "바깥값";
if (true) {
    console.log(value);
    let value = "연속값";
}

/*


결과

Uncaught ReferenceError: value is not defined


*/