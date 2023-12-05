import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/Canvas.css'

const Canvas = ({ components, selectedComponent, setSelectedComponent, handleSelectedComponent, selectedRef}) => {

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="canvas">
            {components.map((component, index) => (
              <Draggable key={index} onStop={() => handleSelect(component) } bounds="parent">
                <div className={`draggable-component ${selectedComponent === component ? 'selected' : ''}`}  ref={selectedRef} >{component}</div>
              </Draggable>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Canvas;