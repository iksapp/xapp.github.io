import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Poster = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-4 mt-4 pt-md-4" >
          <p style={{ fontSize: "5rem", textAlign:'center' }}>Project Poster</p>
        </Row>
        <Row className="sec_sp mt-4">
          <Col lg="12" className="mb-4 text-center">
            <h2 className="large-header">Poster</h2>
            <a href="/poster/poster.pdf" download="ProjectPoster.pdf">
              <Button variant="primary" style={{backgroundColor: 'red'}}>Download Poster PDF</Button>
            </a>
          </Col>
          <Col lg="12" className="text-center">
            <img src="/poster/poster.jpg" alt="Project Poster" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
