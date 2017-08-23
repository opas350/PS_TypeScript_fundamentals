/// <reference path ="typings/index.d.ts"/>
var ambient;
(function (ambient) {
    var name = ko.observable('opas350');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(ambient || (ambient = {}));
