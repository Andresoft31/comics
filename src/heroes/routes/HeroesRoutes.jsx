import { Navigate,Route, Routes } from "react-router-dom"
import { DcPage, HeroPage,MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (


    <>
        
        <div className="container mt-4">
            <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    </>

  )
}
