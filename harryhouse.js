const  request = require('request')

const hat = (callback) => {
    const url  = 'https://www.potterapi.com/v1/sortingHat'   
    request({ url: url, json: true }, (error,response) => {
       callback(
           response.body 
       )
   })
}

module.exports =  hat