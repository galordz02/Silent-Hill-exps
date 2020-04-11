var vp = document.getElementById("Silentdexhtml");
var paper = vp.getContext("2d");

class Silentmon
{
  constructor(a, u, x, y)
  {
    this.image = new Image();
    this.name = a;
    this.number = u;
    this.xposition = x;
    this.yposition = y;
    this.image.src = images[this.number];
  }

draw()
    {
      paper.drawImage(this.image,this.xposition, this.yposition);
    }
}



var images = [];
images[0] = "Pyramid_Head.png";
images[1] = "Abstract_Daddy.png";

var collection = [];
collection.push(new Silentmon("Pyramid Head", 0, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 1, 600, 120));

collection[0].draw();
collection[0].image.addEventListener("draw()", alert("smn"));
