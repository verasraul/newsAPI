// create a function to displace a standard img when movie titles don't retrieve poster imgs
  const FALLBACK_POSTER_URL = "https://thumbs.dreamstime.com/b/movie-film-company-logo-design-vector-template-movie-film-company-logo-design-inspiration-vector-template-167661473.jpg";

//   function that clears the results 
    // no argument function
export const clearMovies = () => {
    //   reference from the list
      const list = document.getElementById("search-results");
      // remove child from list
        while (list.firstChild) {
            list.firstChild.remove();
        };
  };


//   helper function to create list item
const createListItem = (title, year, poster) => {
    // create constant to hold the caption of the image
    const caption = `${year}, ${title}`;

    // create element for the img above
    const captionNode = document.createElement("figcaption");
        // append text tool child to the element of the caption
        captionNode.appendChild(document.createTextNode(caption));

    // element for poster image
    const posterNode = document.createElement('img');
        // alternative text tool child for img element
        posterNode.setAttribute('alt', caption);
        // class to style img element
        posterNode.setAttribute('class', 'search-results-item-poster');
        // set the source attritube to add the poster url
        posterNode.setAttribute('src', poster); 

    // assemble/create figure node
    const figureNode = document.createElement('figure');
        // append the poster node to figure
        figureNode.appendChild(posterNode);
        // append the caption node to figure
        figureNode.appendChild(captionNode);

    // create the actual list item
    const listItemNode = document.createElement('li');
        // create class to style list item
        figureNode.setAttribute('class', 'search-results-items');
        // append figure node to list
        listItemNode.appendChild(figureNode);

        return listItemNode;
};


// create a function that accepts movies array as an argument
export const appendMovies = (movies) => {
    // for each element grab the referenced list
    const list = document.getElementById("search-results");

    // iterate through array & for each movie, create a list item node
    movies.forEach((movie) => { 
      // creat function to display fallback img when movie titles don't retrieve post imgs
      const moviePoster = movie.Poster && movie.Poster != 'N/A' ?  movie.Poster : FALLBACK_POSTER_URL;
      // create list-item-nodes passing keys/items from objects in JSON array (ie. response you get from API requests)
      const listItemNode = createListItem(movie.Title, movie.Year, moviePoster);
        // append list items for each element
        list.appendChild(listItemNode);
    });
}

// create extension function for error message
export const setMessage = (message) => {
  // find error message element in HTML and replace text with what we decide to pass through
  document.getElementById('search-pane-message').textContent = message;
}