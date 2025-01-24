import { Server } from "bun";

Server({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/') {
            return new Response('hello Ice tea', {status: 200})
  
        } else if (url.pathname === '/ice-tea') {
            return new Response('Ice tea a goog option', {status: 200})

    }else {
        return new Response('404 Not Found')
    }
},
  port : 3000,
  hostname: '127.0.0.1'
});