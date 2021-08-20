"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

//{
//   "id": "address.2053133472518926",
//   "type": "Feature",
//   "place_type": [
//     "address"
//   ],
//   "relevance": 1,
//   "properties": {
//     "accuracy": "rooftop"
//   },
//   "text_en-US": "Pioneer Parkway",
//   "place_name_en-US": "1000 Pioneer Parkway, Arlington, Texas 76013, United States",
//   "text": "Pioneer Parkway",
//   "place_name": "1000 Pioneer Parkway, Arlington, Texas 76013, United States",
//   "matching_text": "W Pioneer Pkwy",
//   "matching_place_name": "1000 W Pioneer Pkwy, Arlington, TX 76013, United States",
//   "center": [
//     -97.118365,
//     32.708163
//   ],
//   "geometry": {
//     "type": "Point",
//     "coordinates": [
//       -97.118365,
//       32.708163
//     ]
//   },
//   "address": "1000",
//   "context": [
//     {
//       "id": "neighborhood.34380",
//       "text_en-US": "West",
//       "text": "West"
//     },
//     {
//       "id": "postcode.16168460226425900",
//       "text_en-US": "76013",
//       "text": "76013"
//     },
//     {
//       "id": "place.7404893743641700",
//       "wikidata": "Q17943",
//       "text_en-US": "Arlington",
//       "language_en-US": "en",
//       "text": "Arlington",
//       "language": "en"
//     },
//     {
//       "id": "district.8287042856205950",
//       "wikidata": "Q110412",
//       "text_en-US": "Tarrant County",
//       "language_en-US": "en",
//       "text": "Tarrant County",
//       "language": "en"
//     },
//     {
//       "id": "region.12968715825342410",
//       "wikidata": "Q1439",
//       "short_code": "US-TX",
//       "text_en-US": "Texas",
//       "language_en-US": "en",
//       "text": "Texas",
//       "language": "en"
//     },
//     {
//       "id": "country.19678805456372290",
//       "wikidata": "Q30",
//       "short_code": "us",
//       "text_en-US": "United States",
//       "language_en-US": "en",
//       "text": "United States",
//       "language": "en"
//     }
//   ]
// }
// 1000 Pioneer Parkway, Arlington, Texas 76013, United States