import React, { useEffect } from "react";
import moment from "moment";
import { FieldTimeOutlined, MailOutlined } from "@ant-design/icons";
import { Button, DatePicker, Divider, TimePicker, Typography, Form } from "antd";

import { Card } from "../../components/Card/Card";

export type ScheduleConfig = {
  date: moment.Moment;
  time: moment.Moment;
};
export interface ScheduleAndSendProps {
  onSelectSchedule: (config: ScheduleConfig) => void;
  onSelectSendNow: () => void;
  schedule?: ScheduleConfig;
}

export const ScheduleAndSend: React.FC<ScheduleAndSendProps> = ({ onSelectSendNow, onSelectSchedule, schedule }) => {
  const [form] = Form.useForm<ScheduleConfig>();

  useEffect(() => {
    if (schedule) form.setFieldsValue(schedule);
  }, [schedule]);

  return (
    <Card>
      <Typography.Title level={4} style={{ fontWeight: 300, color: "#595959" }}>
        Schedule
      </Typography.Title>
      <Form form={form} onFinish={() => onSelectSchedule(form.getFieldsValue())}>
        <Form.Item name="date" rules={[{ required: true }]} style={{ marginBottom: 16 }}>
          <DatePicker placeholder="Select Date" size="large" style={{ width: "100%" }}></DatePicker>
        </Form.Item>

        <Form.Item name="time" rules={[{ required: true }]} style={{ marginBottom: 16 }}>
          <TimePicker
            showSecond={false}
            showNow={false}
            format="HH:mm"
            placeholder="Select Time"
            style={{ width: "100%" }}
            minuteStep={10}
            use12Hours
            size="large"
            onSelect={(val) => form.setFieldsValue({ time: val })}
          ></TimePicker>
        </Form.Item>
        <Button htmlType="submit" size="large" block icon={<FieldTimeOutlined />} type="primary">
          Schedule
        </Button>
      </Form>
      <Divider plain style={{ margin: "30px 0" }}>
        <Typography.Text type="secondary">OR</Typography.Text>
      </Divider>

      <Button onClick={() => onSelectSendNow()} icon={<MailOutlined />} type="primary" ghost size="large" block>
        Send Now
      </Button>
    </Card>
  );
};
