import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/Canvas.css'

const Canvas = ({ components, selectedComponent, setSelectedComponent}) => {

  const handleSelect = (component) => {
    setSelectedComponent(component);
    console.log('Selected component:', component);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="canvas">
            {components.map((component, index) => (
              <Draggable key={index} onStop={() => handleSelect(component) } bounds="parent">
                <div className={`draggable-component ${selectedComponent === component ? 'selected' : ''}`}>{component}</div>
              </Draggable>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Canvas;
