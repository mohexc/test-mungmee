import { Card, Form, Input, Button, notification } from "antd";
import React from "react";
import { FC } from "react";
import { useTodosContext } from "../../context/TodosContext";

interface FormInput {
  task: string;
  description: string;
}

const CreateTodo: FC = () => {
  const { createTodo } = useTodosContext();
  const [form] = Form.useForm();

  const onFinish = (values: FormInput) => {
    const result = createTodo(values.task, values.description);
    form.resetFields();
    notification.success({
      message: "Create Todo",
      description: "Success",
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card style={{ marginTop: "1px", boxShadow: "0 0 10px rgba(0, 0 , 0, 0.1)" }}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Task" name="task" rules={[{ required: true, message: "Please input your Task!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input your Description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            Add Todo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateTodo;
