const PETSHOP = "Petshop DH V2";

console.log("** " + PETSHOP + " **");

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: true,
    servicos: ["banho", "tosa", "corte de unha"]
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: true,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const dataDeNascimento = pet => 2020 - pet.idade;

const vacinaPet = pet =>  {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log("Pet vacinado com sucesso!");
  } else {
    console.log("Opa, seu pet já está vacinado!");
  }
}

const listarPets = () => {
  for(let contador = 0;contador < pets.length;contador++) {
    console.log("---------------------");
    console.log("Nome: " + pets[contador].nome);
    console.log("Tipo: " + pets[contador].tipo);
    console.log("Raça: " + pets[contador].raca);
    console.log("Idade: " + pets[contador].idade);
    console.log("Genero: " + (pets[contador].genero == "F" ? "Femea" : "Macho"));
    console.log("Vacinado: " + (pets[contador].vacinado ? "Sim" : "Não"));
    console.log("Serviços: " + pets[contador].servicos);
  }
}
/*
const validarDados = (dadosPet) => {
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca == 'string'
    );
}*/

const adicionarPet = novoPet => {
      novoPet.nome = novoPet.nome.toString();
    novoPet.idade = Number(novoPet.idade);
    pets.push(novoPet);
    console.log(novoPet.nome + " foi adicionado com sucesso!");
  
}
/*
adicionarPet({
  nome: "Costelinha",
  tipo: "cão",
  raca: "vira-lata",
  idade: 12,
  genero: "M",
  vacinado: true,
  servicos: ["banho"]
});
*/

const tosarPet = (pet) => {
    pet.servicos.push("tosa");
    console.log("Tosa realizada com sucesso!");
};

const darBarnhoPet = pet => {
    pet.servicos.push("tosa")
    console.log("Seu bixinho está limpo!");
}

const cortarUnhas = pet => {
    pet.servicos.push("tosa")
    console.log("As estrelas não serao mais cutucadas!");
}

// const atenderPet = (pet,servico) => {
//     servico(pet);
//     console.log("Volte Sempre!")
// }


//darBarnhoPet(pets[0])

//cortarUnhas(pets[0])

const atenderPet = (pet,servico) => {
    for (let i = 0; i < servico.length; i++) {
        servico[i](pet);
    }
    
    const pagar = () => {console.log('$$$ Pagamento realizado! $$$');};

    pagar();

    console.log("Volte Sempre!")
}

//atenderPet(pets[0],[darBarnhoPet])

const contaVacinados = pets => {
    let vacinados = 0;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].vacinado){
            vacinados++;
        }
    }
    console.log("Foram encontrados " +vacinados +" pets vacinado e " +(pets.length - vacinados) +" não vacinados")

    const campanhaVacina = pets => {
        for (let i = 0; i < pets.length; i++) {
            if(!pets[i].vacinado){
                vacinaPet(pets[i]);
            }
        }

    }

console.log("Foram vacinados "+(pets.length - vacinados)+" pets nesta campanha");
} 



contaVacinados(pets)