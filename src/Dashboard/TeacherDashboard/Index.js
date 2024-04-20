import {
  DollarCircleOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherCreatedTests } from '../../actions/testActions';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const dispatch = useDispatch()
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [noOftests, setnoOftests] = useState(0);
  const [revenue, setRevenue] = useState(0);

  const testsData = useSelector(state => state.tests.teacherCreatedTest);
  const teacherProfileData = useSelector(state => state.dashboard.userData);

  const getOrders = () => {
    dispatch(fetchTeacherCreatedTests());
    setOrders(testsData);
  }
  const noOftestscreated = () => {


    setnoOftests(testsData.length);
  }
  const getInventory = () => {
    // console.log(testsData)
  }

  const getRevenue = () => {

  }
  useEffect(() => {
    getOrders();
    noOftestscreated()
  }, [dispatch]);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", margin: "2rem" }}>
      <Space direction="horizontal" >
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Created Tests'}
          value={orders.length}
        />
         <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={'Subscribers'}
          value={teacherProfileData.subscribers.length}
        />
        {/* <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Inventory'}
            value={inventory}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: 'purple',
                  backgroundColor: 'rgba(0,255,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Customer'}
            value={noOftests}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: 'red',
                  backgroundColor: 'rgba(255,0,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={'Revenue'}
            value={revenue}
          /> */}
      </Space>
      <Space style={{ marginTop: "3rem", width: "100%" }}>
        <LatestTests />
      </Space>
    </div>
  );
}

//For the creation of the icons on the top
function DashboardCard({ title, value, icon }) {
  return (
    title = title,
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

//For the Table that is showing in the image.
function LatestTests() {

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const testsData = useSelector(state => state.tests.teacherCreatedTest);

  const getOrders = () => {
    dispatch(fetchTeacherCreatedTests());
    setDataSource(testsData);
  }

  useEffect(() => {
    setLoading(true);
    getOrders();
    setLoading(false);
  }, [dispatch]);
  const renderGivenByColumn = (submittedBy) => {
    return submittedBy.length;
  };

  return (
    <div style={{ width: "200%" }}>
      <Typography.Text style={{ fontSize: "20px" }}><b className="mt-5">Letest Exams Created</b></Typography.Text>

      <Table
        columns={[
          {
            title: "Test Name",
            dataIndex: "testName",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Duration",
            dataIndex: "totalMinutes",
          },
          {
            title: "Total Marks",
            dataIndex: "totalMarks",
          },
          {
            title: "Given By",
            dataIndex: "submitedBy",
            render: renderGivenByColumn
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </div>
  );
}


export default Dashboard;
