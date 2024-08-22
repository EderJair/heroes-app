import { render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { AppRouter } from "../../../src/router/AppRouter"
import { Navbar } from "../../../src/ui"

describe('Pruebas en el componente NavBar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Jair'
        },
        logged: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })


    test('debe de mostrar el nombre del usuario logeado', () => {

        render(
                <AuthContext.Provider value={contextValue}>
                    <MemoryRouter>
                        <Navbar/>
                    </MemoryRouter>
                </AuthContext.Provider>
        )

        expect(screen.getByText('Jair')).toBeTruthy()

    })


    test('should first', () => { second })














})