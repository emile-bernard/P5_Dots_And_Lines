function setup(){
    createCanvas(windowWidth, windowHeight);
    background(color(random(255),random(255),random(255)));
    noLoop();

    let generateButton = createButton('Generate Pattern');
    generateButton.style('background-color', '#ffffff');
    generateButton.style('text-color', '#000000');
    generateButton.position(40, 20);
    generateButton.mousePressed(function() {
        clear();
        background(color(random(255),random(255),random(255)));
        redraw();
    });
}

function draw(){
    drawLines(20);
}

function drawLines(totalLineCount){
    for(let count=0; count<totalLineCount; count+=1) {
        let startX = random(0, windowWidth);
        let startY = random(50, windowHeight);
        let endX = random(0, windowWidth);
        let endY = random(50, windowHeight);

        stroke(color(random(255),random(255),random(255)));
        line(startX, startY, endX, endY);

        drawDots(startX, startY, endX, endY, random(8));
    }
}

function drawDots(lineStartX, lineStartY, lineEndX, lineEndY, totalDotCount){
    for(let count=0; count<=totalDotCount; count+=1) {
        let xPos = (lineEndX-lineStartX)*(count/totalDotCount)+lineStartX;
        let yPos = (lineEndY-lineStartY)*(count/totalDotCount)+lineStartY;
        let radius = random(20);

        noStroke();
        fill(color(random(255),random(255),random(255)));
        ellipse(xPos, yPos, radius);
    }
}