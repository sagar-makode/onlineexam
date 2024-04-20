import React, { useEffect } from 'react'
import { fetchStudentSubcriptions } from '../../actions/subscribers';
import { useDispatch, useSelector } from 'react-redux';

import img from "../../assets/pngegg.png"
function Subcriptions() {

  const studentSubcriptions = useSelector(state => state.subcriptiondata.studentSubcriptions);


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStudentSubcriptions())

  }, [dispatch]);


  return (
    <div>
      <h1> My Subcriptions</h1>
      <div>
        {studentSubcriptions.map((subscription, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={img} alt="Creator" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
              <div>{subscription.name}</div>
              <div>Subscribers: {subscription.subscribers.length}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Subcriptions