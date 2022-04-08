import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import ImgProfile from '../../assets/img/perfil.png';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetAll } from '../../redux/actions/CoOwnersActions'
import '../../assets/styles/coOwners/coOwners.css';
import { NewCoOwner, TitleTable } from '../../assets/styles/coOwners/coOwners.js'


const TableCoOwners = () => {

  const dataCoOwners = useSelector(state => state.reducerCoOwner.coOwners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAll());
  }, [])

  const columns = [
    {
      title: 'Avatar', field: 'image',
      render: rowData => <img src={ImgProfile} style={{ width: 30, borderRadius: '50%' }} />
    },
    { title: 'Nome', field: 'nome' },
    {
      title: 'Celular', field: 'celular'
    },
    { title: 'Data de Nascimento', field: 'data_nasc', type: "date" },
  ]

  return (
    <div
      className="container-table-co-owners"
    >
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
        <Link to="/cotitulares/cadastrar" style={{ textDecoration: "none", color: "white" }}>
          Novo Co-titular
        </Link>
      </NewCoOwner>
    </div>
  );
}

export default TableCoOwners;