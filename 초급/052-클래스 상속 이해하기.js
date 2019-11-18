class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log(drawline);
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super(width, height)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();

/* 결과
draw line
draw 100 X 100 barChart
*/
