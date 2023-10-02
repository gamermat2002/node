const http = require('http');

const server = http.createServer((req,res) => {
 
    if(res.url === '' ){
        res.end("Well thats kinda dub")
    }
    if(req.url === '/about'){
        res.end("we are in the second page bou")
    }
    res.end(`
    <h1>OOPS!</h1>
    <h2>what do u things i dont have a life</h2>
    <a href="/">Back home</a>
   `) 
})

server.listen(5000)

