import { noop } from "lodash";
import React, { CSSProperties } from "react";

export interface CardProps {
  style?: CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style = {}, onClick = noop }) => {
  return (
    <div style={{ padding: 16, backgroundColor: "#ffffff", borderRadius: 4, ...style }} onClick={onClick}>
      {children}
    </div>
  );
};
