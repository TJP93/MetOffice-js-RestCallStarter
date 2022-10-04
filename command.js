import { prompt } from 'readline-sync';

export const LIST_OF_LOCATIONS = 1;
export const GET_FORECAST = 2;
export const EXIT = 3;


class Command {
    constructor(type, location) {
        this.type = type;
        this.location = location;
    }
}

function promptForCommand() {
    console.log('\nAvailable commands:');
    console.log(' - List');
    console.log(' - Forecast ');
    console.log(' - Exit');
    console.log('\nPlease enter your command:');
    return prompt();
}

function parseCommand(command) {
    if (command.toLowerCase() === 'exit') {
        return new Command(EXIT);
    } else if (command.toLowerCase() === 'list') {
        return new Command(LIST_OF_LOCATIONS);

    } else if (command.toLowerCase().startsWith('forecast ')) {
        const location = command.slice(9);
        return new Command(GET_FORECAST, location);
    } else {
        return undefined;
    }
}

export function getParsedCommand() {
    let command;
    do {
        command = parseCommand(promptForCommand());
    } while (command === undefined && (console.log('Please enter a valid command') || true));
    return command;
}
