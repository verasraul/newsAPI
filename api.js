import axios from 'axios';

// create a function that queries API and accepts search term as argument
export const search = async (searchTerm) => {
    // create a constant for the url
    const url = `${process.env.API_BASE_URL}/?s=${searchTerm}&apikey=${process.env.API_KEY}`;
    // create a constant to wait/hold API response
    const response = await axios.get(url);
    // return response
    return response.data;
}