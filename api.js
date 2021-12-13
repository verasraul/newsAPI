import axios from 'axios';

// create a function that queries API and accepts search term as argument
export const search = async (searchTerm) => {
    // create a constant for the url
    const url = `${process.env.API_BASE_URL}?q=${searchTerm}&apiKey=${process.env.API_KEY}`;
    // const url = `${process.env.API_BASE_URL}&category=${searchTerm}&apiKey=${process.env.API_KEY}`;
    // create a constant to wait/hold API response
    const response = await axios.get(url);
    // return response
    return response.data;
}