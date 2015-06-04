/**
 * Created by david on 6/3/15.
 */

require('../../../node_modules/angular2/node_modules/traceur/bin/traceur-runtime');
var angular2 = require('../../../node_modules/angular2/angular2');

function Clicker(){
    this.clickCounter = 0;
    this.x = 0;
    this.y = 0;

    this.onClick = function onClick(){
      this.clickCounter++;
        document.getElementById("clickerButton").innerHTML = "Click Count " + this.clickCounter;
    };

    this.onMouseMove = function onMouseMove(event){
        this.x = event.x;
        this.y = event.y;
        document.getElementById("clickerxy").innerHTML = "x = " + this.x + ", y = " + this.y;
    };
}

Clicker.annotations = [
    new angular2.ComponentAnnotation({
        selector: 'clicker'
    }),
    new angular2.ViewAnnotation({
        template: require('./clicker.html')
    })
];

function Clock(){
    var clock = this;
    clock.time = 0;
    clock.message = "Seconds since last refresh: ";

    setInterval(function(){
        clock.time++;
        document.getElementById("clockid").innerHTML = '<b>' + clock.message + clock.time + '</b>';
    }, 1000);
}

Clock.annotations = [
    new angular2.ComponentAnnotation({
        selector: 'clock'
    }),
    new angular2.ViewAnnotation({
        template: '<p id="clockid"><b>{{message}} {{time}}</b></p>'
    })
];

var Note = function(){};
Note.annotations = [
    new angular2.ComponentAnnotation({
        selector: 'note'
    }),
    new angular2.ViewAnnotation({
        template: '<p id="notesm">Simple message</p>'
    })
];

var ng2app = function(){};
ng2app.annotations = [
    new angular2.ComponentAnnotation({
        selector: 'ng2app'
    }),
    new angular2.ViewAnnotation({
        directives: [Note, Clicker, Clock],
        template: require('./ng2app.html')
    })
];

document.addEventListener("DOMContentLoaded", function(){
    angular2.bootstrap(ng2app);
});

