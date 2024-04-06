import { Button, Layout } from "antd";
import './AppContent.scss'
import React from "react";

const AppLayout: React.FC = () => {


  return (
    <Layout className="app-layout-container">
      <LoginView />
    </Layout>
  );
};


const LoginView: React.FC = () => (
  <Button type={"link"} size={"large"} onClick={() => {
  }}>Login With Teko</Button>

)


export default AppLayout;
