const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Testes', () => {

    describe('gerarNumeroAleatorio', () => {

        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test('inicio não pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 20))
                .toBe(-1);
        });

        test('gerando um número válido >= 10', () => {
            expect(gerarNumeroAleatorio(10, 40))
                .toBeGreaterThanOrEqual(10);
        });

        test('gerando um número válido <= 40', () => {
            expect(gerarNumeroAleatorio(10, 40))
                .toBeLessThanOrEqual(40);
        });

    });

    describe('acharCaracter', () => {

        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        test('comprimento diferente', () => {
            expect(acharCaracter(8, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });

        test('caracter encontrado', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe(3);
        });

        test('caracter não encontrado', () => {
            expect(acharCaracter(5, 'abcde', 'f'))
                .toBe('caracter nao encontrado');
        });

    });
});
