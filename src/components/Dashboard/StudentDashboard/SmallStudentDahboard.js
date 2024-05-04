import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function SmallStudentDahboard() {
    const testData = {
        totalTests: 10,
        passedTests: 7,
        failedTests: 3
      };

      const DashboardItem = ({ title, value, iconClass, description }) => {
        return (
          <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded' data-bs-toggle="tooltip" data-bs-placement="top" title={description}>
          
            <div className="row">
              <div className="col">
                <div className="d-flex align-items-center bg-white p-3">
                <Link >
                   
                   <span className="material-symbols-outlined icon">
                     subscriptions
                   </span>
                
                 <span className="text nav-text">Subscriptions</span>
               </Link>
                  <div className="ml-3">
                    Your text goes here
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        );
      }
      
      
      const RecentOrdersTable = () => {
        return (
          <table className="table caption-top bg-white rounded mt-2">
            <caption className='text-white fs-4'>Recent Orders</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        );
      }
      
  return (
    <div>
   <div className="px-3">
      {/* <Nav Toggle={Toggle} /> */}
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          <DashboardItem title="Products" value={230} iconClass="bi bi-cart-plus" />
          <DashboardItem title="Sales" value={2450} iconClass="bi bi-currency-dollar" />
          <DashboardItem title="Delivery" value={2250} iconClass="bi bi-truck" />
          <DashboardItem title="Increase" value="20%" iconClass="bi bi-graph-up-arrow" />
          
        </div>
        <RecentOrdersTable />
      </div>
    </div>
    </div>
  )
}

export default SmallStudentDahboard