export const onOpen = () => {
  SpreadsheetApp.getUi().createMenu('SMM').addItem('Launch Addon', 'openAddon').addToUi();
};

export const openAddon = () => {
  const html = HtmlService.createHtmlOutputFromFile('app.html');
  SpreadsheetApp.getUi().showSidebar(html.setTitle('Simple Mail Merge'));
};
