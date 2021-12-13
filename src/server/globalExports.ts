import { getMailingLists, insertMailingList } from "./mailingLists";
import { getTemplates } from "./templates";
import { onOpen, openAddon } from "./triggers";

const api = {
  onOpen,
  openAddon,
  getMailingLists,
  getTemplates,
  insertMailingList,
};

type ApiKeys = keyof typeof api;

export type GASApi = typeof api;
export type GASApiAsPromised = {
  [key in ApiKeys]: (...args: Parameters<typeof api[key]>) => Promise<ReturnType<GASApi[key]>>;
};

export default api;
