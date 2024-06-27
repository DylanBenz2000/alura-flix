import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import NotFound from "./pages/NotFound/NotFound"
import Cabecera from "./components/Cabecera/Cabecera"
import Footer from "./components/Footer/Footer"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo"
import VerVideo from "./components/VerVideo/VerVideo"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Cabecera />
                    
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/videos/:id" element={<VerVideo />} />
                <Route path="*" element={<NotFound />}/>
                <Route path="/nuevo-video" element={<NuevoVideo />} />
            </Routes>
            
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes