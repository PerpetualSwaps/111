let x = 0;
let y = 0;
let spacing
let shapeSize = 300

function setup() {
    spacing = random(5, 60)
    let colorPickerR = random(130)
    let colorPickerB = random(130)
    let colorPickerG = random(130)
    createCanvas(1000, 1000)
    background(colorPickerR, colorPickerB, colorPickerG)
    stroke(colorPickerG - 50, colorPickerB - 50, colorPickerR - 50)
    //noFill()
    fill(colorPickerB + 80, colorPickerB + 80, colorPickerR + 80, random(7))
}


function draw() {
    backgroundTypeDeterminant = random(100); //determines background pattern type (one directional lines, 10print, etc )
    backgroundDirectionDeterminant = random(100);
    for (i = 0; i < floor(random(400, 2550)); i++) {

        //ONE DIRECTIONAL BACKGROUND  
        if (backgroundTypeDeterminant < 60) { //60 percent of time, background type is single lines
            if (backgroundDirectionDeterminant < 80) { //80 percent of time, lines are sloping from top left to bottom right
                strokeWeight(random(1, 7))
                line(x, y, x + spacing, y + spacing)
            } else {
                strokeWeight(random(1, 4))
                line(x, y + spacing, x + spacing, y)
            }
        } else if (backgroundTypeDeterminant >= 60 && backgroundTypeDeterminant < 90) { //30 percent of time, background type is 10Print pattern
            //ORIGINAL PATTERN
            if (random(1) < 0.9) {
                strokeWeight(random(1, 7))
                line(x, y, x + spacing, y + spacing)

            } else {
                strokeWeight(random(1, 7))
                line(x, y + spacing, x + spacing, y)
            }
        }

        //GRID BACKGROUND
        else if (backgroundTypeDeterminant >= 90 && backgroundTypeDeterminant < 100) { //10 perecent of time, background type is grid
            strokeWeight(random(1, 4))
            line(x, y, x + spacing, y + spacing)
            strokeWeight(random(1, 3))
            line(x, y + spacing, x + spacing, y)
        }

        x = x + spacing
        if (x > width) {
            x = 0;
            y = y + spacing
        }
    }

    shapeDeterminant = random(1);

    //Draw shapes based on probabilities
    for (i = 0; i < random(50, 200); i++) {
        //CIRCLES
        if (shapeDeterminant < 0.4) {
            ellipse(width / 2 + (random(-10, 10)), height / 2, noise(shapeSize) * (random(800, 1200)), noise(shapeSize) * (random(800, 1200)))
            shapeSize += 10
            strokeWeight(random(0.6, 1.5))

        }

        //SQUARE
        else if (shapeDeterminant >= 0.4 && shapeDeterminant < 0.8) {
            //common square pattern
            if (backgroundTypeDeterminant <= 80) {
                rect(width / 2, height / 2, noise(shapeSize) * (random(800, 1200)), noise(shapeSize) * (random(800, 1200)))
                shapeSize += 10
                strokeWeight(random(0.6, 1.5))
            } else {
                //rarer square pattern
                rect((width / 2) + (floor(random(-500, 0))), (height / 2) + (floor(random(-500, 0))), noise(shapeSize) * (random(800, 1200)), noise(shapeSize) * (random(800, 1200)))
                shapeSize += 10
                strokeWeight(random(0.6, 1.5))
            }
        }

        //TRIANGLE
        else {
            triangle(width / 3, height / 3, noise(width / 1.5) * (random(800, 1200)), noise(height) * (random(800, 1200)), width / 3, height)
            shapeSize += 10
            strokeWeight(random(0.6, 1.5))
        }
    }

    filter(POSTERIZE, 1)
    noLoop()

}
