import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';

function StudentResult() {


  const studenttresultforteacher = useSelector(state => state.tests.teacherCreatedTest);


  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchTeacherCreatedTests())

  }, [dispatch]);

  return (
    <div>
      <div style={{ marginTop: "10px" }} >
        <h1>Student Results</h1>
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
                  <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                  <ul className="pagination">
                    <li className="page-item disabled"><a href="/">Previous</a></li>
                    <li className="page-item"><a href="/" className="page-link">1</a></li>
                    <li className="page-item"><a href="/" className="page-link">2</a></li>
                    <li className="page-item active"><a href="/" className="page-link">3</a></li>
                    <li className="page-item"><a href="/" className="page-link">4</a></li>
                    <li className="page-item"><a href="/" className="page-link">5</a></li>
                    <li className="page-item"><a href="/" className="page-link">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>



  )
}

export default StudentResult