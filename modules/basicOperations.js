import { currPath } from "./path.js";
import { checkPath, isFile } from "./checks.js";
import { parseString } from "./parseString.js";
import path from 'path';
import fs from 'fs';

export const cat = (value) => {
    checkPath(value.trim())
      .then((currentPath) => {
        if (isFile(currentPath)) {
          let data = [];
          const readStream = fs.createReadStream(path.join(currentPath));
          readStream.on('data', (chunk) => {
            data.push(chunk.toString());
          });
          readStream.on('error', () => {
            console.log('Operation failed');
          });
          readStream.on('end', () => {
            console.log(data.join(''));
            console.log(`You are currently in ${currPath.currPath}`);
          });
        }
      })
      .catch(() => console.log('Operation failed'));
  };

  export const add = async (value) => {
    const filePath = path.join(currPath.currPath, value.trim());
    const writeStream = fs.createWriteStream(filePath);
    writeStream.on('error', () => {
      console.log('Operation failed');
    });
    writeStream.on('finish', () => {
      console.log(`Created: ${value}`);
      console.log(`You are currently in ${currPath.currPath}`);
    });
    writeStream.close();
  };

  export const rn = (value) => {
    try {
      const parsingString = parseString(value);
      checkPath(parsingString[0]).then((currentPath) => {
        const newFileName = path.join(currPath.currPath, parsingString[1]);
        fs.promises.rename(currentPath, newFileName).then(() => {
          console.log(`Renamed: ${parsingString[0]} to ${parsingString[1]}`);
          console.log(`You are currently in ${currPath.currPath}`);
        });
      });
    } catch (e) {
      console.log('Operation failed');
    }
  };

  export const cp = (value) => {
    try {
      const arrayPath = [];
      const parsingString = parseString(value);
      const fileName = path.basename(parsingString[0]);
  
      arrayPath.push(checkPath(parsingString[0]));
      arrayPath.push(checkPath(parsingString[1]));
  
      Promise.all(arrayPath)
        .then((allPath) => {
          const correctPath = path.join(allPath[1], fileName);
  
          const readStream = fs.createReadStream(allPath[0]);
          const writeStream = fs.createWriteStream(correctPath);
  
          readStream.pipe(writeStream).on('close', () => {
            console.log(`Copied: ${fileName} to ${parsingString[1]}`);
            console.log(`You are currently in ${currPath.currPath}`);
          });
        })
        .catch(() => console.log('Operation failed'));
    } catch (e) {
      console.log('Operation failed');
    }
  };

  export const mv = (value) => {
    try {
      const arrayPath = [];
      const parsingString = parseString(value);
      const fileName = path.basename(parsingString[0]);
  
      arrayPath.push(checkPath(parsingString[0]));
      arrayPath.push(checkPath(parsingString[1]));
  
      Promise.all(arrayPath)
        .then((allPath) => {
          const correctPath = path.join(allPath[1], fileName);
  
          const readStream = fs.createReadStream(allPath[0]);
          const writeStream = fs.createWriteStream(correctPath);
  
          readStream.pipe(writeStream).on('close', () => {
            fs.promises
              .unlink(allPath[0])
              .then(() => {
                console.log(`Movied: ${fileName} to ${parsingString[1]}`);
                console.log(`You are currently in ${currPath.currPath}`);
              })
              .catch(() => console.log('Operation failed'));
          });
        })
        .catch(() => console.log('Operation failed'));
    } catch (e) {
      console.log('Operation failed');
    }
  };

  export const rm = (value) => {
    try {
      checkPath(value.trim()).then((currentPath) => {
        fs.promises.unlink(currentPath).then(() => {
          console.log(`Deleted: ${value}`);
          console.log(`You are currently in ${currPath.currPath}`);
        });
      });
    } catch (e) {
      console.log('Operation failed');
    }
  };