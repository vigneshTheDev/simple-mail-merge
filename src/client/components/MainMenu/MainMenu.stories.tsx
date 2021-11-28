import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainMenu } from './MainMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MainMenu',
  component: MainMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainMenu>;

export const MainMenuComponent = () => <MainMenu />;
