const http = require('http');

//const server = http.createServer((req,res)=>{
http.createServer((req,res)=>{
    
    //Indica que retornando un archivo de texto
    //res.writeHead(200,{'Content-Type':'text/plain'});
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200,{'Content-Type':'application/csv'});
    //res.write('404 | Page not found');
    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Maria\n');
    res.write('3,Juan\n');
    res.write('4,Pedro\n');
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto', 8080);