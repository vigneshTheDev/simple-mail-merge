import React, { CSSProperties, useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import { animated, useTransition, config } from "react-spring";

import { Card } from "../Card/Card";

export type Draft = {
  subject: string;
  body: string;
  id: string;
};

export interface DraftListProps {
  drafts: Draft[];
  onSelect: (key: string) => void;
  selectedDraft?: string;
  style?: CSSProperties;
}

export const DraftList: React.FC<DraftListProps> = ({
  drafts,
  onSelect,
  selectedDraft: _selectedDraft,
  style = {},
}) => {
  const [selectedDraft, setSelectedDraft] = useState(_selectedDraft);

  const onSelectAnimationEnd = () => {
    if (selectedDraft && selectedDraft !== _selectedDraft) {
      onSelect(selectedDraft);
    }
  };
  const spring = useTransition(selectedDraft, {
    from: { scale: 0 },
    enter: { scale: 1 },
    config: config.wobbly,
    onRest: onSelectAnimationEnd,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        ...style,
      }}
    >
      {drafts.map((d) => (
        <Card
          key={d.id}
          style={{
            border: "1px solid",
            borderColor: selectedDraft === d.id ? "#3597f1" : "#dfdfdf",
            position: "relative",
            cursor: "pointer",
            transition: "0.4s ease all",
          }}
          onClick={() => setSelectedDraft(d.id)}
        >
          {spring(({ scale }, selected) => {
            return (
              selected === d.id && (
                <animated.span style={{ color: "#3597f1", position: "absolute", top: 8, right: 8, zIndex: 1, scale }}>
                  <CheckCircleOutlined />
                </animated.span>
              )
            );
          })}
          <div style={{ fontSize: 16, marginBottom: 4, color: "#595959" }}>{d.subject}</div>
          <div
            dangerouslySetInnerHTML={{ __html: d.body }}
            style={{ overflow: "hidden", lineHeight: "20px", height: 40, color: "#262626" }}
          />
        </Card>
      ))}
      {!drafts.length && <Empty description="No Drafts Found" />}
    </div>
  );
};
