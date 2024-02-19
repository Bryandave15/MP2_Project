// Dashboard.js

import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useEffect,} from 'react';
import InspectionList from './innerpage/inspection'

const Todo = () => {

  var navigate = useNavigate(); 
  useEffect( ()=>{
      const validateAccess = localStorage.getItem('loginUser');
      
      if(validateAccess == null){
        navigate('/login');
        alert('You need to log in first')
      }
      
  }, []); 

  return (
    <Container fluid className="p-0">
      <Header />
      
      <Row className="flex-grow-1 m-0">
        <Col lg={2} className="bg-light sidebar p-0" style={{ height: '100vh', overflowY: 'auto' }}>
          <Sidebar />
        </Col>
        <Col lg={10} className="content p-3 mx-auto" style={{ height: '100vh', overflowY: 'auto' }}>
          <InspectionList />
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
