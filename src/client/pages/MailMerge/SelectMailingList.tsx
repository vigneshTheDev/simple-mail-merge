import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import React, { CSSProperties } from "react";
import { Card } from "../../components/Card/Card";
import { MailingListSelector } from "../../components/MailingListSelector/MailingListSelector";

export interface SelectMailingListProps {
  onSelect: (key: string) => void;
  selectedMailingList?: string;
  style?: CSSProperties;
}

export const SelectMailingList: React.FC<SelectMailingListProps> = ({ onSelect, selectedMailingList, style = {} }) => {
  return (
    <Card style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, ...style }}>
      <MailingListSelector
        style={{ height: "calc(100% - 112px)" }}
        onSelect={onSelect}
        selectedMailingList={selectedMailingList}
      ></MailingListSelector>
      <Space direction="vertical" size={16}>
        <Button block icon={<SearchOutlined />} type="primary" size="large">
          Create New List
        </Button>
        <Button block icon={<PlusOutlined />} type="primary" ghost size="large">
          Add an Existing List
        </Button>
      </Space>
    </Card>
  );
};
