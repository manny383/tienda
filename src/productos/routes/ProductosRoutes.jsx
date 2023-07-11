import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
//import { RegisterPage } from '../../auth/pages/RegisterPage';
import { CalzadoPage, HeroPage, BlusasPage, SearchPage } from '../pages';
import { PantalonesPage } from '../pages/PantalonesPage';
import { NewProduct } from '../views/NewProduct';

export const ProductosRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="blusas" element={<BlusasPage />} />
                <Route path="pantalones" element={<PantalonesPage />} />
                <Route path="calzado" element={<CalzadoPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                <Route path="new" element={<NewProduct />} />
                                

                <Route path="/" element={<Navigate to="/blusas" />} />

            </Routes>
        </div>


    </>
  )
}
