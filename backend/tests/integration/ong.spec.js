const app = require('../../src/app');
const request = require('supertest');

const connection = require('../../src/database/connection');

describe('ONG', () => {
    
    beforeEach(async () => {
        // -> Utilizar rollback para deixar o banco de teste de integração sempre limpo, evitando sobrecarregar a base.
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    // ->Executado depois de todo o processo de teste terminar. Dispose nas pendências de conexões abertas no processo de teste.
    afterAll(async () => {
        await connection.destroy();
    })

    // -> Deveria ser possível criar uma nova ONG...
    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
    //.set('Authorization', 'id de autorização') -> exemplo para setar variáveis do HEADER da requisição.
        .send({
            name : "ong teste",
            email : "ongtest@fa.com",
            whatsapp : "85 9999999",
            city : "Fortaleza",
            uf : "CE"
        });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
});