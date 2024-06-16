import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';
import { Pagination } from 'react-bootstrap';

function StudentResult() {


  const studenttresultforteacher = useSelector(state => state.tests.teacherCreatedTest);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = studenttresultforteacher.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalItems = studenttresultforteacher.length;
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchTeacherCreatedTests())

  }, [dispatch]);

  return (
  
    
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
                      <th id='table-header' scope="col">#</th>
                      <th id='table-header' scope="col">Test Name</th>
                      <th id='table-header' scope="col">Student Name</th>

                      <th id='table-header' scope="col">Correct Answers</th>
                      <th id='table-header' scope="col">Total Questions</th>
                      <th id='table-header' scope="col">Obtained Marks</th>
                      <th id='table-header' scope="col">Total Marks</th>
                      <th id='table-header' scope="col">Status</th>

                    </tr>
                  </thead>

                  <tbody style={{ fontSize: "18px" }}>
                    {studenttresultforteacher.map((result, index) => (
                      // Check if submitedBy is not null and not empty
                      result.submitedBy && result.submitedBy.length > 0 && (
                        <React.Fragment key={index}>
                          {result.submitedBy.map((submittedItem, subIndex) => (
                            <tr key={subIndex}>
                              <th scope="row">{subIndex + 1}</th>
                              <td>{submittedItem.testName}</td>
                              <td>{submittedItem.name}</td>
                              <td>{submittedItem.correctAnswers}</td>
                              <td>{submittedItem.totalQuestions}</td>

                              <td>{submittedItem.obtainedMarks}</td>
                              <td>{submittedItem.totalMarks}</td>
                              <td>{submittedItem.passStatus}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      )
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
    



  )
}

export default StudentResult