
import { Employe } from "./Employe";
import { IPerson, Personne } from "./Personne";


var e1 = new Employe(1,"toto",2500);
e1.salaire=3000;
console.log("Empoye e1 :" + JSON.stringify(e1) + ' de type=' + typeof(e1));
if( e1 instanceof Employe){
    console.log("e1 est de type Employe")
}

let p1 : Personne;
p1 = new Personne();
if( p1 instanceof Employe){
    console.log("p1 est de type employe")
}else{
    console.log("p1 n'est pas de type Employe")
}
p1.nom="toto";
try {
   p1.age=-30;
}
catch(e){
    console.log(e)
}

p1.incrementerAge();
console.log(p1.nom + ' ' + p1.age);
let p2 = new Personne(2,"toto2",45);
console.log(p2.nom + ' ' + p2.age);
console.log(p2)

Reflect.defineProperty(p2, "_age", {value: p2.age ,
writable : true, enumerable : false, configurable : true});
Reflect.defineProperty(p2, "age", {value: p2.age ,
    writable : true, enumerable : true, configurable : true});
console.log(">>>>"+JSON.stringify(p2))



let chose : any;  // 12 ou "abc" ou ...
let obj : object  | null; 
//obj= null; 
obj = { numero : 2}

//données souvent recupérées via HTTP
let persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
let persJs :IPerson = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus

// persJs = new IPerson(); interdit sur IPerson qui est une interface
let persJs2 : IPerson = { numero:3  , nom : "Bon" , prenom : "jean"} ;

function  affPerson(p:IPerson):void{
    console.log("****" + p.nom +  " " + p.numero)
}

function  affPersonMoinsBien(p:object):void{
    let pa = <any> p;
    console.log("****" + pa["nom"] +  " " + pa["numero"])
}

affPerson(persJs);

let p3 : Personne;
p3= Object.assign(new Personne() , persJs );
//Object.assign(target, source) opère une sorte de fusion entre 2 objets javascript
//ça recopie toutes les sous parties communes de source vers target (.numero , .nom)
//et ça retourne le résultat
console.log(p3.age);
p3.incrementerAge();
console.log(p3.age);

