import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { Stepper, StepperProps } from './Stepper';
import { GSheetSidebarWithLayout } from '../GSheetSidebarForStories/GSheetSidebarWithLayout';
import { Card } from '../Card/Card';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => {
  const { activeKey: _activeKey, onChangeActiveKey: _, ...restArgs } = args;
  const [activeKey, setActiveKey] = useState<string>(_activeKey);
  return (
    <GSheetSidebarWithLayout>
      <Card>
        <Stepper activeKey={activeKey} onChangeActiveKey={(k) => setActiveKey(k)} {...restArgs}></Stepper>
      </Card>
    </GSheetSidebarWithLayout>
  );
};

export const StepperComponent = Template.bind({});
StepperComponent.args = {
  steps: [
    {
      key: 'one',
      label: 'Select Mailing List',
      completed: true,
    },
    {
      key: 'two',
      label: 'Select Template',
      completed: false,
    },
    {
      key: 'three',
      label: 'Schedule & Send',
      completed: false,
    },
  ],
  activeKey: 'one',
};
