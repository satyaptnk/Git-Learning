﻿var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerHTML = new Date().toUTCString();
        }, 500);
    };

    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };

    Greeter.prototype.Test = function (ev) {
        if (ev.button === 0) {
            alert("Left Click");
        } else if (ev.button === 1) {
            alert("Right Click");
        } else if (ev.button === 1) {
            alert("MIddle Click");
        }
    };
    return Greeter;
})();

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var button1 = document.getElementById('mybutton');
    button1.onclick = greeter.Test;
};
//# sourceMappingURL=app.js.map
