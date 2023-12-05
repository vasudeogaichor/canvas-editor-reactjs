import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

// import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent }) => {
  if (!selectedComponent) {
    return null;
  }

  return (
    <Container fluid className="properties-panel">
      <Row>
        <Col>
          {/* Display properties based on the selected component type */}
          {/* Example: For 'text' component, show input fields for style, font, size, background color, etc. */}
          <Form>
            {/* Example property input field */}
            <Form.Group controlId="exampleProperty">
              <Form.Label>Example Property</Form.Label>
              <Form.Control type="text" placeholder="Enter value" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertiesPanel;
