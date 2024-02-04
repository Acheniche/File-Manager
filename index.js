import {stdin as input, stdout as output} from 'process';
import * as readline from 'readline';
import { commands } from './commands.js';
import { getName } from './modules/getName.js';
import { currPath } from './modules/path.js';

console.log(`Welcome to the File Manager, ${getName()}!`);
console.log(`You are currently in ${currPath.currPath}`);

const read = readline.createInterface({input, output});

read.on('line', (input) => {
    if(input.trim() === '.exit') {
        console.log(`Thank you for using File Manager, ${getName()}, goodbye!`);
        read.close();
    } else {
        try {
            commands(input);
        } catch (error) {
            console.log('Operation failed');
        }
    }
});

read.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${getName()}, goodbye!`);
    read.close();
});