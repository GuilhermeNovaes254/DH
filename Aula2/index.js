//console.log("Olá, Mundo!");

const PETSHOP = "Petshop DH"; //Em constantes se usa tudo maiuscula como boas praticas

console.log("** " +PETSHOP+ " **");
console.log("---------------------------")
/*
//Variaveis
let nome = "Brie Darroz Novaes";
let raca = "Vira-lata";
let idade = 2;
let genero = "Fêminino";
let servicos = ["corte unha","banho", "tosa"];
let tipo = "Gato";
let vacinado = false;

let pet = {
    nome : "Brie Darroz Novaes",
    raca : "Vira-lata",
    idade : 2,
    genero : "Fêminino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Gato",
    vacinado : false
};

// console.log(pet.nome);
// console.log(pet.servicos[0]);
*/
let pets = [{
    nome : "Brie Darroz Novaes",
    raca : "Vira-lata",
    idade : 2,
    genero : "Fêminino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Gato",
    vacinado : false
    },{
    nome : "Blue Darroz Novaes",
    raca : "Betta",
    idade : 2,
    genero : "maculino",
    servicos : ["troca de agua","banho de sal"],
    tipo : "Peixe",
    vacinado : true
    },{
    nome : "Betina Andrare",
    raca : "Vira-lata",
    idade : "17",
    genero : "Fêminino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Gato",
    vacinado : true
    },{
    nome : "Bruce",
    raca : "Husk",
    idade : 15,
    genero : "Masculino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Cachorro",
    vacinado : false
    },{
    nome : "Han",
    raca : "Vira-lata",
    idade : 6,
    genero : "Masculino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Cachorro",
    vacinado : false
    }
];

function dataDeNascimento(pet){
    return 2020 - pet.idade;
}


function vacinaPet(pet){
    if(!pet.vacinado){
        pet.vacinado = true;
        console.log(pet.vacinado);
    }else{
    console.log("Opa, seu pet já está vacinado");
    }
}

// for(i=0;i<pets.length;i++){
//     vacinaPet(pets[i]);
// }

let i = 0;
function listarPets(){
    while(i<pets.length){
        console.log("nome : "+pets[i].nome);
        console.log("raça : "+pets[i].raca);
        console.log("idade : "+pets[i].idade);
        console.log("genero : "+(pets[i].genero == "Fêminino" ? "Femea" : "Macho"));
        console.log("serviços : "+pets[i].servicos.toString());
        console.log("servicos: "+pets[i].nome);
        console.log("tipo : "+pets[i].tipo);
        console.log("vacinado :"+(pets[i].vacinado ? "Sim":"Não"));
        console.log("---------------------------");
        i++;
    }
}

//listarPets();

function adicionarPet(novoPet){
    pets.push(novoPet);

}

let novo = {
    nome : "Jorge",
    raca : "Dog Ingês",
    idade : 4,
    genero : "Masculino",
    servicos : ["corte de unha","banho", "tosa"],
    tipo : "Cachorro",
    vacinado : true
    }
adicionarPet(novo);
//console.log(pets);
listarPets();