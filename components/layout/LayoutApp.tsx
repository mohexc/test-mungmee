import { Layout } from "antd";
import React, { FC } from "react";
const { Header, Footer, Sider, Content } = Layout;

const LayoutApp: FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header></Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
