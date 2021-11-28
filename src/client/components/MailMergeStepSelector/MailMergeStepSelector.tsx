import React from 'react';
import { Stepper } from '../Stepper/Stepper';

export enum MailMergeSteps {
  selectMailingList,
  selectTemplate,
  scheduleAndSend,
}

export interface MailMergeStepSelectorProps {
  selectedStep: MailMergeSteps;
  onSelect: (step: MailMergeSteps) => void;
}

const steps = [
  {
    label: 'Select Mailing List',
    key: MailMergeSteps.selectMailingList,
  },
  {
    label: 'Select Template',
    key: MailMergeSteps.selectTemplate,
  },
  {
    label: 'Schedule & Send',
    key: MailMergeSteps.scheduleAndSend,
  },
];
export const MailMergeStepSelector: React.FC<MailMergeStepSelectorProps> = ({ onSelect, selectedStep }) => {
  return <Stepper activeKey={selectedStep} steps={steps} onChangeActiveKey={(key) => onSelect(key as MailMergeSteps)}></Stepper>;
};
