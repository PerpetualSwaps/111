let x=0x0,y=0x0,spacing,circleSize=0x12c;function setup(){spacing=random(0x5,0x3c);let _0x200f24=random(0x82),_0xe23194=random(0x82),_0x5d8a36=random(0x82);createCanvas(0x3e8,0x3e8),background(_0x200f24,_0xe23194,_0x5d8a36),stroke(_0x5d8a36-0x32,_0xe23194-0x32,_0x200f24-0x32),fill(_0xe23194+0x50,_0xe23194+0x50,_0x200f24+0x50,random(0x1));}function draw(){for(i=0x0;i<0x9f6;i++){backgroundDeterminant=random(0x1),backgroundDeterminant<0.2?(strokeWeight(random(0x1,0x7)),line(x,y,x+spacing,y+spacing)):(strokeWeight(random(0x1,0x7)),line(x,y+spacing,x+spacing,y)),x=x+spacing,x>width&&(x=0x0,y=y+spacing);}shapeDeterminant=random(0x1);for(i=0x0;i<random(0x32,0xc8);i++){if(shapeDeterminant<0.33)ellipse(width/0x2+random(-0xa,0xa),height/0x2,noise(circleSize)*random(0x320,0x4b0),noise(circleSize)*random(0x320,0x4b0)),circleSize+=0xa,strokeWeight(random(0.6,1.5));else shapeDeterminant>=0.33&&shapeDeterminant<0.66?(rect(width/0x2,height/0x2,noise(circleSize)*random(0x320,0x4b0),noise(circleSize)*random(0x320,0x4b0)),circleSize+=0xa,strokeWeight(random(0.6,1.5))):(triangle(width/0x3,height/0x3,noise(width/1.5)*random(0x320,0x4b0),noise(height)*random(0x320,0x4b0),width/0x3,height),circleSize+=0xa,strokeWeight(random(0.6,1.5)));}filter(POSTERIZE,0x1),noLoop();}