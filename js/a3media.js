var verCanales = function () {
    $("#series ,#favoritos, #directos,#botonAtras").hide();
    $("#botonDirectos").show();
    $("#canales").show("fast");
};

var verSeries = function () {
    $("#canales,#favoritos,#directos,#botonAtras").hide();
    $("#botonDirectos").show();
    $("#series").show("fast");
};
var verFavoritos = function () {
    $("#canales,#series,#directos,#botonAtras").hide();
    $("#botonDirectos").show();
    $("#favoritos").show("fast");
};
var verDirectos = function () {
    $("#canales,#series,#favoritos,#botonDirectos, #barraBotones").hide();
    $("#botonAtras").show();
    $("#directos").show("fast");
};
var volver = function(){
    $("#barraBotones").show();
    this.verCanales();
}
