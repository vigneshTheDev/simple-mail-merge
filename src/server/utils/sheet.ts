export function isSheetEmpty() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const rows = sheet.getLastRow();
  const columns = sheet.getLastColumn();

  console.log("row", rows, columns);

  return rows === 0 && columns === 0;
}

export function generateSheetName(name: string) {
  const sheetNames = SpreadsheetApp.getActive()
    .getSheets()
    .map((s) => s.getSheetName());

  let suffix = 1;
  let suffixedName = name;
  while (sheetNames.includes(suffixedName)) {
    suffixedName = `${name} ${suffix}`;
    suffix++;
  }

  return suffixedName;
}
