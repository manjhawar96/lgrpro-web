import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imgmj from './mj.jpeg'; 
import imgex from './ex.jpeg';

function TeamPage() {
    return (
        <Container className="slider-page d-flex container-fluid justify-content-center align-items-center"> 
            <Row className="d-flex justify-content-between align-items-center">
                <Col>
                    <Card style={{ width: '15rem', border: 'none'}}>
                        <Card.Img className="right-offset" variant="top" src={imgex} />
                        <Card.Body>
                            <Card.Title><a href="https://www.linkedin.com/in/emma-xia/">Emma Xia</a></Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '15rem', border: 'none'}}>
                        <Card.Img className="right-offset" variant="top" src={imgmj} />
                        <Card.Body>
                            <Card.Title><a href="https://www.linkedin.com/in/manesh-jhawar-b07035125/">Manesh Jhawar</a></Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* 
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Nick Zhang</Card.Title>
                            <Card.Text>
                                Co-founder 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                */}
            </Row>
        </Container>
    ); 
}

export default TeamPage; 