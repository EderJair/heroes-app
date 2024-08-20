import { types } from "../../../src/auth/types/types"

describe('Pruebas en los Types', () => {

    test('debe de regresar estos types', () => {

        expect(types).toEqual({
            login: '[auth] login',
            logout: '[auth] logout',
        })

    })




})