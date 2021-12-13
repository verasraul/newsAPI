import dotenv from "dotenv";
dotenv.config();

import { search } from "./api";
import { appendArticles, clearArticles, setMessage } from "./ui";
// import { appendArticles, clearMovies, setMessage } from "./ui";import { appendArticles, clearMovies, setMessage } from "./ui";


(() => {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById("search-pane-input").value;
         // before each search, clear the headlines
         clearArticles();
        //  set a search message to display
         setMessage('searching for head lines, please wait...')
         
        search(searchTerm)
            .then((response) => {
                console.log(response);
                // check if the API's response property is 'true'
                if (response.status === 'ok') {
                    // clear search message
                    setMessage();
                    // if true, retrieve the results, append the movies from the API's response search property
                    appendArticles(response.articles)
                    
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