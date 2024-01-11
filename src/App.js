import React from "react";
import Home from "./components/Home";
import Movie from './components/Movie'
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";

function App(){
    return(
        <div>
            {/* Utilisation de Routes pour définir les itinéraires de l'application */}
            <Routes>
                {/* Itinéraire pour la page d'accueil */}
                <Route path="/" element={<Home />} />
                {/* Itinéraire pour la page de détails du film avec un paramètre d'ID */}
                <Route path="/Movie/:id" element={<Movie />} />
                {/* Route catch-all pour gérer les pages inconnues */}
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}
export default App;