import fetch from 'isomorphic-unfetch'

/* Data function to retrieve information from API and then return its response */
export default (req, res) => {
    let URL = 'https://rickandmortyapi.com/api/character/'
    if (req.query.page) {
      URL = `https://rickandmortyapi.com/api/character/?page=${req.query.page}`
    }

    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => { // Added timeout to get noticed when data takes time to load
          res.json(data.results)
        }, 2000)
      })
    
    return
}
