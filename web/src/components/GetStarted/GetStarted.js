import React, { useState }from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container, Modal} from "react-bootstrap";
import Input from '../Input';

export default function GetStarted() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="getStarted">
      <img
        src={getStarted}
        alt="none"
        className="startedImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="5"
        data-aos-duration="370"
        easing="ease-in-cubic"
      />
      <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Collaborate with anyone you want, however you want.
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            LGR is an online creator marketplace that gives you the freedom to
            find collaborations opportunities, grow your brand and learn from
            others.
          </p>
          <button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
            onClick={handleShow}
          >
          <strong>Get on the Waitlist</strong> - It's free
          </button>
          <Modal
            className={"signup-modal"}
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Input />
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </section>
  );
}
