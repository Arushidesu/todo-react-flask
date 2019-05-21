import React from 'react';
import axios from 'axios'
import { Card, Layout, Menu, Icon, Row, Col, Switch } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

export default class App extends React.Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                });
            })
    }

    render () {
        return (
            <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Início</Menu.Item>
                    <Menu.Item disabled>Simples TODO list feito com Flask e React.</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div>
                    <Row gutter={12}>
                        {this.state.todos.map((todo) => (
                            <Col sm={24} md={12} lg={8} style={{ marginTop: '25px' }}>
                                <Card title={todo.title} bordered={false}>
                                    Concluído:
                                    { todo.completed && 
                                        <Switch
                                            style={{ marginLeft: '10px' }}
                                            checkedChildren={<Icon type="check" />}
                                            unCheckedChildren={<Icon type="close" />}
                                            defaultChecked
                                        />
                                    }
                                    { !todo.completed && 
                                        <Switch
                                            style={{ marginLeft: '10px' }}
                                            checkedChildren={<Icon type="check" />}
                                            unCheckedChildren={<Icon type="close" />}
                                            defaultunChecked
                                        />
                                    }
                                </Card>
                            </Col>   
                        ))}
                    </Row>
                </div>
            </Content>
            <Footer>
            <Footer style={{ textAlign: 'center' }}>
                Feito com <Icon type="heart" theme="filled" style={{ color: "#f5222d" }} /> por Alcides Dias
            </Footer>
            </Footer>
        </Layout>
        )
    }
}