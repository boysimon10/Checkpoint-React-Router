import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* Structure de la barre de navigation en utilisant les classes Tailwind CSS */}
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">

                <div className="mb-2 sm:mb-0">
                    <p
                        href="#"
                        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark ml-11"
                    >
                        MangaPlus
                    </p>
                </div>
                {/* Section des liens de navigation */}
                <div>
                    {/* Utilisation de Link de react-router-dom pour naviguer vers la route racine */}
                    <Link to={`/`}>
                        {/* Lien de navigation avec des styles */}
                        <p
                            className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                            Accueil
                        </p>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

// Export du composant Navbar
export default Navbar;
