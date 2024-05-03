"use client";

import DataTable from "react-data-table-component";

const Results = (list) => {
  const columns = [
    {
      name: 'Pais',
      selector: row => row.pais,
    },
    {
      name: 'Poblacion',
      selector: row => row.poblacion,
    },
    {
      name: 'Porcentaje',
      selector: row => row.porcentaje,
    },
  ];
    return (
      <div className="dbContainer">
        <DataTable
          striped
          className="datatable"
          columns={columns}
          data={list.list.body}
          noDataComponent= "No se encontraron resultados"
        />
      </div>
    )
};


export default Results;