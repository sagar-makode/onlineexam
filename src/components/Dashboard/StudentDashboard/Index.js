import React, { useState } from 'react';
import { Card, Row, Col, Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

function Index() {
  const studentSubcriptions = useSelector(state => state.subcriptiondata.studentSubcriptions);
  const studenttestresult = useSelector(state => state.tests.studenttestresult);
  const passedTestsCount = studenttestresult.filter(test => test.passStatus === 'Pass').length;
  const failedTestsCount = studenttestresult.filter(test => test.passStatus === 'Fail').length;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = studenttestresult.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = studenttestresult.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div style={{ marginTop: '1.3%' }}>
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
                      <p className="card-category">Subscriptions  : <span style={{fontWeight:"bold"}}>{studentSubcriptions.length}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Subscriptions </p>
                    <Card.Title as="h4">{studentSubcriptions.length}</Card.Title>

                      

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
                      <p className="card-category">Given Exam : <span style={{fontWeight:"bold"}}>{studenttestresult.length}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Attempted Exam</p>
                    <Card.Title as="h4">{studenttestresult.length}</Card.Title>

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
                      <p className="card-category">Test Passed : <span style={{fontWeight:"bold"}}>{passedTestsCount}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Test Passed</p>
                    <Card.Title as="h4">{passedTestsCount}</Card.Title>
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
                      <p className="card-category">Test Failed : <span style={{fontWeight:"bold"}}>{failedTestsCount}</span></p>
                    
                    </div>:<div>   
                    <p className="card-category">Test Failed</p>
                    <Card.Title as="h4">{failedTestsCount}</Card.Title>
                    </div>}
                
                  </div>

                  
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3>Attempted Exams</h3>
      <div className='main-content-table'>
        <div className="row">
          <div className="table-responsive">
            <div className="table-wrapper">
              <table className="table table-striped table-hover" style={{ textAlign: 'center' }}>
                <thead>
                  <tr>
                    <th id='table-header' scope="col">#</th>
                    <th id='table-header' scope="col">Test Name</th>
                    <th id='table-header' scope="col">Correct Answers</th>
                    <th id='table-header' scope="col">Total Questions</th>
                    <th id='table-header' scope="col">Obtained Marks</th>
                    <th id='table-header' scope="col">Total Marks</th>
                    <th id='table-header' scope="col">Status</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '18px' }}>
                  {currentItems.map((test, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1 + (currentPage - 1) * itemsPerPage}</th>
                      <td>{test.testName}</td>
                      <td>{test.correctAnswers}</td>
                      <td>{test.totalQuestions}</td>
                      <td>{test.obtainedMarks}</td>
                      <td>{test.totalMarks}</td>
                      <td>{test.passStatus}</td>
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
  );
}

export default Index;
