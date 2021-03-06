//// [decoratorOnClassMethodParameter1.ts]
declare function dec(target: Function, propertyKey: string | symbol, parameterIndex: number): void;

class C {
    method(@dec p: number) {}
}

//// [decoratorOnClassMethodParameter1.js]
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var C = (function () {
    function C() {
    }
    C.prototype.method = function (p) { };
    Object.defineProperty(C.prototype, "method",
        __decorate([
            __param(0, dec)
        ], C.prototype, "method", Object.getOwnPropertyDescriptor(C.prototype, "method")));
    return C;
})();
