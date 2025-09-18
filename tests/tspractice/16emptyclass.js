var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function myfunction(arg) {
    console.log('hi');
}
myfunction(5); //
myfunction({ k: 5 });
//By default, class Empty {} is compatible with everything, because it has no requirements.
//That’s why myfunction(5) and myfunction({k:5}) work.
//Add a private marker property if you want stricter behavior.///
