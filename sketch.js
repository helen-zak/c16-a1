
var box1, box2, box3;


function setup() {
  createCanvas(600, 400);
  box1=new Box()
  box2=new Box()
  box3=new Box()
}

function draw() {
  background(220);
  fill("green")
  box1.show()
  fill("red")
  box2.show()
  fill("yellow")
  box3.show()
  box1.move(2)
  box2.move(1)
  box3.move(0.5)
  

}

