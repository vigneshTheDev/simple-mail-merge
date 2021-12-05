import { Typography } from "antd";
import React from "react";
import { Card } from "../../components/Card/Card";

export const ScheduleAndSend: React.FC = () => {
  return (
    <Card>
      <Typography.Title level={4} style={{ fontWeight: 400, color: "#595959" }}>
        Schedule
      </Typography.Title>
    </Card>
  );
};
