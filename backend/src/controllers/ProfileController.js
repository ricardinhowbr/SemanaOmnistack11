const connection = require('../database/connection');

module.exports = {
    async Index (request, response){
        const ong_id = request.headers.authorization;

        const casos = await connection('incidents').where('ong_id', ong_id).select('*');

        return response.json(casos);
    },
};