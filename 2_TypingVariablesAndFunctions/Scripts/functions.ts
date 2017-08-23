/**
 * Created by javier.reyes.valdez on 22/08/2017.
 */

module functionsModule {
    var squareItSimple = function (h: number, w: number) {
        return h * w;
    }

    var squareItSimplest = (h: number, w: number) => h * w;

    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || ' unknown person'));
    }

    helloWorld();
    helloWorld("opas350")

    var squareIt:
        (rect: { h: number, w?: number;}) => number;

    var rectA = {h: 7};
    var rectB = {h: 7, w: 12};

    squareIt = function (rect) {
        if(rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }


    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}