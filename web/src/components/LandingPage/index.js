import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function LandingPage() {
    return (
        <Container className="slider-page d-flex justify-content-center align-items-center landing"> 
            <Row className="middle-row">
                <Col>   
                {/* 
                <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="80%">LGR</text>
                </symbol>
                    <g class = "g-ants">
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                        <use xlinkHref="#s-text" class="text-copy"></use>
                    </g>
                </svg> */}
                <h1> lgr </h1>
                    <p> 
                        <b>empowering creators and building a bridge between creators and brands</b> 
                    </p>
                </Col>
            </Row>
        </Container>
    ); 
}

export default LandingPage; 