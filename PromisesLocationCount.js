import SitelistApiClient from './apiClients/sitelistApiClient.js'

const sitelistApiClient = new SitelistApiClient();



// TODO:2 use locationPromise.then() to display a count of the locations



let locationPromise = sitelistApiClient.getLocations();
locationPromise.then(
    locationsList =>
            console.log("We have " + locationsList.length + " locations")
);