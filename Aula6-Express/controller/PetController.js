const PetModel = require('../model/Pet')

const PetController = {

    index: (req, res) => {
        res.send(PetModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        PetModel.adicionarPet(novoPet);

        res.send(`Adiciona Pet, ${novoPet.nome} adicionado`);
    },
    show: (req, res) => {
        res.send("Exibe 1 pet especifico");
    }

};

module.exports = PetController;