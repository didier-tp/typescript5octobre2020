

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

let p1 : Personne;
p1 = new Personne();
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
