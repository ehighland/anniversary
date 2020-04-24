

paintings = ["Starry Night","The Persistence of Memory","Cow's Skull with Calico Roses","Guernica","A Sunday on La Grande Jatte","American Gothic","The Scream"]

characters = ["Garfield","Bart Simpson","Ash Williams","Winne the Pooh","The Flash","Iron Man","Buffy Summers","Steven Universe"]

document.getElementById("shuffle").addEventListener("click", shuffle);

function shuffle() {
	var x = Math.floor((Math.random() * paintings.length) +1) -1;
	var output1 = paintings[x];

	var y = Math.floor((Math.random() * characters.length) +1) -1;
	var output2 = characters[y];

	document.getElementById("outputpaint").innerHTML =  output1;
	document.getElementById("outputchar").innerHTML = output2;
}