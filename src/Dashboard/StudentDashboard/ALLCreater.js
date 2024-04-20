import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCretater, subscribeToTeacher, unsubscribetoTeacher} from '../../actions/subscribers';
import img from "../../assets/pngegg.png"

function ALLCreater() {


  const allCreterwithSubStatus = useSelector(state => state.subcriptiondata.allCreterwithSubStatus);
  const subcribeSuccess = useSelector(state => state.subcriptiondata.subcribeSuccess);
  const unsubcribeSuccess = useSelector(state => state.subcriptiondata.unsubcribeSuccess);
  console.log(unsubcribeSuccess);
console.log(allCreterwithSubStatus);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchAllCretater())
  
    }, [dispatch,subcribeSuccess,unsubcribeSuccess]);
  

    const handleSubscribe = (id) => {
      // Dispatch action to subscribe student to teacher

      dispatch(subscribeToTeacher(id));
  };

  const handleUnsubscribe = (id) => {
      dispatch(unsubscribetoTeacher(id));
  };


  return (
    <div>
      <h1> ALL Creator</h1>
      <div>
        {allCreterwithSubStatus.map((subscription, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={img} alt="Creator" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
              <div>{subscription.name}</div>
              <div>Subscribers: {subscription.subscribers.length}</div>
              {subscription.isSubscribed ? (
                
                <button onClick={()=>handleUnsubscribe(subscription._id)}>Unsubscribe</button>
              ) : (
                
                <button onClick={()=>handleSubscribe(subscription._id)}>Subscribe</button>
                )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ALLCreater