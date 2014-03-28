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
var programas = '[{ "nombre" : "La que se avecina", "favorito" : false, "imageSrc" : "img/lasexta.png", "emision" : "ahora"},{ "nombre" : "Salvados", "favorito" : true, "imageSrc" : "img/ATRESMEDIA.png","emision" : "mañana"}]';

function insertHeader(posicion, nombre) {
    var header = '<h3 class="topcoat-list__header">' + nombre + '</h3>';
    insertarCadena(posicion, header);
}

function insertElementoLista(posicion, texto, izquierda, favorito) {
    var lista = '<ul class="topcoat-list__container"> <li class="topcoat-list__item"><img class="imgIzquierda" src="' + izquierda + '"><h3 class="contenido-canal center">' + texto + ' <br> <br>Emisión: Ahora </h3><img class="imgDerecha" src="';
    if (favorito) {
        lista = lista + 'img/fav.png">';
    } else lista = lista + 'img/nofav.png">';
    lista = lista + '</li> </ul>';
    insertarCadena(posicion, lista);
}

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
    var divCanales = document.getElementById("canales");
    var leido = JSON.parse(programas);

    console.log(leido);
    for (i = 0; i < leido.length; i++) {
        console.log(1);
        console.log(leido[i]);
         console.log(divCanales);
        insertHeader(divCanales, 'caca'); 
        insertElementoLista(divCanales,leido[i].nombre, leido[i].imageSrc, leido[i].favorito);
        console.log(divCanales);
    }
};