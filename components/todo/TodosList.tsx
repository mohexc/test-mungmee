import { Input } from "antd";
import React, { FC } from "react";
import { useTodosContext } from "../../context/TodosContext";
import TodoCard from "./TodoCard";

const TodosList: FC = () => {
  const { todos, getAll } = useTodosContext();
  const handleSearch = (value: string) => {
    getAll(value);
  };
  if (!todos) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Input.Search
        allowClear
        style={{ margin: "1rem 0rem" }}
        placeholder="Search Task"
        bordered
        enterButton
        onSearch={handleSearch}
      />
      {todos.length === 0 ? (
        <p>No Data</p>
      ) : (
        todos?.reverse().map((todo) => {
          return <TodoCard key={`${todo.id}`} todo={todo} />;
        })
      )}
    </div>
  );
};

export default TodosList;
