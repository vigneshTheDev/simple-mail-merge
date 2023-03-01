import { ArrowRightOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import React, { CSSProperties } from "react";
import { MailingList } from "../../../server/types";
import { Card } from "../../components/Card/Card";
import { MailingListSelector } from "../../components/MailingListSelector/MailingListSelector";

export interface SelectMailingListProps {
  onSelect: (mailingList: MailingList) => void;
  onNext: () => void;
  selectedMailingList?: MailingList;
  style?: CSSProperties;
}

export const SelectMailingList: React.FC<SelectMailingListProps> = ({
  onSelect,
  selectedMailingList,
  style = {},
  onNext,
}) => {
  return (
    <Card style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, ...style }}>
      <MailingListSelector
        style={{ flex: "1 1", overflow: "hidden" }}
        onSelect={onSelect}
        selectedMailingList={selectedMailingList}
      ></MailingListSelector>
      <Space direction="vertical" size={16} style={{ flex: "0 0" }}>
        <Button block icon={<ArrowRightOutlined />} type="primary" size="large" onClick={onNext}>
          Next
        </Button>
      </Space>
    </Card>
  );
};
