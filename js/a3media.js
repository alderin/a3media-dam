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
