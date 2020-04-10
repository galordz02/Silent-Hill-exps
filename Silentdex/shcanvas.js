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

pyramidhead.image = new Image();
pyramidhead.image.src = pyramidhead.url;
pyramidhead.image.addEventListener("load", loadpyramidhead);


function loadbackground()
{
  background.loadOK = true;
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
    paper.drawImage(pyramidhead.image, 600, 120);
  }
  paper.font = "30px Arial";
  paper.fillStyle = "red";
  paper.textAlign = "center";
  paper.fillText("Pyramid Head", vp.width/5, vp.height/2);
  paper.font = "30px Arial";
}
