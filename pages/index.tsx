import { Button, Row, Col, Typography } from "antd";
import React from "react";
import { FC } from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodosList from "../components/todo/TodosList";

const HomePage: FC = () => {
  return (
    <Row justify="center" align="middle">
      <Col xs={23} md={23} lg={10}>
        <Typography.Title level={3}>What's the Plan for Today?</Typography.Title>
        <CreateTodo />
        <TodosList />
      </Col>
    </Row>
  );
};

export default HomePage;
