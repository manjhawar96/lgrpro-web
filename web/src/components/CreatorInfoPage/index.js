import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img.png';

function CreatorInfoPage() {
    return (
        <Container className="slider-page d-flex justify-content-center align-items-center"> 
            <Row className="middle-row d-flex justify-content-around align-items-center">
                <Col className="text-right col-data">
                    <h3>Hey Creators!</h3>
                    <p>
                        We are building a market place and analytics engines for you to empower you to grow your personal brand, land contracts and have your all your outreach data in one place. 
                    </p>
                    <p>
                        Creators have the ability to put forward their profile for multiple marketing projects from brands, 
                        track their progress, analyze their outreach, and manage themselves better. 

                        You will have the ability to apply to multiple marketing gigs from diffrent brands, track the goals and 
                        manage your work yourself with transparency and data heavy analytics. 
                    </p>
                    <p>
                        The best part? <b>No middle man</b>
                    </p>
                </Col>
                <Col className="col-images col-8">
                    <img className="screencap right-offset" src={img} alt="creator screencap"/>
                </Col>
            </Row>
        </Container>
    ); 
}

export default CreatorInfoPage; 