import React, { useEffect } from 'react'
import profileimag from "../assets/profile image.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCretaterforHomePage } from '../actions/landingPageActions';


function AllTopCreators() {

    const allCreterData = useSelector(state => state.landingpagedata.allCreterData);
    const dispatch = useDispatch()
    useEffect(() => {
   
        dispatch(fetchAllCretaterforHomePage());
    }, [dispatch]);
  return (
    <div className="container mt-4">
            <h4 className='text-center'><span style={{ color: "red" }}>-- </span>ALL Top Creators<span style={{ color: "red" }}> --</span></h4>
            <div className="creator-list">
                {allCreterData.map((creater, index) => (
                    <div key={index} className="creator-item">
                        <div className="creator-item-content">
                            <img src={creater.imagepath ? creater.imagepath : profileimag} alt="Creator" className="creator-item-img" />
                            <div>{creater.name}</div>
                            <div>Subscribers: {creater.subscribers.length}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default AllTopCreators