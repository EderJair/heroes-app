import { Navigate, Route, Routes } from 'react-router-dom'

import { DcPage, HeroesRoutes, MarvelPage } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
    
        <Routes>
            <Route path="/login" element={
              <PublicRouter>
                <LoginPage/>
              </PublicRouter>
            } />
            <Route path="/*" element={
              <PrivateRouter>
                <HeroesRoutes/>
              </PrivateRouter>
            } />
            
             {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
    
    
    
    
    
    
    </>
  )
}
