import { up, cd, ls } from "./modules/nwd.js";
import { cat, add, rn, cp, mv, rm } from "./modules/basicOperations.js";
import { OS } from "./modules/os.js";
import { hashCalculation } from "./modules/hash.js";
import { compress, decompress } from "./modules/zip.js";

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
            OS(command.substring(2).trim());
          break;
        case 'hash ' === command.substring(0, 5):
            hashCalculation(command.substring(5));
          break;
        case 'compress' === command.substring(0, 8):
            compress(command.substring(8).trim());
          break;
        case 'decompress' === command.substring(0, 10):
            decompress(command.substring(10).trim());
          break;
    default: console.error('Invalid input')
    }     
};