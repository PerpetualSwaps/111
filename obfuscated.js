let x = 0;
let y = 0;
let spacing
let circleSize= 300

let _bgArray = ['100,155']


function setup() {  
    spacing = random(5,60) 
    let colorPickerR = random(130) 
    let colorPickerB = random(130)
    let colorPickerG = random(130) 
    createCanvas(1000, 1000)
    background(colorPickerR,colorPickerB,colorPickerG)
    stroke(colorPickerG-50,colorPickerB-50,colorPickerR-50)
    //noFill()
    fill(colorPickerB+80,colorPickerB+80,colorPickerR+80, random(1))
}


function draw() {
    backgroundDeterminant = random(1);
    for(i=0;i<floor(random(400,600));i++){
        
        if(backgroundDeterminant<0.20){
            strokeWeight(random(1,7))
            line(x,y,x+spacing,y+spacing)
        } else{
            strokeWeight(random(1,7))
            //stroke(0,0,random(100,200))
            line(x,y+spacing,x+spacing,y)
        }

        x=x+spacing
        if(x>width){
            x=0;
            y=y+spacing
        }
        }
    
    shapeDeterminant = random(1);
    
    //Draw shapes based on probabilities
    for(i=0;i<floor(random(16,200));i++){
        //CIRCLES
        if(shapeDeterminant<0.33){
            ellipse(width/2+(random(-10,10)),height/2,noise(circleSize)*(random(800,1200)),noise(circleSize)*(random(800,1200)))
            circleSize+=10
            strokeWeight(random(0.6,1.5))
        
        }

        //SQUARE
        else if(shapeDeterminant>=0.33 && shapeDeterminant <0.66){

            rect(width/2,height/2,noise(circleSize)*(random(800,1200)),noise(circleSize)*(random(800,1200)))
            circleSize+=10
            strokeWeight(random(0.6,1.5))
        }

        //TRIANGLE
        else {
            triangle(width/3,height/3,noise(width/1.5)*(random(800,1200)),noise(height)*(random(800,1200)),width/3,height )
            circleSize+=10
            strokeWeight(random(0.6,1.5))
        }
        }

        

        // ellipse(width/2,height/2,noise(circleSize)*(random(800,1200)),noise(circleSize)*(random(800,1200)))
        // circleSize+=10}
    
    filter(POSTERIZE, 1)
    noLoop()
    
}
