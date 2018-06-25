/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte[0] + texte[1] + texte[2] + texte[3] + texte[4] + texte[5] + texte[6] + texte[7] + texte[8];
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte == 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
    // var checkSpace = texte.indexOf(' ');
    // for (var i = 0; i < texte.length; i++) {
    //     checkSpace++;
    //     return checkSpace;
    //}
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
    // var texteInverse = "";
    // for (var i = texte.length -1; i >= 0; i--) {
    //     texteInverse += texte[i];
    // }
    // return texteInverse;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = Math.abs(array[i]);
    }
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
var calculIMC = function (poids, taille) {
    return parseFloat((poids / Math.pow(taille, 2)).toFixed(2));
}
