import axios from 'axios';

/*
* Simple fetch function using axios to get characters array
    used in index.js file
*/
export const fetchData = async () => await axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => ({
        error: false,
        data: res.data.results,
    }))
    .catch(() => ({
        error: true,
        data: null,
    }),
    );