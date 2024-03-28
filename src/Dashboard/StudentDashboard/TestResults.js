import React from 'react'

function TestResults() {
  return (
    <div style={{marginTop : "10px"}} > 
        <h1>Results</h1>
        
  
  
  
  <table className="table table-striped" style={{textAlign: "center"}}>
  <thead style={{fontSize:"20px"}}>
    <tr>
      <th style={{color:"white"}} className='bg-primary' scope="col">#</th>
      <th style={{color:"white"}} className='bg-primary' scope="col">Test Name</th>
      <th style={{color:"white"}} className='bg-primary' scope="col">Correct Answers</th>
      <th style={{color:"white"}} className='bg-primary' scope="col">Total Questions</th>
      <th style={{color:"white"}} className='bg-primary' scope="col">Obtained Marks</th>
      <th  style={{color:"white"}} className='bg-primary'scope="col">Total Marks</th>
      <th  style={{color:"white"}} className='bg-primary'scope="col">Status</th>

    </tr>
  </thead>
  <tbody style={{fontSize:"18px"}}>
    <tr>
      <th scope="row">1</th>
      <td>Math</td>
      <td>12</td>
      <td>20</td>
      <td>15</td>
      <td>30</td>
      <td>Pass</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Science</td>
      <td>10</td>
      <td>29</td>
      <td>16</td>
      <td>30</td>
      <td>Fail</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>History</td>
      <td>8</td>
      <td>20</td>
      <td>17</td>
      <td>40</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table></div>
  )
}

export default TestResults