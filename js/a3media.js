var verCanales = function () {
    $("#series").hide();
    $("#favoritos").hide();
    $("#directos").hide();
    $("#botonDirectos").show();
    $("#canales").show("fast");
};

var verSeries = function () {
    $("#canales").hide();
    $("#favoritos").hide();
    $("#directos").hide();
    $("#botonDirectos").show();
    $("#series").show("fast");
};
var verFavoritos = function () {
    $("#canales").hide();
    $("#series").hide();
    $("#directos").hide();
    $("#botonDirectos").show();
    $("#favoritos").show("fast");
};
var verDirectos = function () {
    $("#canales").hide();
    $("#series").hide();
    $("#favoritos").hide();
    $("#botonDirectos").hide();
    $("#directos").show("fast");
};
