var vp = document.getElementById("Silentdexhtml");
var paper = vp.getContext("2d");
var images = [];
images[0] = "Pyramid_Head.png";
images[1] = "Abstract_Daddy.png";


class Silentmon
{
  constructor(a, u, x, y)
  {
    this.name = a;
    this.number = u;
    this.xposition = x;
    this.yposition = y;
    this.image = new Image();
    this.image.src = images[this.number];
  }

draw()
    {
      paper.drawImage(this.image,this.xposition, this.yposition);
      paper.font = "30px Arial";
      paper.fillStyle = "red";
      paper.textAlign = "center";
      paper.fillText(this.name, vp.width/5, vp.height/2);
    }
}



var collection = [];
collection.push(new Silentmon("Pyramid Head", 0, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 1, 600, 300));

for (var i = 0; i < 9; i++) {
  collection[0].draw();
  console.log("smn");
}
