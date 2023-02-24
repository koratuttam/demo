const fs = require('fs')
const http =require('http')


http.createServer(function(req,res){

    fs.readFile('first.html',function(err,data){
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data.toString());
        return res.end();
       // console.log("reading file");
    
        });

}).listen(8000);
   
    

  /*  fs.writeFile('input.txt','this is going to be new',function(err){
        if(err) throw err;
        console.log("file written");
        //Console.log(data.toString());
    })
*/
   /* fs.appendFile('input.txt', 'this is gonna appended',function(err){
        if(err) throw err;
        console.log("file been written");

    })*/
