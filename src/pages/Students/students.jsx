import React, { useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import '../../components/applayout/styles.css';
import './students.css';

function Student() {
  return <AppLayout body={<Body />} />;
}

function Body() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const sampleData = [
    { pid: 1, problem_student: "Student A", product_type: "Type 1" },
    { pid: 2, problem_student: "Student B", product_type: "Type 2" },
    { pid: 3, problem_student: "Student C", product_type: "Type 3" },
    { pid: 4, problem_student: "Student D", product_type: "Type 4" },
    { pid: 5, problem_student: "Student E", product_type: "Type 5" },
    { pid: 6, problem_student: "Student F", product_type: "Type 6" },
    { pid: 7, problem_student: "Student G", product_type: "Type 7" },
    { pid: 8, problem_student: "Student H", product_type: "Type 8" },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredData = sampleData.filter(
    (row) =>
      row.problem_student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.product_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stu-body">
      <h3>PROBLEM STATEMENTS</h3>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <table className="custom-table">
          <thead>
            <tr>
              <th>PID</th>
              <th>Problem Student</th>
              <th>Product Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <tr key={row.pid}>
                  <td>{row.pid}</td>
                  <td>{row.problem_student}</td>
                  <td>{row.product_type}</td>
                  <td>
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-secondary">Apply</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="pagination-select"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <span>
            {page * rowsPerPage + 1}-
            {Math.min((page + 1) * rowsPerPage, filteredData.length)} of{" "}
            {filteredData.length}
          </span>
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
            className="pagination-btn"
          >
            {"<"}
          </button>
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={(page + 1) * rowsPerPage >= filteredData.length}
            className="pagination-btn"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Student;
