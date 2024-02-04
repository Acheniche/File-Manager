import fs from 'fs/promises';
import path from 'path';
import { currPath } from './path.js';
import { checkPath, isFile } from './checks.js';


export const up = () => {
    const newPath = currPath.currPath.split(path.sep).slice(0, -1);
    if (newPath.length > 0) {
        currPath.currPath = newPath.join(path.sep);
    }
    console.log(`You are currently in ${currPath.currPath}`);
};

export const cd = (value) => {
    checkPath(value).then((current) => {
        if (!isFile(current)) {
            currPath.currPath = current;
        }
        console.log(`You are currently in ${currPath.currPath}`);
    }).catch(() => console.log('Operation failed'));
};

export const ls = () => {
    fs.readdir(currPath.currPath)
    .then((files) => {
      console.log(files);
      console.log(`You are currently in ${currPath.currPath}`);
    })
    .catch(() => console.log('Operation failed'));
};