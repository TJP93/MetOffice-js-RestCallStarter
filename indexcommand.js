import {LIST_OF_LOCATIONS, GET_FORECAST, EXIT, getParsedCommand} from "./command.js"
import { readFileSync } from 'fs';

const data = readFileSync("./resources/sitelist.json", 'utf-8');
const siteList = JSON.parse(data);

displayWelcomeMessage();
while (true) {
    processCommand();
}

function processCommand() {
    const command = getParsedCommand();
    // TODO : log the command, info
    if (command.type === EXIT) {
        process.exit(0);
    } else if (command.type === LIST_OF_LOCATIONS) {
        listLocations();
    } else if (command.type === GET_FORECAST) {
        getForecast(command.location);
    }
}

function displayWelcomeMessage() {
    console.log('\nWelcome to my Forecast Application!');
    console.log('=========================');
}

function listLocations() {
    console.log(`There are ${siteList.Locations.Location.length} locations available. `);
}

function getForecast(location) {
    console.log("Get forecast not implemented", location);
}

