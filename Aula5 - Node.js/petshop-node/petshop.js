let pets = [ { nome : "doug" }, { nome : "Blue" } , { nome : "Brie" }];

const listarPets = () => {
    let conteudo = ' ';
    for(let pet of pets){
        conteudo += `
        --------------------
        Nome: ${pet.nome}
        -------------------- `;
    };

    return conteudo;
};

const adicionarPet = novoPet => {
   return  pets.push(novoPet);
};

const buscarPet = nomePet => {
    
}

module.exports = { listarPets, adicionarPet };