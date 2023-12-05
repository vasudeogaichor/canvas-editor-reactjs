import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Canvas from './components/Canvas';
import Components from './components/Components';
import PropertiesPanel from './components/PropertiesPanel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentComponents, setCurrentComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <Container fluid>
      <Row className="border m-2">
        <Col xs={8} className="p-2 border">
          <Canvas components={currentComponents} 
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
           className="canvas"/>
        </Col>
        <Col xs={4} className="p-2 border">
        <Components setCurrentComponents={setCurrentComponents} />
        <PropertiesPanel selectedComponent={selectedComponent} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
