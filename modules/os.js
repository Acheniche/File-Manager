import os from 'os';
import { currPath } from './path.js';

export const OS = (value) => {
    switch (value) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        break;
      case '--cpus':
        try {
            const cpusAll = os.cpus();
            const cpus = cpusAll.map((cpu) => {
              return {
                model: cpu.model,
                speed:
                  cpu.speed > 1000
                    ? cpu.speed / 1000 + ' GHz'
                    : cpu.speed / 10 + ' GHz',
              };
            });
            console.log('Number of CPU: ' + os.cpus().length);
            console.log('Model CPU: ' + os.cpus()[0].model);
            console.log(cpus);
          } catch (e) {
            console.log('Operation failed');
          }
        break;
      case '--homedir':
        console.log(os.homedir());
        break;
      case '--username':
        console.log(os.userInfo().username);
        break;
      case '--architecture':
        console.log(os.arch());
        break;
      default:
        console.error('Invalid input');
    }
    console.log(`You are currently in ${currPath.currPath}`);
  };

