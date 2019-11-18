const teacherJay = {
    name: '제이',
    age: 30,
    teacherJavaScript: function (student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function () {
        this.exp++;
    }
}
console.log(studentBbo.exp);
teacherJay.teacherJavaScript(studentBbo);
console.log(studentBbo.exp);

/* 결과
0
1
*/
