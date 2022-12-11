import * as events from "events";
const emitter = new events.EventEmitter();
emitter.on("messageLogged", function (args) {
    console.log('listener called', args);
})
emitter.emit("messageLogged", {id: 1, url: "http://facebook.com"});