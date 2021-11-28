import { tryParse, tryStringify } from './json';
type GASProperties = GoogleAppsScript.Properties.Properties;

export function setUserProperty<T>(key: string, data: T) {
  const properties = getUserProperties();
  setProperty<T>(properties, key, data);
}

export function getUserProperty<T>(key: string) {
  const properties = getUserProperties();
  return getProperty<T>(properties, key);
}

export function setScriptProperty<T>(key: string, data: T) {
  const properties = getScriptProperties();
  return setProperty<T>(properties, key, data);
}

export function getScriptProperty<T>(key: string) {
  const properties = getScriptProperties();
  return getProperty<T>(properties, key);
}

function setProperty<T>(properties: GASProperties, key: string, data: T) {
  const stringifiedData = tryStringify(data);

  if (stringifiedData != null) {
    properties.setProperty(key, stringifiedData);
  }
}

function getProperty<T>(properties: GASProperties, key: string): T | null {
  const stringifiedData = properties.getProperty(key);
  return stringifiedData != null && tryParse(stringifiedData);
}

function getUserProperties() {
  return PropertiesService.getUserProperties();
}

function getScriptProperties() {
  return PropertiesService.getScriptProperties();
}
