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
      paper.drawImage(Silentmon.image, Silentmon.xposition, Silentmon.yposition);
    }
}
