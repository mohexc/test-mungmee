import { Form, Input, Button, notification } from "antd";
import React, { FC } from "react";
import { TodoItem, useTodosContext } from "../../context/TodosContext";

interface PropsInteface {
  todo: TodoItem;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
}

interface FormInput {
  id: string;
  task: string;
  description: string;
}

const EditTodo: FC<PropsInteface> = ({ todo, isEdit, setIsEdit }) => {
  const { updateTodo } = useTodosContext();

  const onFinish = (values: FormInput) => {
    updateTodo(todo.id, values.task, values.description);
    notification.success({
      message: "Update Todo",
      description: "Success",
    });
    setIsEdit(!isEdit);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={todo}
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
            Edit Todo
          </Button>
          <Button style={{ marginTop: "1rem" }} block type="primary" onClick={() => setIsEdit(!isEdit)}>
            Cancle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditTodo;
