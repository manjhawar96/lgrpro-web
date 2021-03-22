import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    return (
        <div className="fixed-bottom footer">
            <div className="d-flex justify-space-between">
                <Col>
                    <h5 className="title">LGR</h5>
                    <p>
                        Empowering Creators.         <br />  
                        Providng value to Brands.    <br />
                    </p>
                </Col>
                <Col>
                    <h5 className="title">Contact us</h5>
                    <p>
                        <b> lgr (at) gmail.com </b> <br />
                        810 Dexter Ave              <br />
                        Seattle 98109               <br />
                    </p>
                </Col>
            </div>
        </div>
    );
  }
  
  export default Footer;