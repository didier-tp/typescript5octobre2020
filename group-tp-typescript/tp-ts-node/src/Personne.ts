

class Personne{
   
    constructor(public numero:number|undefined = undefined, 
                public  nom:string ="?" , 
                private _age : number = 0){  
    }

    public get age() :number{
        return this._age;
    }

    public set age(a:number){
        if(a>=0)
             this._age=a;
        else throw "age negatif invalide"
    }

    

    incrementerAge():void {
        this._age++;
    }

}

class Employe extends Personne {
    constructor(numero:number=0,
                nom:string="?",
                public salaire:number=0){
        //super(); 
        super(numero,nom) ;         
    }

}

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
