import React, { Component }  from 'react';
import "antd/dist/antd.css";
import './styles/Navbar.css';
import { Menu } from 'antd';
import {
  HomeOutlined,
  RiseOutlined,
  ToolOutlined,
  SmileOutlined,
  PhoneOutlined 
} from '@ant-design/icons';


class Navbar extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  
    render() {
        return (
        <div>
        <div style={{position:"fixed",zIndex:2}} id="nav">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['']}
          mode="horizontal"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{textAlign:"center"}}
        >
          <Menu.Item key="1" icon={<HomeOutlined/>} style={{marginRight:20}} onClick={()=>this.props.linkClick('home')}>
          </Menu.Item>
          <Menu.Item key="2" icon={<SmileOutlined />} style={{marginRight:20}} onClick={()=>this.props.linkClick('about')}>
          </Menu.Item>
          <Menu.Item key="3" icon={<ToolOutlined />} style={{marginRight:20}} onClick={()=>this.props.linkClick('platforms')}>
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />} style={{marginRight:20}} onClick={()=>this.props.linkClick('contact')}>
          </Menu.Item>
          <Menu.Item key="5" icon={<RiseOutlined />} onClick={()=>this.props.linkClick('career')}>
          </Menu.Item>
        </Menu>
         </div>
        </div>
        )
    }
}

export default Navbar
