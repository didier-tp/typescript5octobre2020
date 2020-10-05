"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
function addition(a, b) {
    var res;
    res = a + b;
    var message = "pour a=" + a + " ,b=" + b + " res=(a+b)=" + res;
    console.log(message);
    return res;
}
var x = addition(5, 6);
var t = ["abc", "def", "trois"];
try {
    for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
        var e = t_1_1.value;
        console.log(e.toUpperCase());
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (t_1_1 && !t_1_1.done && (_a = t_1.return)) _a.call(t_1);
    }
    finally { if (e_1) throw e_1.error; }
}
/*
for(const [index,elt] of t.entries()){
    console.log(`index=${index} val=${elt}`);
}

var m = new Map();
m.set("hiver", "froid , neige");
console.log(m.get("hiver"));

function fxabc_with_named_param( { paramX=0 , a=0 , b=0 , c=0 } = { } ){
    //return ax^2+bx+c
    return a * Math.pow(paramX,2) + b * paramX + c;
    }

    
let troisFois4 = fxabc_with_named_param( { paramX :4 , b : 3 } );
console.log("troisFois4="+troisFois4 );//12
*/ 
//# sourceMappingURL=calcul.js.map