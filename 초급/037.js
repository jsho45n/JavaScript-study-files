function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();

/*
결과

100 X 400 차트를 그립니다.

200 X 400 차트를 그립니다.

300 X 150 차트를 그립니다.

200 X 100 차트를 그립니다.

*/