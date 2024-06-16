

import React, { useState } from 'react'
import { Card, Row, Col, Pagination } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';



function Index() {

  const teacherProfileData = useSelector(state => state.dashboard.userData);
  const studenttresultforteacher = useSelector(state => state.tests.teacherCreatedTest);

  const trachertestData = useSelector(state => state.tests.teacherCreatedTest);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = trachertestData.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = trachertestData.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  function countPassFailStudents(studenttresultforteacher) {
    let passCount = 0;
    let failCount = 0;
    studenttresultforteacher.forEach(student => {
      student.submitedBy.forEach(status => {
    
        if (status.passStatus === "Pass") {
          passCount++;
    
        } else if (status.passStatus === "Fail") {
          failCount++;
        }
      })
    })

    return { passCount, failCount };
  }
  const { passCount, failCount } = countPassFailStudents(studenttresultforteacher);



  return (
    <div style={{ marginTop: "1.3%" }}>
      <Row>

        <Col lg="3" sm="6" xs="6">
          <Card className="card-stats">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="5" className="d-flex justify-content-center align-items-center icon-col">
                  <div className="icon-big text-center icon-warning">
                    <span className="material-symbols-outlined text-danger custom-icon">subscriptions</span>
                  </div>
                </Col>
                <Col xs="7" className="d-flex flex-column justify-content-center text-col">
                  <div className="numbers">
                   
                    {isMobile?<div>
                      <p className="card-category">Subscribers  : <span style={{fontWeight:"bold"}}>{teacherProfileData.subscribers.length}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Subscribers </p>
                    <Card.Title as="h4">{teacherProfileData.subscribers.length}</Card.Title>          

                    </div>}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>


        <Col lg="3" sm="6" xs="6">
          <Card className="card-stats">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="5" className="d-flex justify-content-center align-items-center icon-col">
                  <div className="icon-big text-center icon-warning">
                    <span className="material-symbols-outlined text-primary custom-icon">quiz</span>
                  </div>
                </Col>
                <Col xs="7" className="d-flex flex-column justify-content-center text-col">
                  <div className="numbers">
                   
                    {isMobile?<div>
                      <p className="card-category">Test Created : <span style={{fontWeight:"bold"}}>{trachertestData.length}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Test Created</p>
                    <Card.Title as="h4">{trachertestData.length}</Card.Title>        
                    </div>}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>


        <Col lg="3" sm="6" xs="6">
          <Card className="card-stats">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="5" className="d-flex justify-content-center align-items-center icon-col">
                  <div className="icon-big text-center icon-warning">
                    <span className="material-symbols-outlined text-success custom-icon">emoji_events</span>
                  </div>
                </Col>
                <Col xs="7" className="d-flex flex-column justify-content-center text-col">
                  <div className="numbers">
                   
                    {isMobile?<div>
                      <p className="card-category">Passed Student : <span style={{fontWeight:"bold"}}>{passCount}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Passed Student</p>
                    <Card.Title as="h4">{passCount}</Card.Title>   

                    </div>}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" sm="6" xs="6">
          <Card className="card-stats">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="5" className="d-flex justify-content-center align-items-center icon-col">
                  <div className="icon-big text-center icon-warning">
                    <span className="material-symbols-outlined text-warning custom-icon">thumb_down</span>
                  </div>
                </Col>
                <Col xs="7" className="d-flex flex-column justify-content-center text-col">
                  <div className="numbers">
                   
                    {isMobile?<div>
                      <p className="card-category">Failed Student : <span style={{fontWeight:"bold"}}>{failCount}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Failed Student</p>
                    <Card.Title as="h4">{failCount}</Card.Title>

                    </div>}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>


      
      </Row>


      <h3>Created Exams</h3>
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
                    <th id='table-header' scope="col">Category</th>
                    <th id='table-header' scope="col">Duration</th>
                    <th id='table-header' scope="col">Total Marks</th>
                    <th id='table-header' scope="col">Submissions</th>

                  </tr>
                </thead>

                <tbody style={{ fontSize: "18px" }}>
                  {currentItems.map((test, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1 + (currentPage - 1) * itemsPerPage}</th>
                      <td>{test.testName}</td>
                      <td>{test.category}</td>
                      <td>{test.totalMinutes}</td>
                      <td>{test.totalMarks}</td>
                      <td>{test.submitedBy.length}</td>
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

export default Index