class LoginRouter{
    route (httpRequest) {
        if(!httpRequest || !httpRequest.body){
            return {
                statusCode: 500
            }
        }
        const { email, senha } = httpRequest.body
        if(!email || !senha){
            return {
                statusCode: 400
            } 
        }
    }
}

describe('Rota de login', () => {
    test('Tem que retornar status 400 se não for enviado o email', () => {
        const sut = new LoginRouter();
        const httpRequest = {
            body: {
                senha: 'qualquer_senha'
            }
        };
        const httpResponse = sut.route(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    })

    test('Tem que retornar status 400 se não for enviado a senha', () => {
        const sut = new LoginRouter();
        const httpRequest = {
            body: {
                email: 'qualquer_email'
            }
        };
        const httpResponse = sut.route(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    })

    test('Tem que retornar status 500 se não for enviado o request por paremetro', () => {
        const sut = new LoginRouter();
        const httpResponse = sut.route();
        expect(httpResponse.statusCode).toBe(500);
    })

    test('Tem que retornar status 500 se não o request não tiver o body', () => {
        const sut = new LoginRouter();
        const httpRequest = {}
        const httpResponse = sut.route(httpRequest);
        expect(httpResponse.statusCode).toBe(500);
    })
})