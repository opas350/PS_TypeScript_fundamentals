/**
 * Created by javier.reyes.valdez on 22/08/2017.
 */
var functionsModule;
(function (functionsModule) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown person'));
    };
    helloWorld();
    helloWorld("opas350");
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(functionsModule || (functionsModule = {}));
