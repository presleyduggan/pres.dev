import React, { useEffect, useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import "rsuite-table/dist/css/rsuite-table.css";

  function StonkTable() {

    let [todos, setTodos] = useState([])
    let [first, setFirst] = useState(null)

    useEffect(() => {
      fetch("/api", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }).then(response => response.json()).then(data => {setTodos(data)
      let grab = data[0];
      first = setFirst(grab.Name);
      console.log(Object.entries(data).map( ([key, value]) => `My key is ${key} and my value is ${value}` ))
      })
    }, []);

      return (
        <div>
        <h1>Hello!</h1>
        <div>{JSON.stringify(todos)}</div>

        <Table
        data={todos}
        autoHeight
    >
      <Column width={200} align="center" fixed>
        <HeaderCell>Price</HeaderCell>
        <Cell dataKey="Cost" />
      </Column>

      <Column width={200} align="center" fixed>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="Name" />
      </Column>

      <Column width={200} align="center" fixed>
        <HeaderCell>Tag</HeaderCell>
        <Cell dataKey="Tag" />
      </Column>

      </Table>

        </div>
        

  );
  }
  
  export default StonkTable;