import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://shazam.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
});
