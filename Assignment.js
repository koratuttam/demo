const http =require('http')
const fs = require('fs')
const port = 1000 || process.env.port

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('otherfile.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('<h1 style="color: red">The page you requested is not available</h1>')
        }else
        {
            res.write(data)
        }
        res.end()
    })
})


server.listen(port, function(error){
    if(error){
        console.log('The page you requested is not available', error)
    }
    else {console.log('server is on port '+ port)

    }
    

})