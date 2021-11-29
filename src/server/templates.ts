import { TEMPLATES_KEY } from "./constants";
import { Template } from "./types";
import { getUserProperty } from "./utils/properties";

export function getTemplates(): Template[] {
  return getUserProperty(TEMPLATES_KEY) || [];
}
