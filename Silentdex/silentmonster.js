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
