var vp = document.getElementById("shcanvashtml");
var paper = vp.getContext("2d");

var background = {
  url: "background.jpg",
  loadOK: false
}
var valtiel = {
  url: "Valtiel.png",
  loadOK: false
};
var abstractdaddy = {
  url: "Abstract_Daddy.png",
  loadOK: false
};
var pyramidhead = {
  url: "Pyramid_Head.png",
  loadOK: false
};

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadbackground);

valtiel.image = new Image();
valtiel.image.src = valtiel.url;
valtiel.image.addEventListener("load", loadvaltiel);

abstractdaddy.image = new Image();
abstractdaddy.image.src = abstractdaddy.url;
abstractdaddy.image.addEventListener("load", loadabstractdaddy);

pyramidhead.image = new Image();
pyramidhead.image.src = pyramidhead.url;
pyramidhead.image.addEventListener("load", loadpyramidhead);


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
function loadabstractdaddy()
{
  abstractdaddy.loadOK = true;
  draw();
}
function loadpyramidhead()
{
  pyramidhead.loadOK = true;
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
    paper.drawImage(valtiel.image, 500, 120);
  }
  if(background.loadOK)
  {
    paper.drawImage(abstractdaddy.image, 250, 130);
  }
  if(background.loadOK)
  {
    paper.drawImage(pyramidhead.image, 0, 0);
  }
}
