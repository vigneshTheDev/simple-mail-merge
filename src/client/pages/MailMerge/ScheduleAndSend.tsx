import { Button, DatePicker, Divider, TimePicker, Typography } from "antd";
import React from "react";
import { Card } from "../../components/Card/Card";
import { FieldTimeOutlined, MailOutlined } from "@ant-design/icons";

export const ScheduleAndSend: React.FC = () => {
  return (
    <Card>
      <Typography.Title level={4} style={{ fontWeight: 300, color: "#595959" }}>
        Schedule
      </Typography.Title>
      <DatePicker placeholder="Select Date" size="large" style={{ width: "100%", marginBottom: 16 }}></DatePicker>
      <TimePicker placeholder="Select Time" style={{ width: "100%", marginBottom: 16 }} size="large"></TimePicker>
      <Button size="large" block icon={<FieldTimeOutlined />} type="primary">
        Schedule
      </Button>

      <Divider plain style={{ margin: "30px 0" }}>
        <Typography.Text type="secondary">OR</Typography.Text>
      </Divider>

      <Button icon={<MailOutlined />} type="primary" ghost size="large" block>
        Send Now
      </Button>
    </Card>
  );
};
