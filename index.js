import dotenv from "dotenv";
dotenv.config();

import { search } from "./api";
import { appendMovies, clearMovies, setMessage } from "./ui";
// import { appendMovies, clearMovies, setMessage } from "./ui";import { appendMovies, clearMovies, setMessage } from "./ui";


(() => {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById("search-pane-input").value;
         // before each search, clear the movies
         clearMovies();
        //  set a search message to display
         setMessage('searching for movies, please wait...')
         
        search(searchTerm)
            .then((response) => {
                // check if the API's response property is 'true'
                if (response.Response === 'True') {
                    // clear search message
                    setMessage();
                    // if true, retrieve the results, append the movies from the API's response search property
                    appendMovies(response.Search)
                    
                    // otherwise, communicate that there's an error
                }   else {
                    // set custom error message for none yielding results
                    setMessage('could not find any matches, please refine your search term')
                }
            })
            // create function to catch unexpected errors
            .catch((error) => {
                setMessage('unexpected error occured, please try again later.');
            });
    };

    window.addEventListener("load", () => {
        document
            .getElementById("search-pane-button")
            .addEventListener("click", handleSearchButtonClick);
    });
})();