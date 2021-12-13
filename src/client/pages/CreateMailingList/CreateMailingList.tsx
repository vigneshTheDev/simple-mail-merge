import { CloseOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography, Form, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useInsertMailingList } from "../../hooks/useInsertMailingList";

type MailingListHeaders = {
  name: string;
  columns: string[];
};

export const CreateMailingList: React.FC = () => {
  const [form] = Form.useForm<MailingListHeaders>();
  const [insertMailingList, { loading }] = useInsertMailingList();

  useEffect(() => {
    form.setFieldsValue({
      columns: ["First Name", "Last Name", "Email"],
    });
  }, []);

  const onInsertClick = async () => {
    await form.validateFields();
    const { error } = await insertMailingList(form.getFieldsValue());

    if (error) {
      message.error(error.message || "Something went wrong");
    } else {
      message.success("Inserted");
    }
  };

  return (
    <Layout
      title="Create Mailing List"
      footer={
        <Button type="primary" block size="large" loading={loading} onClick={onInsertClick}>
          Insert Mailing List
        </Button>
      }
    >
      <Form form={form} size="large">
        <Typography.Title level={5}>Name</Typography.Title>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Name" />
        </Form.Item>

        <Form.List name="columns">
          {(fields, { add, remove }) => {
            return (
              <>
                <Typography.Title level={5}>Columns</Typography.Title>
                {fields.map(({ key, ...restProps }, index) => {
                  return (
                    <div style={{ position: "relative", display: "flex", gap: 8, marginBottom: 16 }}>
                      <Form.Item
                        style={{ flex: "1 1", marginBottom: 0 }}
                        key={key}
                        {...restProps}
                        rules={[{ required: true, message: "Please fill the column name" }]}
                      >
                        <Input />
                      </Form.Item>
                      <Button
                        type="text"
                        danger
                        size={"small"}
                        icon={<DeleteOutlined style={{ fontSize: 12 }} />}
                        onClick={() => remove(index)}
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          height: 16,
                          width: 16,
                          minWidth: "auto",
                          // transform: "translate(50%, -50%)",
                        }}
                      ></Button>
                    </div>
                  );
                })}
                <Button type="default" icon={<PlusOutlined />} block onClick={() => add("")}>
                  Add Column
                </Button>
              </>
            );
          }}
        </Form.List>
      </Form>
    </Layout>
  );
};
