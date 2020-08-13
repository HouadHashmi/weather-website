const request = require('postman-request')


const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG91ZGhhc2htaSIsImEiOiJja2RvcTByZmkwb2Q3MnJxcXl4MWJrdXVrIn0.TYiQ-SmXROQX9MP7s4o5ZQ&limit=1'
    
    request({ url, json: true }, (error, {body} = {}) => {
        if(error){
           callback('Unable to connect to location services!')
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
