const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_spotter/iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    // Process the successful response
    console.log(JSON.parse(body));
  })
  .catch(error => {
    // Handle errors
    console.error('Error in promise chain:', error.message);
  });

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch(error => {
    console.error('Error in nextISSTimesForMyLocation:', error.message);
  });
