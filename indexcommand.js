displayWelcomeMessage();
while (true) {
    processCommand(bank);
}

function processCommand(bank) {
    const command = getParsedCommand();
    // TODO : log the command, info
    if (command.type === EXIT) {
        process.exit(0);
    } else if (command.type === LIST_ALL) {
        listAllAccounts(bank);
    } else if (command.type === LIST_ACCOUNT) {
        listOneAccount(command.account, bank);
    }
}

function displayWelcomeMessage() {
    console.log('\nWelcome to SupportBank!');
    console.log('=========================');
}

