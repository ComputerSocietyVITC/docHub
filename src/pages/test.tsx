import * as React from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import Content from "../components/sidebar/content";
import Sidebar from "../components/sidebar/sidebar";

const Test = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Content>
        <Sidebar />
      </Content>
      <Footer />
    </>
  );
};
export default Test;
