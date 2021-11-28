import React, { CSSProperties } from 'react';

export interface CardProps {
  style?: CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, style = {} }) => {
  return <div style={{ padding: 16, backgroundColor: '#ffffff', borderRadius: 4, ...style }}>{children}</div>;
};
