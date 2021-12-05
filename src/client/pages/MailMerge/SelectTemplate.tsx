import { Radio } from "antd";
import React, { useMemo, useState } from "react";
import { MailOutlined, FileOutlined } from "@ant-design/icons";

import { Card } from "../../components/Card/Card";
import { useDrafts } from "../../hooks/useDrafts";
import { DraftList } from "../../components/DraftList/DraftList";

export interface SelectTemplateProps {
  onSelect: (key: string) => void;
  selectedTemplate?: string;
}
export const SelectTemplate: React.FC<SelectTemplateProps> = ({ onSelect, selectedTemplate }) => {
  const [selectedType, setSelectedType] = useState<"GMail" | "Custom">("GMail");

  const { data: drafts, loading } = useDrafts();
  const gmailDrafts = useMemo(() => drafts?.filter((d) => d.type === "GMail") || [], [drafts]);
  const customDrafts = useMemo(() => drafts?.filter((d) => d.type === "Custom") || [], [drafts]);

  return (
    <Card style={{ display: "flex", flexDirection: "column", flex: "1 1", overflow: "hidden", gap: 16 }}>
      <div style={{ color: "#999" }}>
        <Radio.Group
          size="large"
          value={selectedType}
          onChange={(k) => setSelectedType(k.target.value)}
          style={{ display: "flex" }}
        >
          <Radio.Button value="GMail" style={{ flex: 1, textAlign: "center" }}>
            <MailOutlined /> GMail
          </Radio.Button>
          <Radio.Button value="Custom" style={{ flex: 1, textAlign: "center" }}>
            <FileOutlined /> Custom
          </Radio.Button>
        </Radio.Group>
      </div>

      {selectedType === "GMail" ? (
        <DraftList key={"gmail"} onSelect={onSelect} selectedDraft={selectedTemplate} drafts={gmailDrafts} />
      ) : (
        <DraftList key={"custom"} onSelect={onSelect} selectedDraft={selectedTemplate} drafts={customDrafts} />
      )}
    </Card>
  );
};
