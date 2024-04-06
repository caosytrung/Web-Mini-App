import { Button, Layout } from "antd";
import './AppContent.scss'
import React from "react";


const AppLayout: React.FC = () => {

  const onPay = () => {
    getSupperAppModule(window)?.invoke("finishMiniApp", "", "");
  }

  return (
    <Layout className="app-layout-container">
      <Button type={"link"} size={"large"} onClick={onPay}>Finish Mini App</Button>
      <Button type={"link"} size={"large"} onClick={onPay}>Show Extra Config From Super App</Button>
    </Layout>
  );
};

function getSupperAppModule(global: any): any | null {
  return global['MINI_APP_JS_INTERFACE'];
}

export default AppLayout;


