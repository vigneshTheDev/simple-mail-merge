import { MAILING_LIST_KEY } from "./constants";
import { CreateMailingListInput, MailingList } from "./types";
import { getUserProperty, setUserProperty } from "./utils/properties";
import { generateSheetName, isSheetEmpty } from "./utils/sheet";

export function getMailingLists() {
  const mailingLists = getUserProperty<MailingList[]>(MAILING_LIST_KEY);
  return mailingLists || [];
}

export function setMailingLists(mailingLists: MailingList[]) {
  setUserProperty<MailingList[]>(MAILING_LIST_KEY, mailingLists);
}

export function insertMailingList(mailingList: CreateMailingListInput) {
  const mailingLists = getMailingLists();
  const isEmpty = isSheetEmpty();
  let sheet = SpreadsheetApp.getActiveSheet();

  if (!isEmpty) {
    const sheetName = generateSheetName(mailingList.name);
    sheet = SpreadsheetApp.getActive().insertSheet(sheetName);
  }

  const headerRange = sheet.getRange(1, 1, 1, mailingList.columns.length);
  const namedHeaderRangeName = `SimpleMailMerge_Header_${sheet.getSheetId()}`;

  SpreadsheetApp.getActive().setNamedRange(namedHeaderRangeName, headerRange);

  headerRange.setValues([mailingList.columns]);

  const newMailingList: MailingList = {
    id: Utilities.getUuid(),
    headerRange: namedHeaderRangeName,
    headers: mailingList.columns,
    name: mailingList.name,
    sheetId: sheet.getSheetId(),
    spreadsheetId: SpreadsheetApp.getActive().getId(),
  };

  mailingLists.push(newMailingList);
  setMailingLists(mailingLists);
}
