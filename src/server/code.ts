import api from "./globalExports";

// @ts-ignore
global.onOpen = api.onOpen;
// @ts-ignore
global.openAddon = api.openAddon;
// @ts-ignore
global.getMailingLists = api.getMailingLists;
// @ts-ignore
global.getTemplates = api.getTemplates;
