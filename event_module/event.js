import EventEmitter from 'events';
//creating class
class MyEmitter extends EventEmitter {

}

//creating object 

const myEmitter = new MyEmitter();

//Register Event Listener
myEmitter.on('event', ()=>{
    console.log("Event Occurred");
})

 //trigger event
myEmitter.emit('event');
let m = 0;
myEmitter.on('event', ()=>{
    console.log(++m);
})

myEmitter.emit('event');
myEmitter.emit('event');


let n = 0;
myEmitter.once('event', ()=>{
    console.log(++n);
})

myEmitter.emit('event');
myEmitter.emit('event');