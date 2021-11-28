import { GASApiAsPromised } from '../server/globalExports';
import { sortedIndexOf } from 'lodash';

const exceptions = ['withFailureHandler', 'withLogger', 'withSuccessHandler', 'withUserObject'].sort();
const _server = {} as any;

declare const google: any;

const fns = Object.keys(google.script.run).filter((fn) => sortedIndexOf(exceptions, fn) === -1);

fns.forEach((fn: any) => {
  _server[fn] = (...args: any[]) => {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler(reject)
        [fn](...args);
    });
  };
});

export const server = _server as GASApiAsPromised;
