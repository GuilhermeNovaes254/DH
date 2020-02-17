const http = require('http');

const server = http.createServer( (req,res) => {
//req = request 
//res = responses
//Quando faco requisicao no navegador

    res.writeHead(200,{"Content-Type" : "text/plain;charset=UTF-8"})
    switch(req.url){

        case "/pets":
            res.write("lista de pets");    
            break;

         case "/pets/add":
            res.write("adicionando pet");    
            break;

        case "/pets/buscar":
            res.write("buscando pet");    
            break;

        default:
            res.write("estou perdido");    
    
    }
res.end()

} ).listen(3000, 'localhost',()=> {
    //Quando ligo servidor
    console.log('Servidor rodando :)');
});

