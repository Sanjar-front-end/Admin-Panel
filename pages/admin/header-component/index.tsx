import React from 'react'
import { Header } from '../main-layout';

import { Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined } from '@ant-design/icons';

import "./style.css"
import BreadcrumbComponent from '../../breadcrumb';

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {

    const {
        token: {
            colorBgContainer
        }
    } = theme.useToken();

    const items = [{
        href: "",
        title: <HomeOutlined />
    }
    ]

    return (
        <Header className={!collapsed ? 'header1' : "header2"} style={{ padding: 0, background: colorBgContainer }}>
            <Button type='text' icon={collapsed ?
                <MenuUnfoldOutlined></MenuUnfoldOutlined> :
                <MenuFoldOutlined></MenuFoldOutlined>}
                onClick={() => { setCollapsed(!collapsed) }}
            ></Button>
            <BreadcrumbComponent/>
        </Header>
    )
}

export default HeaderComponent;