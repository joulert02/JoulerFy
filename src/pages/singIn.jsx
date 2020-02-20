import React from "react";
import SinIngForm from "../components/organisms/SinIngForm/SinIngForm";
import Layout from "../components/organisms/layout/layout";

const singIn = () => {
  return (
    <Layout isLoguerUser={true}>
      <SinIngForm />
    </Layout>
  );
};

export default singIn;
