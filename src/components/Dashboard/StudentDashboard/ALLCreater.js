import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCretater, subscribeToTeacher, unsubscribetoTeacher } from '../../actions/subscribers';
import img from '../../assets/profile image.png';
import { Button, Spinner } from 'react-bootstrap';

function ALLCreater() {
  const allCreterwithSubStatus = useSelector(state => state.subcriptiondata.allCreterwithSubStatus);
  const subcribeSuccess = useSelector(state => state.subcriptiondata.subcribeSuccess);
  const unsubcribeSuccess = useSelector(state => state.subcriptiondata.unsubcribeSuccess);

  const [loading, setLoading] = useState({}); // Add loading state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCretater());

  }, [dispatch, subcribeSuccess, unsubcribeSuccess]);
  useEffect(() => {
    setLoading({})

  }, [allCreterwithSubStatus]);

  const handleSubscribe = async id => {
    setLoading(prevLoadingStates => ({
      ...prevLoadingStates,
      [id]: true,
    }));
    dispatch(subscribeToTeacher(id));
  };

  const handleUnsubscribe = id => {
    setLoading(prevLoadingStates => ({
      ...prevLoadingStates,
      [id]: true,
    }));
    dispatch(unsubscribetoTeacher(id));

  };

  // useEffect(() => {
  //   if (subcribeSuccess || unsubcribeSuccess) {
  //     setLoading({});
  //   }
  // }, [subcribeSuccess, unsubcribeSuccess]);

  return (
    <div>
      {/* <h1>ALL Creator</h1> */}
      {/* <div>
        {allCreterwithSubStatus.map((subscription, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={subscription.imagepath || img} alt="Creator" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
              <div>{subscription.name}</div>
              <div>Subscribers: {subscription.subscribers.length}</div>
              {subscription.isSubscribed ? (
                <Button variant="danger" onClick={() => handleUnsubscribe(subscription._id)} disabled={loading[subscription._id]}>
                  {loading[subscription._id] ? <Spinner animation="border" size="sm" /> : 'Unsubscribe'}
                </Button>
              ) : (
                <Button variant="primary" onClick={() => handleSubscribe(subscription._id)} disabled={loading[subscription._id]}>
                  {loading[subscription._id] ? <Spinner animation="border" size="sm" /> : 'Subscribe'}
                </Button>
              )}
            </div>
           
          </div>
        ))}
      </div> */}

      <div className="mt-4">
            <h4 className='text-center'><span style={{ color: "red" }}>-- </span>ALL Top Creators<span style={{ color: "red" }}> --</span></h4>
            <div className="creator-list">
              {allCreterwithSubStatus.map((creater, index) => (
                <div key={index} className="creator-item" >
                  <div className="creator-item-content mt-2">
                    <img src={creater.imagepath ? creater.imagepath : img} alt="Creator" className="creator-item-img" />
                    <div>{creater.name}</div>
                    <div>Subscribers: {creater.subscribers.length}</div>
                    {creater.isSubscribed ? (
                <Button variant="danger"  className = "card-text-button "onClick={() => handleUnsubscribe(creater._id)} disabled={loading[creater._id]}>
                  {loading[creater._id] ? <Spinner animation="border" size="sm" /> : 'Unsubscribe'}
                </Button>
              ) : (
                <Button variant="primary" className = "card-text-button " onClick={() => handleSubscribe(creater._id)} disabled={loading[creater._id]}>
                  {loading[creater._id] ? <Spinner animation="border" size="sm" /> : 'Subscribe'}
                </Button>
              )}
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
}

export default ALLCreater;
