var verCanales = function () {
    $("#series").hide();
    $("#favoritos").hide();
    $("#canales").show("fast");
};

var verSeries = function () {
    $("#canales").hide();
    $("#favoritos").hide();
    $("#series").show("fast");
};
var verFavoritos = function () {
    $("#canales").hide();
    $("#series").hide();
    $("#favoritos").show("fast");
};
