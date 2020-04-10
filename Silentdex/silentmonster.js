class Silentmon
{
  constructor(a, u, x, y)
  {
    this.image = new Image();
    this.name = a;
    this.number = u;
    this.xposition = x;
    this.tposition = y;
    this.image.src = images[this.number];
  }

  show()
  {
    document.body.appendChild(this.image);
    document.write("<br /><strong>" + this.name + "</strong><br />");
    document.write("Number: " + this.number + "<br />");
  }
}
