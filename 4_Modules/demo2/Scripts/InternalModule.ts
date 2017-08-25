/**
 * Created by javier.reyes.valdez on 24/08/2017.
 */
namespace Shapes {

    export interface IRectangle {
        height: number;
        width: number;
        getArea(): number;
    }

    export class Rectangle implements IRectangle {

        constructor (public height: number, public width: number) {}
            getArea() {
            return this.height * this.width;
            }
    }
}

namespace MyProgram {

    function run() {
        let rect: Shapes.IRectangle = new Shapes.Rectangle(10, 4);
        let area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
}