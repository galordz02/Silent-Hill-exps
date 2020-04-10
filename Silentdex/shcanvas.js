var vp = document.getElementById("shcanvashtml");
var paper = vp.getContext("2d");

var background = {
  url: "background.jpg",
  loadOK: false
}
var valtiel = {
  url: "valtiel.png",
  loadOK: false
};

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadbackground);

valtiel.image = new Image();
valtiel.image.src = valtiel.url;
valtiel.image.addEventListener("load", loadvaltiel);

function loadbackground()
{
  background.loadOK = true;
  draw();
}
function loadvaltiel()
{
  valtiel.loadOK = true;
  draw();
}

function draw()
{
  if(background.loadOK)
  {
    paper.drawImage(background.image, 0, 0);
  }
  if(background.loadOK)
  {
    paper.drawImage(valtiel.image, 0, 0);
  }
}
