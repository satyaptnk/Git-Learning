﻿class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();  
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

    Test(ev: MouseEvent) {
        if (ev.button === 0) {
            alert("Left Click");
        }
        else if (ev.button === 1) {
            alert("Right Click");
        }
        else if (ev.button === 1) {
            alert("MIddle Click");
        }
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var button1 = document.getElementById('mybutton');
    button1.onclick = greeter.Test;
};