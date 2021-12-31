import React, { useEffect, useState } from 'react';
import { Table } from 'rsuite';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

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

        <div>

        <Table
        data={todos}
        autoHeight
    >
      <Table.Column flexGrow ={1} style={{ color: '#fff' }}  align="center">
        <Table.HeaderCell >Price</Table.HeaderCell>
        <Table.Cell  dataKey="Cost" />
      </Table.Column>

      <Table.Column flexGrow ={2} style={{ color: '#fff' }}  align="center" >
        <Table.HeaderCell  >Name</Table.HeaderCell>
        <Table.Cell dataKey="Name" />
      </Table.Column>

      <Table.Column flexGrow ={3} style={{ color: '#fff' }}  align="center" >
        <Table.HeaderCell>Tag</Table.HeaderCell>
        <Table.Cell dataKey="Tag" />
      </Table.Column>

      </Table>
      </div>

        </div>
        

  );
  }
  
  export default StonkTable;