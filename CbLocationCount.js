

import SitelistApiClient from './apiClients/sitelistApiCbClient.js'

const sitelistApiClient = new SitelistApiClient();

// TODO:1 implement using callback function
sitelistApiClient.getLocations(
      // supply a function expecting one argument: locationList
      // the function should display the contents of the list
      function (locations) {
        console.log(`We have ${locations.length} locations.` );
      }
);

// TODO:1 implement using arrow function
sitelistApiClient.getLocations(
     // supply a function expecting one argument: locationList
     // the function should display the contents of the list
     locations => 
        console.log(`We have ${locations.length} locations.`)
);


// TODO:1 add an error handler
sitelistApiClient.getLocations(
    // supply a function expecting one argument: locationList
    // the function should display the contents of the list
    locations => 
        console.log(`We have ${locations.length} locations.`),
    // supply a second function, the error handler
    // test by amending getLocations() to fail
    error =>
        console.log(`Failure - ${error}`)
);








