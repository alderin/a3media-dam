var verCanales = function () {
    $("#series").hide();
    $("#favoritos").hide();
    $("#canales").show("slow");
};

var verSeries = function () {
    $("#canales").hide();
    $("#favoritos").hide();
    $("#series").show();
};
var verFavoritos = function () {
    $("#canales").hide();
    $("#series").hide();
    $("#favoritos").show();
};