import React from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <AppBody>
        <Sidebar />
        <Feed />

        {/* Widgets */}
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
