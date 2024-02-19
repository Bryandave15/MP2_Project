import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import DashboardTable from './dashboardTable';

function Dashboard() {
  return (
    <div className='container'>
    
    <CardGroup className='bg-light mb-2 text-center'>
      <Card className='bg-secondary me-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>For inspection</Card.Title>
          <Card.Text>
             For Inspection Dashboard <br />
            <a href='#'>Inspection</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='bg-secondary ms-1 me-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Meetings</Card.Title>
          <Card.Text>
            For Meetings dashboard <br></br> <a href=''> projectplans</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='bg-secondary ms-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title> Drawings / Plan</Card.Title>
          <Card.Text>
            For Drawings / Plans Dashboard
            <a href=''> TBD</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className='bg-light text-center'>
      <Card className='bg-secondary me-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Schedules</Card.Title>
          <Card.Text>
            For schedule Dashbboard <br />
            <a href='#'>Schedule</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='bg-secondary ms-1 me-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Forms</Card.Title>
          <Card.Text>
            For Forms Dashbboard. <br></br> <a href=''> projectplans</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='bg-secondary ms-1'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title> Project Information</Card.Title>
          <Card.Text>
            For Project information Dashboard <br></br>
            <a href=''> TBD</a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    
    <CardGroup>
    <Card className="text-center">
      <Card.Header>Newly Added</Card.Header>
      <Card.Body>
        <Card.Title style={{ borderBottom: '2px solid black' }}>Latest Added from Tools</Card.Title>
        <DashboardTable />
      </Card.Body>
    
    </Card>
    </CardGroup>
    </div>

    
    

  );
}

export default Dashboard;