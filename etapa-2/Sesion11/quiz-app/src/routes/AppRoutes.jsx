import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../containers/About";
import Home from "../containers/Home";
import Quiz from "../containers/Quiz";




function AppRoutes() {
    return (
    <ChakraProvider>
        <Router>
            <Navbar />
            <Routes>
                {/* Rutas Publicas */}
                <Route path="/" element={<Home />}  />
                <Route path="/about" element={<About />} />
                <Route path="/quiz" element={<Quiz />} />

                {/* Redireccionamiento */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

        </Router>
    </ChakraProvider>
    )
}

export default AppRoutes;