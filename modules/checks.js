import fs from 'fs/promises';
import path from 'path';
import { currPath } from './path.js';

export const isFile = (value) => {
    return value.includes('.') ? true : false;
};

export const checkPath = (value) => {
    return new Promise((resolve, reject) => {
      const currentPath = path.join(currPath.currPath, value);
      const fullPath = path.join(value);
      fs.access(currentPath)
        .then(() => {
          resolve(currentPath);
        })
        .catch(() => {
          fs.access(fullPath)
            .then(() => {
              resolve(fullPath);
            })
            .catch(() => console.log('Operation failed'));
        });
    });
  };