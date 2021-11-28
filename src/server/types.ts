export type MailingList = {
  id: string;
  name: string;
  spreadsheetId: string;
  sheetId: number;
  headers: string[];
  headerRange: string;
};
