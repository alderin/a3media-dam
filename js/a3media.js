var verCanales = function () {
    $("#series ,#favoritos, #directos,#botonAtras,#botonFavorito").hide();
    $("#divDirectos").show();
    $("#canales").show("fast");
};

var verSeries = function () {
    $("#canales,#favoritos,#directos,#botonAtras,#botonFavorito").hide();
    $("#botonDirectos").show();
     $("#divDirectos").show();
    $("#series").show("fast");
};
var verFavoritos = function () {
    $("#canales,#series,#directos,#botonAtras,#botonFavorito").hide();
    $("#botonDirectos").show();
     $("#divDirectos").show();
    $("#favoritos").show("fast");
};
var verDirectos = function () {
    $("#canales,#series,#favoritos,#divDirectos, #barraBotones").hide();
    $("#botonAtras").show();
    $("#botonFavorito").show();
    $("#directos").show("fast");
};
var volver = function(){
    $("#barraBotones").show();
    this.verCanales();
}
var programas ='[{ "nombre" : "La que se avecina", "favorito" : false, "emision" : "ahora"},{ "nombre" : "Salvados", "favorito" : false, "emision" : "mañana"}]'
var cargar = function(){
	var divCanales = document.getElementById("canales");
		var leido = JSON.parse(programas);
		console.log(leido);
	for ( i = 0; i < leido.length; i++){
	console.log("aaa"+leido[i]);
	divLeido.appendChild("<p> " + leido[i].favorito + " </p>");
	}
}
