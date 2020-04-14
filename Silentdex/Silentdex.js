var vp = document.getElementById("Silentdexhtml");
var paper = vp.getContext("2d");
var images = [];
images[0] = "Pyramid_Head.png";
images[1] = "Abstract_Daddy.png";
var images2 =[];
images2[0] = "background.jpg"
images2[1] = "pointer.png"
images2[2] = "pointer2.png"


class OtherImage
{
  constructor(n, x, y)
  {
    this.number = n
    this.xposition = x;
    this.yposition = y;
    this.image = new Image();
    this.image.src = images2[this.number]
  }

  draw2()
  {
    paper.drawImage(this.image,this.xposition, this.yposition);

  }
}



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
      collection2[0].draw2();
      collection2[1].draw2();
      collection2[2].draw2();
      paper.drawImage(this.image,this.xposition, this.yposition);
      paper.font = "30px Arial";
      paper.fillStyle = "red";
      paper.textAlign = "center";
      paper.fillText(this.name, vp.width/5, vp.height/2);

    }
}

var collection2 = [];
collection2.push(new OtherImage(0, 0, 0));
collection2.push(new OtherImage(1, 180, 100));
collection2.push(new OtherImage(2, 180, 320));


var collection = [];
collection.push(new Silentmon("Pyramid Head", 0, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 1, 600, 300));
