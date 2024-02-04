import {stdin as input, stdout as output} from 'process';
import * as readline from 'readline';
import { commands } from './commands';

console.log(`Welcome to the File Manager, ${2}!`);
console.log(`You are currently in ${1}`);

const read = readline.createInterface({input, output});

read.on('line', (input) => {
    if(input.trim() === '.exit') {
        console.log(`Thank you for using File Manager, ${test}, goodbye!`);
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
    console.log(`Thank you for using File Manager, ${test}, goodbye!`);
    read.close();
});