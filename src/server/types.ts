export type MailingList = {
  id: string;
  name: string;
  spreadsheetId: string;
  sheetId: number;
  headers: string[];
  headerRange: string;
};

export type Template = {
  subject: string;
  body: string;
  type: "GMail" | "Custom";
  id: string;
};

export type CreateMailingListInput = {
  name: string;
  columns: string[];
};
