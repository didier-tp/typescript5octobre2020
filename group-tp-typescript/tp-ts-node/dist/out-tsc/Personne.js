"use strict";
var Personne = /** @class */ (function () {
    function Personne(numero, nom, _age) {
        if (numero === void 0) { numero = undefined; }
        if (nom === void 0) { nom = "?"; }
        if (_age === void 0) { _age = 0; }
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            if (a >= 0)
                this._age = a;
            else
                throw "age negatif invalide";
        },
        enumerable: false,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this._age++;
    };
    return Personne;
}());
var p1;
p1 = new Personne();
p1.nom = "toto";
try {
    p1.age = -30;
}
catch (e) {
    console.log(e);
}
p1.incrementerAge();
console.log(p1.nom + ' ' + p1.age);
var p2 = new Personne(2, "toto2", 45);
console.log(p2.nom + ' ' + p2.age);
console.log(p2);
Reflect.defineProperty(p2, "_age", { value: p2.age,
    writable: true, enumerable: false, configurable: true });
Reflect.defineProperty(p2, "age", { value: p2.age,
    writable: true, enumerable: true, configurable: true });
console.log(">>>>" + JSON.stringify(p2));
//# sourceMappingURL=Personne.js.map