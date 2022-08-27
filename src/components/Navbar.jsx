import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import icon from "../imgs/cryptocurrency.png";
const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title levenl={2}>
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>

        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
