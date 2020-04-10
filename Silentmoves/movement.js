//vaca= Abstractdaddy
//cerdo= Pyramidhead
//pollo= Valtiel
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    V: 86,
    A: 65,
    P:80,
};
var fondo = {
    url: "fondo.jpg",
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



xvaca = randomize(0,420);
yvaca = randomize(0,420);
xpollo = randomize(0,420);
ypollo = randomize(0,420);
xcerdo = randomize(0,420);
ycerdo = randomize(0,420);

document.addEventListener("keydown", elegirAnimal);
document.addEventListener("keydown", moverAnimal);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

abstractdaddy.objeto = new Image();
abstractdaddy.objeto.src = abstractdaddy.url;
abstractdaddy.objeto.addEventListener("load", cargarVacas)

pyramidhead.objeto = new Image();
pyramidhead.objeto.src = pyramidhead.url;
pyramidhead.objeto.addEventListener("load", cargarCerdo);

valtiel.objeto = new Image();
valtiel.objeto.src = valtiel.url;
valtiel.objeto.addEventListener("load", cargarPollo)

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    abstractdaddy.cargaOk = true;
    dibujar();
}

function cargarCerdo()
{
    pyramidhead.cargaOk = true;
    dibujar();
}

function cargarPollo()
{
    valtiel.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.objeto,0,0);
    }
    if(abstractdaddy.cargaOk)
    {
        papel.drawImage(abstractdaddy.objeto,xvaca,yvaca);
    }
    if(valtiel.cargaOk)
    {
        papel.drawImage(valtiel.objeto,xpollo,ypollo);
    }
    if(pyramidhead.cargaOk)
    {
        papel.drawImage(pyramidhead.objeto,xcerdo,ycerdo);
    }
}
var animal;
function elegirAnimal(evento)
{
    switch(evento.keyCode)
    {
        case teclas.A:
            animal = "Abstractdaddy";
        break;
        case teclas.P:
            animal = "Pyramidhead";
        break;
        case teclas.V:
            animal = "Valtiel";
        break;
    }
}

function moverAnimal(evento)
{
    if(animal == "Pyramidhead")
    {
        switch(evento.keyCode)
        {
            case teclas.DOWN:
                ycerdo = ycerdo + 10
                dibujar();
            break;
            case teclas.UP:
                ycerdo = ycerdo - 10
                dibujar();
            break;
            case teclas.LEFT:
                xcerdo = xcerdo - 10
                dibujar();
            break;
            case teclas.RIGHT:
                xcerdo = xcerdo + 10
                dibujar();
            break;
        }
    }
    else if(animal == "Valtiel")
    {
        switch(evento.keyCode)
        {
            case teclas.DOWN:
                ypollo = ypollo + 10
                dibujar();
            break;
            case teclas.UP:
                ypollo = ypollo - 10
                dibujar();
            break;
            case teclas.LEFT:
                xpollo = xpollo - 10
                dibujar();
            break;
            case teclas.RIGHT:
                xpollo = xpollo + 10
                dibujar();
            break;
        }
    }
    else if(animal == "Abstractdaddy")
    {
        switch(evento.keyCode)
        {
            case teclas.DOWN:
                yvaca = yvaca + 10
                dibujar();
            break;
            case teclas.UP:
                yvaca = yvaca - 10
                dibujar();
            break;
            case teclas.LEFT:
                xvaca = xvaca - 10
                dibujar();
            break;
            case teclas.RIGHT:
                xvaca = xvaca + 10
                dibujar();
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
