const fs=require('fs');
const routesHandler=(req, res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile('text.txt',{encoding:"utf-8"}, (err,data)=>{
            if(err){
                console.log(err);
            }
        console.log('data from file='+data);
        res.write('<html>');
        res.write('<head><title>Write Message</title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/msg" method="POST"><input type="text" name="message"><button>submit</button></form></body>');
        res.write('</html>');
        return res.end();
        })
    }  
        if(url==='/msg' && method==='POST'){
            const body=[];
            req.on('data',(chunk)=>{
                body.push(chunk);
            })
            req.on('end',()=>{
                const parsebody=Buffer.concat(body).toString();
                const message=parsebody.split('=')[1];
                fs.writeFile('text.txt',message,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    res.statusCode=302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            })
        }
}
module.exports=routesHandler;