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
var volver = function () {
    $("#barraBotones").show();
    this.verCanales();
};
var programas = '[{ "nombre" : "La que se avecina", "favorito" : false, "emision" : "ahora"},{ "nombre" : "Salvados", "favorito" : false, "emision" : "mañana"}]';
var header = function (posicion, nombre) {
    var header = '<h3 class="topcoat-list__header">' + nombre + '</h3>';
    insertarCadena(posicion, header);
};

function insertarCadena(element, html) {
    var frag = document.createDocumentFragment(),
        tmp = document.createElement('body'),
        child;
    tmp.innerHTML = html;
    // Append elements in a loop to a DocumentFragment, so that the browser does
    // not re-render the document for each node
    while (child = tmp.firstChild) {
        frag.appendChild(child);
    }
    element.appendChild(frag); // Now, append all elements at once
    frag = tmp = null;
}
var cargar = function () {
    var caca = '<h3 class="topcoat-list__header">Antena 3</h3>';
    var divCanales = document.getElementById("canales");
    var leido = JSON.parse(programas);

    console.log(leido);
    for (i = 0; i < leido.length; i++) {
        console.log(1);
        console.log(leido[i]);
        header(divCanales, 'caca');
        console.log(divCanales);
        //        insertarCadena(divCanales, caca);
        console.log(divCanales);
    }
};
