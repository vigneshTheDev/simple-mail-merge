import { Button, Radio } from "antd";
import React, { useMemo, useState } from "react";
import { MailOutlined, FileOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { Card } from "../../components/Card/Card";
import { useDrafts } from "../../hooks/useDrafts";
import { DraftList } from "../../components/DraftList/DraftList";

export interface SelectTemplateProps {
  onSelect: (key: string) => void;
  onNext: () => void;
  selectedTemplate?: string;
}

export const SelectTemplate: React.FC<SelectTemplateProps> = ({ onSelect, selectedTemplate, onNext }) => {
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

      <div style={{ flex: "1 1", overflowY: "auto", padding: "0 16px", margin: "0 -16px" }}>
        {selectedType === "GMail" ? (
          <DraftList key={"gmail"} onSelect={onSelect} selectedDraft={selectedTemplate} drafts={gmailDrafts} />
        ) : (
          <DraftList key={"custom"} onSelect={onSelect} selectedDraft={selectedTemplate} drafts={customDrafts} />
        )}
      </div>

      <Button icon={<ArrowRightOutlined />} block type="primary" onClick={onNext} size="large">
        Next
      </Button>
    </Card>
  );
};
