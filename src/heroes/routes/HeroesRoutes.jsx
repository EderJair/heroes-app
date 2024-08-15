import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage } from "../pages"
import { SearchPage } from "../pages/SearchPage"
import { HerosPage } from "../pages/HerosPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>


        <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="/marvel" replace/>} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero/:id" element={<HerosPage/>}/>
                <Route path="/*" element={<Navigate to="/marvel" replace/>} />
            </Routes>
        </div>
        
    </>
  )
}
