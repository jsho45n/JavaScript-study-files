var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');
var result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식 1"
) : (
        console.log("사망 연산식의 두 번째 표현식 입니다."),
        "표현식 2"
    );
console.log(result);

/*결과
Right
삼항 연산식의 두 번째 표현식 입니다.
표현식 2
*/
