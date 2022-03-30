import React from "react";
import { useHistory, Link } from 'react-router-dom';
import MaterialTable  from '@material-table/core';
import ImgProfile from '../../assets/img/icon-perfil.png';
import styled from 'styled-components';

const TitleTable = styled.h2`
  font-size: 28px;
  text-aling: center;
`;

const NewCoOwner = styled.button`
  border: none;
  color: white;
  background: #c44c8a;
  border-radius: 10px;
  height: 45px;
  width: 180px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif; 
  cursor: pointer;
  margin-top: 5%;
`;

const TableCoOwners = () => {


  const data = [
    { name: 'Vinicius', image: ImgProfile},
    { name: 'Theo', image: ImgProfile},
    { name: 'Breno', image: ImgProfile},
    { name: 'Julia', image: ImgProfile},
    { name: 'Ana', image: ImgProfile},
    { name: 'Dora', image: ImgProfile},
    { name: 'Alex', image: ImgProfile},
    { name: 'Andreia', image: ImgProfile},
    { name: 'Eduarda', image: ImgProfile},
  ]

  const columns = [
    {
      title: 'Avatar',
      field: 'image',
      render: rowData => <img src={rowData.image} style={{width: 30, borderRadius: '50%'}}/>
    },
    {
      title: 'Nome', field: 'name'
    },
  ]

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "30px auto",
        padding: "20px 5px",
        fontFamily: 'Arial',
      }}>
      <MaterialTable
        title={<TitleTable>Co-Titulares</TitleTable>}
        data={data}
        columns={columns}
        options={{
          search: false,
          paging: true,
          headerStyle: {
            backgroundColor: '#A9A9A9	',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          },
          rowStyle: {
            background: '#fafafa',
          },
        }}
      />
      <NewCoOwner>
        <Link to="/cotitulares/cadastrar" style={{textDecoration: "none", color: "white" }}>
          Novo Co-titular
        </Link>
      </NewCoOwner>
    </div>
  );
}

export default TableCoOwners;