import { render, screen} from "@testing-library/react"
// solucion 'screen' this page: https://github.com/testing-library/react-testing-library/issues/1341

import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRouter } from "../../src/router/PublicRouter"
import { MemoryRouter, Route, Routes } from "react-router-dom"



describe('Pruebas en PublicRoute', () => {

    test('debe de mostrar el children si no se autentico', () => {

        const contextValue = {
            logged: false,
        }



        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Publica')).toBeTruthy()


    })

    test('no debe de mostrar el componente si esta autenticado', () => {

        const contextValue = {
            logged: true,
        }


        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta Publica</h1>
                            </PublicRouter>
                        }/>
                        <Route path="marvel" element={<h1>Pagina de Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )


        expect(screen.getByText('Pagina de Marvel')).toBeTruthy()

    })


})