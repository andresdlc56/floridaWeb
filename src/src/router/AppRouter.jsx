import { Navigate, Route, Routes } from "react-router-dom";

//Componentes
import { Navbar } from "../ui";
import { Home, Nosotros } from "../components";

export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="nosotros" element={ <Nosotros /> } />

                    {/* Ruta por defecto */}
                    <Route path="/*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </>
    )
}
