import http from "http"
import { Readable, Writable } from "stream"

const log = console.log

const writeStream = new WritableStream({
  start(...w){
    log(w)
  }
})

const server = http.createServer(function(req, res){
  log(req)
  res.write("Hello")
  res.end()
})

server.listen(5000)
log("Server listening at http://localhost:5000")


function h(tagname = "", attrs = {}, events = {}, children : {
  [x: string]: {
      attrs: {};
      events: {};
      children: string | number;
      isArray: boolean;
  };
}[]) {
  if (Array.isArray(children)) {
    const hh = {}
    for(let i = 0; i < children.length; i++){
      hh[Object.keys(children[i])[0]] = Object.values(children[i])[0] 
    }
    log(hh)
    return {
      [tagname]: {
        attrs,
        events,
        children,
        isArray: true,
      },
    };
  }

  if (typeof children === "string" || typeof children === "number") {
    return {
      [tagname]: {
        attrs,
        events,
        children,
        isArray: true,
      },
    };
  }
}

const wrStream = new Readable({
  
})
