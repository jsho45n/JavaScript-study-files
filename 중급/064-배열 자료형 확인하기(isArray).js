function callRoll(students) {
    if (!Array.isArray(students)) return;

    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ail', 'Murry', 'Toby'];
callRoll(students);
