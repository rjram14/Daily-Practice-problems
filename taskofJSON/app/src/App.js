import React, { useState } from "react";
import "./App.css";
const tableData = [
  {
    name: "Users",
    data: [
      {
        name: "Micheal",
        position: "Developer",
      },
      {
        name: "Smith",
        position: "Accountant",
      },
      {
        name: "John",
        position: "Management",
      },
      {
        name: "Kevin",
        position: "Developer",
      },
    ],
  },
  {
    name: "branches",
    data: [
      {
        department: "PWD",
        location: "New York",
      },
      {
        department: "Accounts",
        location: "Toranto",
      },
      {
        department: "Health",
        location: "Las Vegas",
      },
    ],
  },
  {
    name: "Test",
    data: [
      {
        a: "A1",
        b: "B1",
        c: "C1",
      },
      {
        a: "A2",
        b: "B2",
        c: "C2",
      },
      {
        a: "A3",
        b: "B3",
        c: "C3",
      },
    ],
  },
];

const App = () => {
  const [Data, setData] = useState(tableData);
  const [table, setTable] = useState(null);
  const openTableHandler = (i) => {
    const dataCtx = Data[i].data;
    if (dataCtx.length === 0) {
      setTable(null);
    }
    const firstData = dataCtx[0];
    const keysForTableHead = Object.keys(firstData);
    const tableHead = keysForTableHead.map((key) => {
      let toRet = (
        <>
          <th>{key}</th>
        </>
      );
      return toRet;
    });
    const tableBodyData = Data[i].data.map((valBoday, idx) => {
      const keys = Object.keys(valBoday);
      const tdInTable = keys.map((key) => {
        let toRet = (
          <>
            <td>{valBoday[key]}</td>
          </>
        );
        return toRet;
      });
      return <tr>{tdInTable}</tr>;
    });
    const tableShow = (
      <table className="users">
        {tableHead}
        <tbody>{tableBodyData}</tbody>
      </table>
    );
    setTable(tableShow);
  };
  return (
    <div className="App">
      <div className="tabbar">
        {Data.map((val, i) => {
          return (
            <>
              <div onClick={(e) => openTableHandler(i)}>{val.name}</div>
            </>
          );
        })}
      </div>
      {table}
    </div>
  );
};
export default App;
