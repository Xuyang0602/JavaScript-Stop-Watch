'use strict';

//Creat the Constructor
function StopWatch() {
    this.startTime = 0;
    this.endTime = 0;
    this.isStop = false;
}


/**
 * @param {string[]} words
 * @return {number[][]}
 */
// Attach all the methods on the prototype chain;
// In order to the chian (e.g., sw.start().stop().start().log();), method should reutrn itself: return this;
StopWatch.prototype.start = function() {
    this.startTime = Date.now();
    this.isStop = false;
    return this;
}


//Stop the timeCounter
//In the case of  sw.stop().stop(), only record the first stop value;
StopWatch.prototype.stop = function() {
    if (this.isStop == false) {
        this.endTime = Date.now();
        this.isStop = true;
    }
    return this;
}

//Log to show the timeCounter;
//If this.startTime == 0, Not start yet ---> dif = 0;
//If isStop == false ---> the Watch is running, record the time now.
//If isStop == true ---> the Watch is stoped via the stop(), using this.endTime value from stop function.
StopWatch.prototype.log = function() {
    var dif;
    if (this.startTime == 0) {
        dif = 0;
    } else {
        if (!this.isStop) {
            this.endTime = Date.now();
        }
        dif = this.endTime - this.startTime;
    }
    return dif;
}

//Reset the timeCounter
StopWatch.prototype.reset = function() {
    this.startTime = 0;
    this.endTime = 0;
    this.isStop = false;
    return this;
}



//Creat the Constructor
function Racer() {
    Racer.all.push(this);
}

// Create the prototype inheritance, and also correct the prototype chain;
Racer.prototype = new StopWatch();
Racer.prototype.counstructor = Racer;

Racer.all = [];

// Cache the first object's (this[0]) timeCounter
// Assign this value to the other objects to make sure they start to count simultaneously.
Racer.all.start = function(){
    var timeStart = Date.now();
    for (var i = 0; i < this.length; i++) {
        this[i].startTime = timeStart;
    }
}

Racer.getWinner = function() {
    if (!this.all) {
        return null;
    }

    var min = Infinity,
        winner;

    for (var i = 0; i < this.all.length; i++) {
        var dif = this.all[i].log();
        if (this.all[i].isStop && dif < min) {
            min = dif;
            winner = this.all[i];
        }
    }
    return winner;
}

