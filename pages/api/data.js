import fetch from 'isomorphic-unfetch'

export default (req, res) => {
    let URL = 'https://rickandmortyapi.com/api/character/'
    if (req.query.page) {
      URL = `https://rickandmortyapi.com/api/character/?page=${req.query.page}`
    }

    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {
          res.json(data.results)
        }, 2000)
      })
    
    return
}
