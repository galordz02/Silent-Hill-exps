var vp = document.getElementById("shcanvashtml");
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

  show()
  {
    paper.drawImage(this.image, 0, 0);
  }
}
