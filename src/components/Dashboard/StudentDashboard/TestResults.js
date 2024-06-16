import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './testresult.css'
import { Pagination } from 'react-bootstrap';

function TestResults() {


  const studenttestresult = useSelector(state => state.tests.studenttestresult);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = studenttestresult.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalItems = studenttestresult.length;
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  

  return (
  
   
    <div >
      <div className='main-content-table' >

        <div className="row">

          <div className="table-responsive">
            <div className="table-wrapper">
              {/* <div className="table-title">
                <div className="row">
                  <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
                    <h2 className="ml-lg-2">Manage Employees</h2>
                  </div>
                 
                </div>
              </div> */}
              <table className="table table-striped table-hover" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th  id='table-header' scope="col">#</th>
                    <th id='table-header' scope="col">Test Name</th>
                    <th  id='table-header' scope="col">Correct Answers</th>
                    <th  id='table-header' scope="col">Total Questions</th>
                    <th  id='table-header' scope="col">Obtained Marks</th>
                    <th  id='table-header' scope="col">Total Marks</th>
                    <th  id='table-header' scope="col">Status</th>

                  </tr>
                </thead>

                <tbody style={{ fontSize: "18px" }}>
                  {studenttestresult.map((result, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1 + (currentPage - 1) * itemsPerPage}</th>
                      <td>{result.testName}</td>
                      <td>{result.correctAnswers}</td>
                      <td>{result.totalQuestions}</td>
                      <td>{result.obtainedMarks}</td>
                      <td>{result.totalMarks}</td>
                      <td>{result.passStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="clearfix">
              <div className="hint-text">
                  Showing <b>{Math.min(currentItems.length, itemsPerPage)}</b> out of <b>{totalItems}</b> entries
                </div>
                <Pagination className="d-flex justify-content-center pagination">
                  <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item key={index} onClick={() => setCurrentPage(index + 1)} active={index + 1 === currentPage}>
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
                </Pagination>
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestResults