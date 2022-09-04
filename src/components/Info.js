import "../App.css";
import { react, useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Info() {
  return (
    <Container fluid>
        <Col className="col">
            <Row className="name-abbr-container">
                <Col className="name"><h3>NAME</h3></Col>
                <Col className="abbr"><h6>ABBR</h6></Col>
            </Row>
            <Row>
                Row 2
            </Row>
        </Col>
        <Col>

        </Col>
    </Container>
  );
}

export default Info;
