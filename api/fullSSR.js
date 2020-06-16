import axios from 'axios';

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