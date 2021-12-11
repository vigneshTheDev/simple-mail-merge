import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
import { MailingList, Template } from "../../../server/types";
import { Card } from "../../components/Card/Card";
import { ScheduleConfig } from "./ScheduleAndSend";

export interface PreviewProps {
  mailingList: MailingList;
  template: Template;
  schedule?: ScheduleConfig;
  scheduleType: "now" | "later";
  onEdit: () => void;
}

export const Preview: React.FC<PreviewProps> = ({ mailingList, template, schedule, scheduleType, onEdit }) => {
  return (
    <Card>
      <Typography.Title
        level={4}
        style={{
          color: "#595959",
          margin: 0,
          flex: "0 0",
          fontWeight: 300,
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Preview</span>
        <Button icon={<EditOutlined />} type="text" style={{ color: "inherit" }} onClick={onEdit} />
      </Typography.Title>

      <div>
        <Typography.Text strong type="secondary">
          Subject:{" "}
        </Typography.Text>
        <Typography.Text type="secondary">{template.subject}</Typography.Text>
      </div>

      <div>
        <Typography.Text strong type="secondary">
          Schedule:{" "}
        </Typography.Text>
        <Typography.Text type="secondary">
          {scheduleType === "now"
            ? "Now"
            : `${schedule!.date.format("ddd DD MMM, yyyy")}. ${schedule!.time.format("hh:mm a")}`}
        </Typography.Text>
      </div>

      <div style={{ marginTop: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: template.body }}></div>
      </div>
    </Card>
  );
};
