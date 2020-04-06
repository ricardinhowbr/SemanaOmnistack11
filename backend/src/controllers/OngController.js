const crypto = require('crypto');
// -> Importar conexão com o banco de dados.
const connection = require('../database/connection');
const generatorUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async Index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    async Create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generatorUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};