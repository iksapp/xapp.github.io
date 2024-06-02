import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";

export const SourceCode = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-4 mt-4 pt-md-4">
          <p style={{ fontSize: "5rem", textAlign: 'center' }}>Project Source Code</p>
        </Row>
        <Row className="sec_sp mt-4">
          <Col lg="12" className="mb-4 text-center" style={{ marginTop: '50px' }}>
            <h1 className="large-header">Github Link:</h1>

            <h2 className="large-header">
              <a href="https://github.com/TUSAS-GeliApp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'pink', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'pink'}>
                https://github.com/TUSAS-GeliApp
              </a>
            </h2>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
