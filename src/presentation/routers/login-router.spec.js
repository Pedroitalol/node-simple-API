class LoginRouter{
    route (httpRequest) {
        if(!httpRequest.body.email){
            return {
                statusCode: 400,
            } 
        }
    }
}

describe('Rota de login', () => {
    test('Tem que retornar 400 se o não for enviado o email', () => {
        const sut = new LoginRouter();
        const httpRequest = {
            body: {
                senha: 'qualquer_senha'
            }
        };
        const httpResponse = sut.route(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.mesage).toBe('meu teste')

    })
})