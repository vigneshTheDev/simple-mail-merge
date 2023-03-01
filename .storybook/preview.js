import 'antd/dist/antd.min.css';
import '../src/client/mockServer';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      gsheets: {
        name: 'GSheets',
        styles: {
          width: '332px',
          height: '832px',
          padding: '0',
        },
        type: 'desktop',
      },
    },
    defaultViewport: 'gsheets',
  },
};
