var imagenes = [];
imagenes["Pyramid Head"] = "sh2_pyramid_head.png";
imagenes["Abstract Daddy"] = "sh2_abstract_daddy.png";
imagenes["Valtiel"] = "sh3_valtiel.png";

var coleccion = [];
coleccion.push( new Silentmonster("Pyramid Head", 100, 30) );
coleccion.push(new Silentmonster("Abstract Daddy", 80, 50));
coleccion.push(new Silentmonster("Valtiel", 120, 40));

for(var freddito of coleccion)
{
  freddito.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
