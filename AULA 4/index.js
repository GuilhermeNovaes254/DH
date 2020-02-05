const PETSHOP = "Petshop DH";
console.log(`** ${PETSHOP} **`); //Template String

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: []
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

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log("Pet vacinado com sucesso!");
  } else {
    console.log("Opa, seu pet já está vacinado!");
  }
};

const listarPets = () => {
  for (let pet of pets) {
    console.log(`
    ---------------------
    Nome : ${pet.nome}
    Tipo : ${pet.tipo}
    Raca : ${pet.raca}
    Idade : ${pet.idade}
    Genero : ${pet.generogenero == "F" ? "Femea" : "Macho"}
    Vacinado : ${pet.vacinado ? "Sim" : "Não"}
    Serviços : ${pet.servicos}
    Tipo : $
    `);

  }
};

const validarDados = dadosPet => {
  return (
    dadosPet.nome &&
    dadosPet.idade &&
    dadosPet.genero &&
    dadosPet.tipo &&
    dadosPet.raca
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
  } else {
    console.log("Ops, insira um objeto válido!");
  }
};


const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome}  cortou as unhas!`);
};

const atenderPet = (pet, ...servicos) => {
  console.log(`Bem vindo,  ${pet.nome}`);
  for (let servico of servicos ) {
    servico(pet)
//  servicos(servico);
  }

  const pagar = () => {
    console.log("Pagamento realizado com suce$$o!");
  };

  pagar();

  console.log("Volte sempre!");
};


//listarPets();
atenderPet(pets[0], [cortarUnhasPet, tosarPet, darBanhoPet, darBanhoPet]);