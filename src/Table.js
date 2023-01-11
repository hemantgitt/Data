import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./Table.css";

const Table = () => {
  const [countries, setCountries] = useState([]);

  const GetCountries = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Body",
      selector: (row) => row.body.slice(4, 15),
    },
    {
        name : "Action",
        cell : (row) => <button className="primary" onClick={()=> alert("Hi There")}>Edit</button>
    }
  ];

  useEffect(() => {
    GetCountries();
  }, []);
  console.log(countries);

  return (
    <div className="Body">
      <DataTable
        title="DataTable"
        fixedHeader
        fixedHeaderScrollHeight="500px"
        columns={columns}
        data={countries}
        pagination
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent = <input type="text" placeholder = "Search" className="form-control" />
        subHeaderAlign = "center" 
      />
    </div>
  );
};

export default Table;
