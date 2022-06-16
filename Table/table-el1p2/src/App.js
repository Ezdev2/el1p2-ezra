// import logo from './logo.svg';
import './App.css';
import { dataTables } from './constants/dataTables';
import { Icon } from '@iconify/react';
// import { useState } from 'react';

function App() {
  return (
    <Table/>
  );
}

function Table() {
  return (
      <>
          <div className="">
              <h1>Tables</h1>
          </div>
          <div className='table-content'>
            <TableHeader/>
            <Tableau/>
            <TableFooter/>
          </div>
      </>        
  )
}

function TableHeader() {
    return(
      <>
        <h4 className='table-title'> <span><Icon icon="mdi:table" /></span> DataTable Exemple</h4>
        <div className='select-form'>
            <div className='select-area'>
                <select id='selectPageEntries'>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
                <label for='selectPageEntries'>entries per page</label>
            </div>
            <div>
                <input type="search" placeholder='Search...'/>
            </div>
        </div>
      </>
    )
}

// let myData = dataTables;

// function handleHide(e) {
//   return(
//     myData.length = e,
//     myData
//   )
// }

function Tableau() {
    return (
      <table >
          <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>Salary</th>
          </tr>
          {dataTables.map((dataTable) => {
              return <DataContent content={dataTable} />;
              })} 
      </table>
    )
}

const DataContent = (props) => {
  const { name, position, office, age, startDate, salary } = props.content;
  return (
      <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{office}</td>
        <td>{age}</td>
        <td>{startDate}</td>
        <td>{salary}</td>
      </tr>
  )
}

function TableFooter() { 
    // let [myData, setmyData] = useState(0);
  return(
    <div className='table-footer'>
        <label>Show 1 to 10 of 57 entries</label>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
        </div>
    </div>
  )
}

export default App;
