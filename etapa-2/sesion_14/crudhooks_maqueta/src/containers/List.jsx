import React, { useState, useEffect } from 'react'
import { Button, Layout, Table} from 'antd';

const List = () => {
  const { Content } = Layout
  // Estados y Hooks
  const [users, setUsers] = useState([]);

  const getData  = async() => {
    // const data = await (await fetch("https://crud2-heroku.herokuapp.com/usuarios")).json();
    console.log("GET");
    const resp = await fetch("https://crud2-heroku.herokuapp.com/usuarios");
    const data = await resp.json();
    setUsers(data)
  }

  const dataKeys = users.map( user => (
    {
    ...user,
    key: user.id
    }
  ));

  const deleteM = async id => {
    try {
      const resp = await fetch(`https://crud2-heroku.herokuapp.com/usuarios/${id}`, {
        method: "DELETE"
      })
      getData()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  useEffect(() => {
  }, [users])
  


  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Jose Daniel Garcia Jaime',
  //     age: 22,
  //     address: '10 Downing Street',
  //     tdni: "C.E",
  //     dni: 123456789,
  //     tel: 3137894565,
  //     img: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   }
  // ];

  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tipo de documento',
      dataIndex: 'tdni',
      key: 'tdni',
    },
    {
      title: 'Documento',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'Teléfono',
      dataIndex: 'tel',
      key: 'tel'
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Imagen',
      dataIndex: 'img',
      key: 'img',
      render: data => (<img style={{ width: "50px"}} src={data} alt="img"/>)
    },
    {
      title: 'Accion',
      key: 'action',
      render: u => (<Button onClick={()=> deleteM(u.id)}>Eliminar</Button>)
    },
  ];
  return (
    <Content
      style={{
        padding: '0 50px',
        margin: "50px auto 0 auto"
      }}
    >
      <Table dataSource={dataKeys} columns={columns} pagination={false} />
    </Content>
  )
}

export default List