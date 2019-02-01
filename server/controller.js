const axios = require("axios")

let characters = []

const getCharacters = (req, res, next) => {
  axios("https://www.breakingbadapi.com/api/characters") 
    .then( response => {
      // console.log(response)
      characters = response.data
      res.status(200).json( characters )
      }
    )
    // .catch(err => {console.log("Error", err).res.status(500)})
}

module.exports = {
  getCharacters
}