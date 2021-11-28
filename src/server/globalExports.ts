import { getMailingLists } from './mailingLists';
import { onOpen, openAddon } from './triggers';

const api = {
  onOpen,
  openAddon,
  getMailingLists,
};

type ApiKeys = keyof typeof api;

export type GASApi = typeof api;
export type GASApiAsPromised = {
  [key in ApiKeys]: (...args: Parameters<typeof api[key]>) => Promise<ReturnType<GASApi[key]>>;
};

export default api;
