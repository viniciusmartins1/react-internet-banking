import React from "react";
import { useHistory, Link } from 'react-router-dom';
import MaterialTable  from '@material-table/core';
import ImgProfile from '../../assets/img/icon-perfil.png';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TitleTable = styled.h2`
  font-size: 28px;
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

  const dataCoOwners = useSelector(state => state.reducerCoOwner.coOwners);

  const columns = [
    {
      title: 'Avatar', field: 'image',
      render: rowData => <img src={ImgProfile} style={{width: 30, borderRadius: '50%'}}/>
    },
    {title: 'Nome', field: 'name'},
    {title: 'Celular', field: 'phoneNumber'},
    {title: 'Data de Nascimento', field: 'birthDate'},
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
        data={dataCoOwners}
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