import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { FC } from "react";
import { TodoItem } from "../../context/TodosContext";
import EditTodo from "./EditTodo";
import TodoView from "./TodoView";

interface PropsInterface {
  todo: TodoItem;
}

const TodoCard: FC<PropsInterface> = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {};

  const handleComplete = () => {};

  return (
    <Card>
      {isEdit ? (
        <EditTodo todo={todo} isEdit={isEdit} setIsEdit={setIsEdit} />
      ) : (
        <TodoView todo={todo} isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </Card>
  );
};

export default TodoCard;
