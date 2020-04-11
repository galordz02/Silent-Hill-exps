var vp =document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var flechas =
{
  UP    : 38,
  DOWN  : 40,
  LEFT  : 37,
  RIGHT : 39};

var mapa = {
    url     : "background.jpg",
    cargaOk : false
  };
var abstractdaddy = {
    url     : "Abstract_Daddy.png",
    cargaOk : false
};
var valtiel = {
    url      : "Valtiel.png",
    cargaOk  : false
};
var pyramidhead = {
    url     : "Pyramid_Head.png",
    cargaOk : false
};

mapa.imagen = new Image();
mapa.imagen.src = mapa.url;

abstractdaddy.imagen = new Image();
abstractdaddy.imagen.src = abstractdaddy.url;

valtiel.imagen = new Image ();
valtiel.imagen.src = valtiel.url;

pyramidhead.imagen = new Image();
pyramidhead.imagen.src = pyramidhead.url;

var movimiento = 10;
var x = 200; /*posicion del cerdo abajo lo mismo*/
var y = 200;

mapa.imagen.addEventListener("load", cargaElMapa);
valtiel.imagen.addEventListener("load",cargaElPollo);
abstractdaddy.imagen.addEventListener("load", cargaLaVaca);
pyramidhead.imagen.addEventListener("load", cargaElCerdo);
document.addEventListener("keydown", movimientoDelCerdo);

/*funciones que se ejecutan cuando la imagen termina de cargarse*/
function cargaElMapa ()
{
  mapa.cargaOk = true;
  dibujarloTodo();
}
function cargaLaVaca ()
{
  abstractdaddy.cargaOk = true;
  dibujarloTodo();
}
function cargaElPollo()
{
  valtiel.cargaOk = true;
  dibujarloTodo();
}
function cargaElCerdo()
{
  pyramidhead.cargaOk = true;
  dibujarloTodo();
}

var numerodeanimalesentotal = 30
var xPosicion = new Array(numerodeanimalesentotal);
var yPosicion = new Array(numerodeanimalesentotal);
var xp;
var yp;
for (var i = 0; i < numerodeanimalesentotal; i++)
{
  xp = aleatorio(0,12) *35;
  xPosicion[i]=xp;
  yp = aleatorio(0,12) *35;
  yPosicion[i]=yp
}
console.log(xPosicion,yPosicion);

var numerodevacas = aleatorio(1,10);
var numerodecerdos = aleatorio(1,10);
var numerodepollos = aleatorio(1,10)
function dibujarloTodo()
{

  if (mapa.cargaOk)
  {
    papel.drawImage(mapa.imagen,0,0);
  }
  if (abstractdaddy.cargaOk)
  {

    for (var is = 0; is < numerodevacas; is++){
      papel.drawImage(abstractdaddy.imagen,xPosicion[is],yPosicion[is]);
    }
  }
  if (pyramidhead.cargaOk)
  {
    for (var i = 0; i < numerodecerdos; i++)
     {
      papel.drawImage(pyramidhead.imagen,xPosicion[i+10],yPosicion[i+10]);
      papel.drawImage(pyramidhead.imagen,x,y);
    }

  }
  if (valtiel.cargaOk)
  {
    for (var ia = 0; ia < numerodepollos; ia++)
     {
      papel.drawImage(valtiel.imagen,xPosicion[ia+20],yPosicion[ia+20]);
    }
  }
}

function movimientoDelCerdo(evento)
{
  switch (evento.keyCode)
  {
    case flechas.UP:
    y = y -movimiento;
    dibujarloTodo();
    break;
    case flechas.DOWN:
    y = y + movimiento;
    dibujarloTodo();
    break;
    case flechas.LEFT:
    x = x - movimiento;
    dibujarloTodo();
    break;
    case flechas.RIGHT:
    x = x + movimiento;
    dibujarloTodo();
    break;
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
  return resultado;
}
