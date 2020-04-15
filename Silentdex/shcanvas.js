var vp = document.getElementById("shcanvashtml");
var paper = vp.getContext("2d");

var background = {
  url: "Images/background.jpg",
  loadOK: false
}
var pyramidhead = {
  url: "Images/Pyramid_Head.png",
  loadOK: false
};
var pointer = {
  url: "Images/pointer.png",
  loadOK: false
}
var pointer2 = {
  url: "Images/pointer2.png",
  loadOK: false
}

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadbackground);

pyramidhead.image = new Image();
pyramidhead.image.src = pyramidhead.url;
pyramidhead.image.addEventListener("load", loadpyramidhead);

pointer.image = new Image();
pointer.image.src = pointer.url;
pointer.image.addEventListener("load", loadpointer);

pointer2.image = new Image();
pointer2.image.src = pointer2.url;
pointer2.image.addEventListener("load", loadpointer2);


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
function loadpointer()
{
  pointer.loadOK = true;
  draw();
}
function loadpointer2()
{
  pointer2.loadOK = true;
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
  if(background.loadOK)
  {
    paper.drawImage(pointer.image, 180, 100);
  }
  if(background.loadOK)
  {
    paper.drawImage(pointer2.image, 180, 320);
  }
  paper.font = "30px Arial";
  paper.fillStyle = "red";
  paper.textAlign = "center";
  paper.fillText("Pyramid Head", vp.width/5, vp.height/2);
  paper.font = "30px Arial";
}
