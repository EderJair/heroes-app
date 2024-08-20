import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en el authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false})


        
    })
    
    test('debe de autenticar el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Jair',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: action.payload})
                
        
    })
    
    test('debe de realizar el logout del usuario', () => {


        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Jair'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action )

        console.log(newState)

        expect(newState).toEqual({...state, logged: false})
        
    })




})