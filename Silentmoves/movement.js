//vaca= Abstractdaddy
//cerdo= Pyramidhead
//pollo= Valtiel
var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");
var keys =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    V: 86,
    A: 65,
    P:80,
};
var background = {
    url: "background.jpg",
    cargaOk: false
};

var abstractdaddy = {
    url: "Abstract_Daddy.png",
    cargaOk: false
};

var valtiel = {
    url: "Valtiel.png",
    cargaOk: false
};

var pyramidhead = {
    url: "Pyramid_Head.png",
    cargaOk: false
};



xdaddy = randomize(0,420);
ydaddy = randomize(0,420);
xvaltiel = randomize(0,420);
yvaltiel = randomize(0,420);
xpyramid = randomize(0,420);
ypyramid = randomize(0,420);

document.addEventListener("keydown", elegirAnimal);
document.addEventListener("keydown", moverAnimal);

background.objeto = new Image();
background.objeto.src = background.url;
background.objeto.addEventListener("load", loadbackground);

abstractdaddy.objeto = new Image();
abstractdaddy.objeto.src = abstractdaddy.url;
abstractdaddy.objeto.addEventListener("load", loaddaddy)

pyramidhead.objeto = new Image();
pyramidhead.objeto.src = pyramidhead.url;
pyramidhead.objeto.addEventListener("load", loadpyramid);

valtiel.objeto = new Image();
valtiel.objeto.src = valtiel.url;
valtiel.objeto.addEventListener("load", loadvaltiel)

function loadbackground()
{
    background.cargaOk = true;
    draw();
}

function loaddaddy()
{
    abstractdaddy.cargaOk = true;
    draw();
}

function loadpyramid()
{
    pyramidhead.cargaOk = true;
    draw();
}

function loadvaltiel()
{
    valtiel.cargaOk = true;
    draw();
}

function draw()
{
    if(background.cargaOk)
    {
        paper.drawImage(background.objeto,0,0);
    }
    if(abstractdaddy.cargaOk)
    {
        paper.drawImage(abstractdaddy.objeto,xdaddy,ydaddy);
    }
    if(valtiel.cargaOk)
    {
        paper.drawImage(valtiel.objeto,xvaltiel,yvaltiel);
    }
    if(pyramidhead.cargaOk)
    {
        paper.drawImage(pyramidhead.objeto,xpyramid,ypyramid);
    }
}
var monster;
function elegirAnimal(evento)
{
    switch(evento.keyCode)
    {
        case keys.A:
            monster = "Abstractdaddy";
        break;
        case keys.P:
            monster = "Pyramidhead";
        break;
        case keys.V:
            monster = "Valtiel";
        break;
    }
}

function moverAnimal(evento)
{
    if(monster == "Pyramidhead")
    {
        switch(evento.keyCode)
        {
            case keys.DOWN:
                ypyramid = ypyramid + 10
                draw();
            break;
            case keys.UP:
                ypyramid = ypyramid - 10
                draw();
            break;
            case keys.LEFT:
                xpyramid = xpyramid - 10
                draw();
            break;
            case keys.RIGHT:
                xpyramid = xpyramid + 10
                draw();
            break;
        }
    }
    else if(monster == "Valtiel")
    {
        switch(evento.keyCode)
        {
            case keys.DOWN:
                yvaltiel = yvaltiel + 10
                draw();
            break;
            case keys.UP:
                yvaltiel = yvaltiel - 10
                draw();
            break;
            case keys.LEFT:
                xvaltiel = xvaltiel - 10
                draw();
            break;
            case keys.RIGHT:
                xvaltiel = xvaltiel + 10
                draw();
            break;
        }
    }
    else if(monster == "Abstractdaddy")
    {
        switch(evento.keyCode)
        {
            case keys.DOWN:
                ydaddy = ydaddy + 10
                draw();
            break;
            case keys.UP:
                ydaddy = ydaddy - 10
                draw();
            break;
            case keys.LEFT:
                xdaddy = xdaddy - 10
                draw();
            break;
            case keys.RIGHT:
                xdaddy = xdaddy + 10
                draw();
            break;
        }
    }
}

function randomize(min,max)
{
    var r
    r=Math.floor(Math.random()*(max-min+1))+min;
    return r;
}
