import { up, cd, ls } from "./modules/nwd.js";
import { cat, add } from "./modules/basicOperations.js";

export const commands = (command) => {
    switch (true) {
        case 'up' === command.substring(0, 2):
            up();
          break;
        case 'cd ' === command.substring(0, 3):
            cd(command.substring(3));
          break;
        case 'ls' === command.substring(0, 2):
            ls();
          break;
        case 'cat' === command.substring(0, 3):
            cat(command.substring(3));
          break;
        case 'add' === command.substring(0, 3):
            add(command.substring(3));
          break;
        case 'rn' === command.substring(0, 2):
            rn(command.substring(2).trim());
          break;
        case 'cp' === command.substring(0, 2):
            cp(command.substring(2).trim());
          break;
        case 'mv' === command.substring(0, 2):
            mv(command.substring(2).trim());
          break;
        case 'rm' === command.substring(0, 2):
            rm(command.substring(2).trim());
          break;
        case 'os' === command.substring(0, 2):

          break;
        case 'hash ' === command.substring(0, 5):

          break;
        case 'compress' === command.substring(0, 8):

          break;
        case 'decompress' === command.substring(0, 10):

          break;
    default: console.error('Invalid input')
    }     
};