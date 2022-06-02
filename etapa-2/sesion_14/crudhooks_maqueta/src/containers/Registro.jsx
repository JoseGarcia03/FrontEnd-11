import { Button, Input, Layout, Select, Tooltip } from 'antd';
import React from 'react';
import { ContentDiv, Form } from '../styles/styles';
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons"

const Registro = () => {
    const { Content } = Layout
    const { Option } = Select
  return (
    <>
    <Content
      style={{
        padding: '0 50px',
        margin: "50px auto 0 auto"
      }}
    >
        <ContentDiv>
            <h3 style={{ textAlign: "center" }}>Registro</h3>
            <Form>
                <Input
                placeholder="Ingrese sus nombres y apellidos"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Nombres y Apellidos">
                    <InfoCircleOutlined
                        style={{
                        color: 'rgba(0,0,0,.45)',
                        }}
                    />
                    </Tooltip>
                }
                />
                <Select
                    style={{
                     width: '100%',
                    }}
                    defaultValue="default"
                >
                    <Option disabled value="default">Tipo de documento</Option>
                    <Option value="cc">C.C</Option>
                    <Option value="ce">C.E</Option>
                    <Option value="ti">T.I</Option>
                </Select>
                <Input
                placeholder="Número de documento"
                suffix={
                    <Tooltip title="Numero del documento de identidad">
                    <InfoCircleOutlined
                        style={{
                        color: 'rgba(0,0,0,.45)',
                        }}
                    />
                    </Tooltip>
                }
                />
                <Input.Group compact>
                <Select
                    style={{
                     width: '25%',
                    }}
                    defaultValue="57"
                >
                    <Option value="57">+57</Option>
                </Select>
                <Input
                style={{
                    width: '75%',
                   }}
                type="number"
                placeholder="Numero de teléfono"
                suffix={
                    <Tooltip title="Numero celular">
                    <InfoCircleOutlined
                        style={{
                        color: 'rgba(0,0,0,.45)',
                        }}
                    />
                    </Tooltip>
                }
                />
                </Input.Group>
                <Input
                type="number"
                placeholder="Numero de teléfono"
                suffix={
                    <Tooltip title="Numero celular">
                    <InfoCircleOutlined
                        style={{
                        color: 'rgba(0,0,0,.45)',
                        }}
                    />
                    </Tooltip>
                }
                />
                <Input
                placeholder="Dirección"
                suffix={
                    <Tooltip title="Ingrese su dirección">
                    <InfoCircleOutlined
                        style={{
                        color: 'rgba(0,0,0,.45)',
                        }}
                    />
                    </Tooltip>
                }
                />
                <Button type="primary" >Registrarse</Button>
            </Form>
        </ContentDiv>
    </Content>
    </>
  )
}

export default Registro