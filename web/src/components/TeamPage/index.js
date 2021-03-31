import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imgmj from './mj.jpeg'; 
import imgex from './ex.jpeg';
import imgnick from './nick.png';
import './TeamPage.css';

function TeamPage() {
    return (
        <Container className="slider-page d-flex container-fluid justify-content-center align-items-center"> 
            <Row className="d-flex justify-content-between align-items-center flex-column flex-md-row flex-lg-row flex-xl-row">
                <Col className="col-4">
                    <Card style={{ width: '100%', border: 'none'}}>
                        <Card.Img className="right-offset team-member__image" variant="top" src={imgex} />
                        <Card.Body>
                            <Card.Title><a href="https://www.linkedin.com/in/emma-xia/">Emma Xia</a></Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-4">
                    <Card style={{ width: '100%', border: 'none'}}>
                        <Card.Img className="right-offset team-member__image" variant="top" src={imgmj} />
                        <Card.Body>
                            <Card.Title><a href="https://www.linkedin.com/in/manesh-jhawar-b07035125/">Manesh Jhawar</a></Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-4">
                    <Card style={{ width: '100%', border: 'none' }}>
                        <Card.Img className="right-offset team-member__image" variant="top" src={imgnick} />
                        <Card.Body>
                            <Card.Title>Nick Zhang</Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>
        </Container>
    ); 
}

export default TeamPage; 