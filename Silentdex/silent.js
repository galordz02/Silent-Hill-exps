var vp = document.getElementById("Silentdexhtml");
var paper = vp.getContext("2d");

var images = [];
images[0] = "Pyramid_Head.png";
images[1] = "Abstract_Daddy.png";

var collection = [];
collection.push(new Silentmon("Pyramid Head", 0, 600, 120));
collection.push(new Silentmon("Abstract Daddy", 1, 600, 120));

collection[1].draw();
