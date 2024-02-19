// Dashboard.js

import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';  // Import the new Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import MeetingList from './innerpage/meetings';

const Meeting = () => {
  return (
    <Container fluid className="p-0">
      <Header />
      
      <Row className="flex-grow-1 m-0">
        <Col lg={2} className="bg-light sidebar p-0" style={{ height: '100vh', overflowY: 'auto' }}>
          <Sidebar />
        </Col>
        <Col lg={10} className="content p-3 mx-auto" style={{ height: '100vh', overflowY: 'auto' }}>
          <MeetingList />
        </Col>
      </Row>
    </Container>
  );
};

export default Meeting;
