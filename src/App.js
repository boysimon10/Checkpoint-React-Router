import React from "react";
import Home from "./components/Home";
import Movie from './components/Movie'
import { Route, Routes } from "react-router-dom";

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movie/:id" element={<Movie />} />
            </Routes>
        </div>
    );
}
export default App;