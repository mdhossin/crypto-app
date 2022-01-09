import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Homepage,
  Cryptocurriences,

  News,
  CryptoDetail,
} from "./components";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
      
            <Route
              path="/cryptocurrenices"
              element={<Cryptocurriences />}
            ></Route>
            <Route path="/crypto/:coinId" element={<CryptoDetail />}></Route>
            <Route path="/news" element={<News />}></Route>
          </Routes>
        </div>
      </Layout>
 
    <div className="footer">
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
    </div>
    </div>
  </div>
);

export default App;
