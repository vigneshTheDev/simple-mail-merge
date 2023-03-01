import React from 'react';
import cn from 'classnames';
import styles from './Stepper.module.scss';
import { CheckOutlined } from '@ant-design/icons';

type Step = {
  label: string;
  key: string | number;
  completed?: boolean;
};

export interface StepperProps {
  steps: Step[];
  activeKey: string | number;
  onChangeActiveKey: (key: string | number) => void;
}

export const Stepper: React.FC<StepperProps> = ({ steps, activeKey, onChangeActiveKey }) => {
  return (
    <div>
      {steps.map((s) => (
        <div key={s.key} className={cn(styles.stepRow, { [styles.active]: activeKey === s.key })} onClick={() => onChangeActiveKey(s.key)}>
          <span className={styles.stepCircle}>{s.completed && <CheckOutlined />}</span>
          <span className={styles.stepLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  );
};
