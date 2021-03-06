import React, { useEffect, useState } from "react";
import { Table } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function StonkTableMobile(props) {
  let [todos, setTodos] = useState([]);
  let [sortColumn, setSortColumn] = React.useState("percent");
  let [sortType, setSortType] = React.useState("desc");
  const [loading, setLoading] = React.useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [maxColumn, setmaxColum] = useState(85);
  const locale = {
    emptyMessage: "Pulling data from API.",
    loading: "Loading, please wait.",
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    //console.log("width = "+width+" and height="+height);

    return {
      width,
    };
  }

  function isMobile() {
    let width = getWindowDimensions();
    if (width < 400) {
      setmaxColum(40);
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    fetch("https://presleyduggan.pythonanywhere.com/api/stonks", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data["stonkers"]);
        let grab = data["stonkers"];
        props.sendKing(data["king"]);
        props.sendSpy(data["spy"]);
        props.sendNames(data["names"]);
        props.sendPercent(data["percent_change"]);
      });
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getData = () => {
    if (sortColumn && sortType) {
      return todos.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return todos;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    console.log("hello?");
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
          data={getData()}
          autoHeight
          loading={loading}
          locale={locale}
          sortColumn={sortColumn}
          sortType={sortType}
          /*onSortColumn={(sortColumn, sortType)=>{
          console.log(sortColumn, sortType);
        }}*/
          onSortColumn={handleSortColumn}
        >
          <Table.Column
            minWidth={8}
            width={85}
            style={{ color: "#fff" }}
            align="left"
            sortable
          >
            <Table.HeaderCell>Stonker</Table.HeaderCell>
            <Table.Cell dataKey="name" />
          </Table.Column>

          <Table.Column
            minWidth={8}
            width={80}
            style={{ color: "#fff" }}
            align="left"
            sortable
          >
            <Table.HeaderCell>Ticker</Table.HeaderCell>
            <Table.Cell dataKey="ticker">
              {(rowData) => <span>${rowData.ticker}</span>}
            </Table.Cell>
          </Table.Column>

          <Table.Column
            minWidth={8}
            width={85}
            style={{ color: "#fff" }}
            align="left"
            sortable
          >
            <Table.HeaderCell align="lef">Current</Table.HeaderCell>
            <Table.Cell align="left" dataKey="current">
              {(rowData) => (
                <span style={{ marginLeft: "auto" }}>${rowData.current}</span>
              )}
            </Table.Cell>
          </Table.Column>

          <Table.Column
            minWidth={8}
            width={82}
            style={{ color: "#fff" }}
            align="left"
            sortable
          >
            <Table.HeaderCell>Initial</Table.HeaderCell>
            <Table.Cell dataKey="initial">
              {(rowData) => <span>${rowData.initial}</span>}
            </Table.Cell>
          </Table.Column>

          <Table.Column minWidth={8} width={135} align="left" sortable>
            <Table.HeaderCell style={{ color: "#fff" }}>
              Percent Change
            </Table.HeaderCell>
            <Table.Cell dataKey="percent">
              {(rowData) => (
                <span style={{ color: rowData.percent >= 0 ? "green" : "red" }}>
                  {rowData.percent}%
                </span>
              )}
            </Table.Cell>
          </Table.Column>
        </Table>
      </div>
    </div>
  );
}

export default StonkTableMobile;
