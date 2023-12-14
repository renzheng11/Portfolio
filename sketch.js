// sketch.js
let cols, rows;
let w = 20;
let angle = 0;

function setup() {
    var canvas = createCanvas(windowWidth, 400, WEBGL);
    canvas.parent('canvas');
    // canvas.parent('canvas-container');
    // canvas.position(100, 100);
    cols = width / w;
    rows = height / w;
}

function draw() {
    background("#040404");
    fill("#040404");
    stroke("#F3BE57")
    rotateX(PI / 4);
    translate(-width / 2, -height / 2);

    let yOff = 0;

    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * w, y * w, map(noise(xOff, yOff), 0, 1, -100, 100));
            vertex(x * w, (y + 1) * w, map(noise(xOff, yOff + 0.1), 0, 1, -100, 100));
            xOff += 0.1;
        }
        yOff += 0.1;
        endShape();
    }

    // angle += 0.02;
}
