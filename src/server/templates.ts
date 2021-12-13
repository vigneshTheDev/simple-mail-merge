import { TEMPLATES_KEY } from "./constants";
import { Template } from "./types";
import { getUserProperty } from "./utils/properties";

export function getTemplates(): Template[] {
  return [
    ...getGmailTemplates(),
    // Custom templates to go here
  ];
}

function getGmailTemplates(): Template[] {
  const messages = GmailApp.getDraftMessages();
  return messages.map((m) => ({
    id: m.getId(),
    body: m.getBody(),
    subject: m.getSubject(),
    type: "GMail",
  }));
}
