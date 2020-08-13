const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=66117b36257d4797c3ba19b51a5e966d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    request({ url, json: true}, (error, {body} = {}) => {
             if(error){
               callback('Unable to connect to weather service!', undefined)
             }else if(body.error) {
               callback('Unable to find location', undefined)
             }else{
               //console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degree out. It feels like " + response.body.current.feelslike + " degree out.")
               callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degree out. It feels like " + body.current.feelslike + " degree out. Humidity is "+ body.current.humidity +"%. Wind speed is " + body.current.wind_speed + "kmph and Pressure is " + body.current.pressure +"mb")
             }
         })
}
module.exports = forecast