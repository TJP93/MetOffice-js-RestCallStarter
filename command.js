import { prompt } from 'readline-sync';

export const ENTER_DESIRED_LOCATION = 1;
export const GET_FORECAST = 2;
export const EXIT = 3;


class Command {
    constructor(type, account) {
        this.type = type;
        this.account = account;
    }
}

function promptForCommand() {
    console.log('\nAvailable commands:');
    console.log(' - List All');
    console.log(' - List <Account>');
    console.log(' - Exit');
    console.log(' - Test');
    console.log('\nPlease enter your command:');
    return prompt();
}

function parseCommand(command) {
    if (command.toLowerCase() === 'exit') {
        return new Command(EXIT);
    }   else if (command.toLowerCase() === 'test') {
        return new Command(TEST);
    }                                               {
    } if (command.toLowerCase() === 'list all') {
        return new Command(LIST_ALL);
    } else if (command.toLowerCase().startsWith('list ')) {
        const account = command.slice(5);
        return new Command(LIST_ACCOUNT, account);
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
