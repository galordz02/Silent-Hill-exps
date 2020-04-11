var vp = document.getElementById("Silentdexhtml");
var paper = vp.getContext("2d");
var background = {
  url: "background.jpg",
  loadOK: false
}
  background.image = new Image();
  background.image.src = background.url;

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
      if(background.loadOK)
      {
        paper.drawImage(background.image, 0, 0);
      }
      if(background.loadOK)
      {
        paper.drawImage(this.image,this.xposition, this.yposition);
      }
      paper.font = "30px Arial";
      paper.fillStyle = "red";
      paper.textAlign = "center";
      paper.fillText(this.name, vp.width/5, vp.height/2);
      paper.font = "30px Arial";
    }
}



var images = [];
images[0] = "Pyramid_Head.png";
images[1] = "Abstract_Daddy.png";

var collection = [];
collection.push(new Silentmon("Pyramid Head", 0, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 1, 600, 300));
background.image.addEventListener("load", collection[1].draw());
