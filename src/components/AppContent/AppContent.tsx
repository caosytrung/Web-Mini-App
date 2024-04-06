import { Button, Layout } from "antd";
import './AppContent.scss'
import React from "react";
import { SuperAppConstant } from "../../constant/constant";


const AppLayout: React.FC = () => {

  const onFinish = () => {
    getSupperAppModule(window)?.invoke(SuperAppConstant.SuperAppFinisAppCommand, "", "");
  }

  function getExtraData() {
    const urlParams = new URLSearchParams(window.location.search);
    const result : string[] = [];
    urlParams.forEach((value, key, _) => {
      result.push(`${ key }: ${ value }`);
    });

    return result.map(person => <p>{person}</p>);
  }

  return (
    <Layout className="app-layout-container">
      <h2>Extra Data from Super-App</h2>
      {getExtraData()}
      <h2>Command</h2>
      <Button type={"primary"} size={"large"} onClick={onFinish}>Finish Mini App</Button>
    </Layout>
  );
};

function getSupperAppModule(global: any): any | null {
  return global[SuperAppConstant.SuperAppJsInterface];
}

export default AppLayout;


