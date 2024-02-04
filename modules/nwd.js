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

export const ls = async () => {
    try {
        const files = await fs.readdir(currPath.currPath, { withFileTypes: true });
        console.table(
            files.map((item) => {
                    return {
                        Name: item.name,
                        Type: item.isDirectory() ? 'directory' : 'file',
                    };
                })
                .sort((a, b) => {
                    if (a.Type === 'directory' && b.Type === 'file') {
                        return -1;
                    }
                    if (a.Type === 'file' && b.Type === 'directory') {
                        return 1;
                    }
                    return a.Name.localeCompare(b.Name);
                }),
        );
        console.log(`You are currently in ${currPath.currPath}`);
    } catch {
        console.log('Operation failed')
    }

};