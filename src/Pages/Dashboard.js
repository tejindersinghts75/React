import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Import charts components
import { auth, db } from "../Firebase";
import { useEffect } from 'react';
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from "firebase/database";

// import profileImage from './profile.jpg'; // Import your profile image here

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  
  // useEffect(() => {
  //   const query = ref(db, "Users");
  //   return onValue(query, (snapshot) => {
  //     const data = snapshot.val();

  //     if (snapshot.exists()) {
  //       Object.values(data).map((project) => {
  //         console.log(project)
  //       });
  //     }
  //   });
  // }, []);
  const [showData, setShowData] = useState([])
  useEffect(()=>{
   const fetchData = auth.onAuthStateChanged(user =>{
    const email = user.email
    console.log(email)
    if(email)
    {
      
      const userId = user.uid;
  
      const base = ref(db, 'Users');
      const getId = query(base , orderByChild('email'), equalTo(email))
      
      const output  = onValue(getId , (snapshot) =>{
         const result = snapshot.val()
        
         if(result){
          const output =Object.values(result)[0]
        
          setShowData(output)
        
         }  
        
      })  
    }
   })
    
},[])
console.log(showData)

  
return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
     

      {/* Sidebar Navigation */}
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <Image src="{profileImage}" roundedCircle fluid className="profile-img mb-3" />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Dashboard</Nav.Link>
              <Nav.Link href="#charts">Charts</Nav.Link>
              <Nav.Link href="#widgets">Widgets</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={10} className="main-content">
            <h1>Welcome, {showData.firstname} !</h1>
          
               
     
            <Row className="mt-4">
              <Col md={6}>
                <Card>
                  <Card.Header>Widget 1</Card.Header>
                  <Card.Body>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Header>Widget 2</Card.Header>
                  <Card.Body>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
