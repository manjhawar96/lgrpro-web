import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img.png';

function BrandInfoPage() {
    return (
        <Container className="slider-page d-flex justify-content-center align-items-center"> 
            <Row className="middle-row d-flex justify-content-around align-items-center">
                <Col className="col-images col-8">
                    <img className="screencap left-offset" src={img} alt="creator screencap"/>
                </Col>
                <Col className="text-left col-data">
                    <h3> Greetings, Brands!</h3>
                    <p>
                        Listing platform for brands, eliminating the need for hiring contracting agencies to get infleuncers. 
                    </p>
                    <p>
                        This platform will provide you for a one stop place to list all you outreach job for creators, elimating the need 
                        to hire agencies to recruit influencers and creators. 
                    </p>
                    <p> 
                        With insights from multiple marketing and advertisment paltforms and the hired creators, 
                        unederstand your outreach needs and optimize your companies outreach goals. 
                    </p>
                </Col>
            </Row>
        </Container>
    ); 
}

export default BrandInfoPage; 