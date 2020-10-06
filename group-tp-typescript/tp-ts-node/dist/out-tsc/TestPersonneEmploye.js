"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employe_1 = require("./Employe");
var Personne_1 = require("./Personne");
var e1 = new Employe_1.Employe(1, "toto", 2500);
e1.salaire = 3000;
console.log("Empoye e1 :" + JSON.stringify(e1) + ' de type=' + typeof (e1));
if (e1 instanceof Employe_1.Employe) {
    console.log("e1 est de type Employe");
}
var p1;
p1 = new Personne_1.Personne();
if (p1 instanceof Employe_1.Employe) {
    console.log("p1 est de type employe");
}
else {
    console.log("p1 n'est pas de type Employe");
}
p1.nom = "toto";
try {
    p1.age = -30;
}
catch (e) {
    console.log(e);
}
p1.incrementerAge();
console.log(p1.nom + ' ' + p1.age);
var p2 = new Personne_1.Personne(2, "toto2", 45);
console.log(p2.nom + ' ' + p2.age);
console.log(p2);
Reflect.defineProperty(p2, "_age", { value: p2.age,
    writable: true, enumerable: false, configurable: true });
Reflect.defineProperty(p2, "age", { value: p2.age,
    writable: true, enumerable: true, configurable: true });
console.log(">>>>" + JSON.stringify(p2));
var chose; // 12 ou "abc" ou ...
var obj;
//obj= null; 
obj = { numero: 2 };
//données souvent recupérées via HTTP
var persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
var persJs = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
var persJs2 = { numero: 3, nom: "Bon", prenom: "jean" };
function affPerson(p) {
    console.log("****" + p.nom + " " + p.numero);
}
function affPersonMoinsBien(p) {
    var pa = p;
    console.log("****" + pa["nom"] + " " + pa["numero"]);
}
affPerson(persJs);
var p3;
p3 = Object.assign(new Personne_1.Personne(), persJs);
//Object.assign(target, source) opère une sorte de fusion entre 2 objets javascript
//ça recopie toutes les sous parties communes de source vers target (.numero , .nom)
//et ça retourne le résultat
console.log(p3.age);
p3.incrementerAge();
console.log(p3.age);
//# sourceMappingURL=TestPersonneEmploye.js.map