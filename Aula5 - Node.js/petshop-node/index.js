const http = require('http');
const url = require('url');
const petshop = require("./petshop");

const server = http.createServer( (req,res) => {
//req = request 
//res = responses
//Quando faco requisicao no navegador

    res.writeHead(200,{"Content-Type" : "text/plain;charset=UTF-8"})
   
    let urlCompleta = url.parse(req.url,true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;
    
    //console.log(typeof(urlCompleta.query.nome));

    switch(rota){
        case "/pets":
            let conteudo = petshop.listarPets();
            if(conteudo.length > 0 ){
                res.write(conteudo);    
                break;    
            }else{
                res.write("Nenhum pet cadastrado")
            }
            break;

         case "/pets/add":
            let novoPet = queryString;
            if(novoPet.length > 0&& typeof(urlCompleta.query.nome) !=  "undefined"){
                petshop.adicionarPet(novoPet);
                res.write(`adicionando pet ${novoPet.nome}`);   
                break;

             }else{
                res.write(`nome inválido`);  
                break;
             }
               

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

