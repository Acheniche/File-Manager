import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { currPath } from './path.js';
import { checkPath } from './checks.js';

export const hash = async (path) => {
    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream(path);
    readStream.on('data', (chunk) => hash.update(chunk));
    readStream.on('end', () => {
      console.log(hash.digest('hex'));
      console.log('You are currently in ' + currPath.currPath);
    });
};

export const hashCalculation = (value) => {
    checkPath(value)
      .then((currentPath) => {
        hash(path.join(currentPath));
      })
      .catch(() => {
        console.log('Operation failed');
        console.log('You are currently in ' + currPath.currPath);
    });
};