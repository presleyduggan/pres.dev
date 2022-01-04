import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Table } from 'rsuite';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

  function StonkTable(props) {

    let [todos, setTodos] = useState([])
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const locale = {
      emptyMessage: 'Pulling data from API.',
      loading: 'Loading, please wait.'
    };
    useEffect(() => {
      fetch("/api/stonks", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }).then(response => response.json()).then(data => {setTodos(data["stonkers"])
      let grab = data[0];
      console.log(data["king"]);
      props.sendKing(data["king"]);
      })
    }, []);

    const handleSortColumn = (sortColumn, sortType) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSortColumn(sortColumn);
        setSortType(sortType);
      }, 500);
    };

      return (
        <div>
        <div>

        <Table
        wordWrap
        data={todos}
        autoHeight
        locale={locale}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
    >
      <Table.Column minWidth={85} flexGrow ={1} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell >Stonker</Table.HeaderCell>
        <Table.Cell  dataKey="name" />
      </Table.Column>

      <Table.Column minWidth={85} flexGrow ={2} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Ticker</Table.HeaderCell>
        <Table.Cell dataKey="ticker" />
      </Table.Column>

      <Table.Column flexGrow ={3} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Initial Price</Table.HeaderCell>
        <Table.Cell dataKey="initial" />
      </Table.Column>

      <Table.Column flexGrow ={4} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Current Price</Table.HeaderCell>
        <Table.Cell dataKey="current" />
      </Table.Column>

      <Table.Column flexGrow ={4} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Percent Change</Table.HeaderCell>
        <Table.Cell dataKey="percent" />
      </Table.Column>

      </Table>
      </div>

        </div>
        

  );
  }
  
  export default StonkTable;