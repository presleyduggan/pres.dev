import React, { useEffect, useState } from 'react';
import { Table } from 'rsuite';
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
      let grab = data["stonkers"];
      props.sendKing(data["king"]);
      props.sendSpy(data["spy"]);
      props.sendNames(data["names"]);
      props.sendPercent(data["percent_change"]);

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
        align="left"
    >
      <Table.Column minWidth={85} flexGrow ={1} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell >Stonker</Table.HeaderCell>
        <Table.Cell  dataKey="name" />
      </Table.Column>

      <Table.Column minWidth={85} flexGrow ={2} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Ticker</Table.HeaderCell>
        <Table.Cell>{rowData => <span>${rowData.ticker}</span>}</Table.Cell> 
      </Table.Column>

      <Table.Column minWidth={85} flexGrow ={3} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell>Initial</Table.HeaderCell>
        <Table.Cell>{rowData => <span>${rowData.initial}</span>}</Table.Cell> 
      </Table.Column>

      <Table.Column minWidth={85} flexGrow ={4} style={{ color: '#fff' }}  align="left" sortable>
        <Table.HeaderCell align="lef">Current</Table.HeaderCell>
        <Table.Cell align="left">{rowData => <span style={{marginLeft: "auto"}}>${rowData.current}</span>}</Table.Cell> 
      </Table.Column>

      <Table.Column flexGrow ={4} align="left" sortable>
        <Table.HeaderCell style={{ color: '#fff' }} >Percent Change</Table.HeaderCell>
        <Table.Cell>{rowData => <span style={{color: rowData.percent >= 0 ? "green" : "red" }}>{rowData.percent}%</span>}</Table.Cell> 
      </Table.Column>

      </Table>
      </div>

        </div>
        

  );
  }
  
  export default StonkTable;