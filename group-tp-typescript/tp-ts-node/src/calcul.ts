function addition(a:number,b:number):number{
   let res :number;
   res=a+b;
   let message =`pour a=${a} ,b=${b} res=(a+b)=${res}`;
   console.log(message);
   return res;
}

let x=addition(5,6); 

let t : string[]= ["abc","def","trois"];
for(let e of t){
    console.log(e.toUpperCase());
}

/*
for(const [index,elt] of t.entries()){
    console.log(`index=${index} val=${elt}`);
}

var m = new Map();
m.set("hiver", "froid , neige");
console.log(m.get("hiver"));
*/ 

interface ParamFxabc {
    paramX? : number ;
    a? :number;
    b?: number;
    c? : number;
}

function fxabc_with_named_param( { paramX=0 , a=0 , b=0 , c=0 } : ParamFxabc = { }  ){
    //return ax^2+bx+c
    return a * Math.pow(paramX,2) + b * paramX + c;
    }

    
let troisFois4 = fxabc_with_named_param( { paramX :4 , b : 3 } );
console.log("troisFois4="+troisFois4 );//12
