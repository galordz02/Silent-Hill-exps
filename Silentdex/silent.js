var images = [];
images[1] = "Pyramid_Head.png";
images[2] = "Abstract_Daddy.png";

var collection = [];
collection.push(new Silentmon("Pyramid Head", 1, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 2, 600, 120));

for(var freddito of collection)
{
  freddito.show();
}

for(var x in collection[0])
{
  console.log(x);
}
