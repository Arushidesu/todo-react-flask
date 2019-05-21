import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Início</Menu.Item>
                    <Menu.Item key="2">Sobre</Menu.Item>
                    <Menu.Item key="3">Contato</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Início</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            <Footer>
            <Footer style={{ textAlign: 'center' }}>
                Feito com <Icon type="heart" theme="filled" style={{ color: "#f5222d" }} /> por Alcides Dias.
            </Footer>
            </Footer>
        </Layout>
    )
}

export default CustomLayout;