import React, { FC } from "react";
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Modal } from "antd";
import { TodoItem, useTodosContext } from "../../context/TodosContext";

interface PropsInteface {
  todo: TodoItem;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
}

const TodoView: FC<PropsInteface> = ({ todo, isEdit, setIsEdit }) => {
  const { deleteTodo, todoComplete } = useTodosContext();
  const handleDelete = () => {
    Modal.confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content: `Task : ${todo.task}`,
      onOk() {
        deleteTodo(todo.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleComplete = () => {
    todoComplete(todo.id, !todo.complete);
  };
  return (
    <Row>
      <Col xs={20}>
        <Typography.Title style={{ cursor: "pointer" }} level={3} onClick={handleComplete}>
          <span style={{ textDecoration: todo.complete && "line-through" }}>{todo.task}</span>
        </Typography.Title>
        <p>{todo.description}</p>
      </Col>
      <Col xs={4}>
        <Row justify="space-between">
          <FormOutlined onClick={() => setIsEdit(!isEdit)} style={{ fontSize: "1.2rem", cursor: "pointer" }} />
          <DeleteOutlined onClick={handleDelete} style={{ fontSize: "1.2rem", cursor: "pointer" }} />
        </Row>
      </Col>
    </Row>
  );
};

export default TodoView;
