import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Canvas from './components/Canvas';
import Components from './components/Components';
import PropertiesPanel from './components/PropertiesPanel';
import DeleteComponentButton from './components/DeleteComponentButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentComponents, setCurrentComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const selectedRef = useRef(null);

  const handleRemove = () => {
    const updatedComponents = currentComponents.filter((component, index) => index !== currentComponents.indexOf(selectedComponent));
    setSelectedComponent(null);
    setCurrentComponents(updatedComponents);
  };

  return (
    <Container fluid>
      <Row className="border m-2">
        <Col xs={8} className="p-2 border">
          <Canvas
            components={currentComponents}
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
            selectedRef={selectedRef}
            className="canvas"
          />
        </Col>
        <Col xs={4} className="p-2 border">
          <Components setCurrentComponents={setCurrentComponents} />
          <DeleteComponentButton
            selectedComponent={selectedComponent}
            handleRemove={handleRemove}
          />
          <h2>Edit Attributes</h2>
          <PropertiesPanel
            selectedComponent={selectedComponent}
            selectedRef={selectedRef}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
