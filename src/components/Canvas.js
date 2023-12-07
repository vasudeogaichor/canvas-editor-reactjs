import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/Canvas.css'

const Canvas = ({ history, currentStep, selectedComponent, handleSelect }) => {

  return (
    <Container fluid>
      
      <Row>
        <Col>
          <div className="canvas">
            {history[currentStep - 1]?.map((component, index) => (
              <Draggable key={index} onStop={() => handleSelect(component)} bounds="parent">
                <div
                  className={`draggable-component ${selectedComponent === component ? 'selected' : ''}`}
                  ref={(node) => {
                    // 'node' is the DOM element you can directly reference
                    if (node) {
                      // Do any additional setup or logic here
                    }
                  }}
                >
                  {component}
                </div>
              </Draggable>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Canvas;
