// @ts-ignore
global.onOpen = () => {
  SpreadsheetApp.getUi().createMenu('SMM').addItem('Launch Addon', 'openAddon').addToUi();
};

// @ts-ignore
global.openAddon = () => {
  const html = HtmlService.createHtmlOutputFromFile('app.html');
  SpreadsheetApp.getUi().showSidebar(html.setTitle('Html'));
};
