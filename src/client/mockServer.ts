import { GASApi } from '../server/globalExports';
import { MailingList } from '../server/types';
import { mailingListMock } from './mocks/mailing-list.mock';

function getMailingLists(): MailingList[] {
  return mailingListMock;
}

export const mockServer: GASApi = {
  onOpen: () => {},
  openAddon: () => {},
  getMailingLists,
};

(window as any).google = {
  script: {
    get run() {
      return new ChainedRun();
    },
  },
};

class ChainedRun {
  private failureHandler: (err: Error) => void;
  private successHandler: (response: any) => void;
  [key: string]: any;

  constructor() {
    this.failureHandler = () => {};
    this.successHandler = () => {};

    Object.keys(mockServer).forEach((key) => {
      this[key] = this.runFn.bind(this, mockServer[key as keyof typeof mockServer]);
    });
  }

  withFailureHandler(handler: (err: Error) => void) {
    this.failureHandler = handler;
    return this;
  }

  withSuccessHandler(handler: (response: any) => void) {
    this.successHandler = handler;
    return this;
  }

  private runFn(fn: () => any) {
    try {
      const response = fn();
      this.successHandler(response);
    } catch (ex: any) {
      this.failureHandler(ex);
    }
    return this;
  }
}
