import React, { useState } from 'react';
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
  const [componentAttributes, setComponentAttributes] = useState({});
  const [componentStyles, setComponentStyles] = useState({});
  const [textContent, setTextContent] = useState('');

  const handleTextEdit = (text) => {
    if (selectedComponent) {
      const updatedComponent = React.cloneElement(selectedComponent, { children: text });
      setSelectedComponent(updatedComponent);
      setCurrentComponents((prevComponents) =>
        prevComponents.map((component) =>
          component === selectedComponent ? updatedComponent : component
        )
      );
    }
    setTextContent(text);
  };

  const handleStyleChange = (style) => {
    setComponentStyles((prevStyles) => ({
      ...prevStyles,
      ...style,
    }));

    if (selectedComponent) {
      setSelectedComponent((prevComponent) => {
        const updatedComponent = React.cloneElement(prevComponent, {
          style: { ...prevComponent.props.style, ...style },
        });
        const updatedComponents = currentComponents.map((component) =>
          component === prevComponent ? updatedComponent : component
        );
        setCurrentComponents(updatedComponents);
        return updatedComponent;
      });
    }
  };

  const handleAttributeChange = (attribute, value) => {
    setComponentAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: value,
    }));
  
    if (selectedComponent) {
      setSelectedComponent((prevComponent) => {
        if (prevComponent && prevComponent.type === 'img') {
          const updatedImgElement = React.cloneElement(prevComponent, {
            [attribute]: value,
          });
  
          const updatedComponents = currentComponents.map((component) =>
            component === prevComponent ? updatedImgElement : component
          );
  
          setCurrentComponents(updatedComponents);
          return updatedImgElement;
        }
        return React.cloneElement(prevComponent, { [attribute]: value });
      });
    }
  };

  const handleSelect = (component) => {
    setSelectedComponent(component);
    const existingAttributes = { ...component.props };
    const existingStyles = { ...component.props.style };
    setComponentAttributes({
      ...existingAttributes,
      ...componentAttributes,
      ...component.props,
    });

    setComponentStyles({
      ...existingStyles,
      ...componentStyles,
      ...component.props.style,
    });

    setTextContent(component.props.children);
  };

  const handleRemove = () => {
    setCurrentComponents((prevComponents) =>
      prevComponents.filter((component) => component !== selectedComponent)
    );
    setSelectedComponent(null);
  };

  return (
    <Container fluid>
      <Row className="m-2">
        <Col xs={8} className="p-2">
          <Canvas
            components={currentComponents}
            selectedComponent={selectedComponent}
            className="canvas"
            handleSelect={handleSelect}
          />
        </Col>
        <Col xs={4} className="p-2">
          <Components setCurrentComponents={setCurrentComponents} />
          <DeleteComponentButton
            selectedComponent={selectedComponent}
            handleRemove={handleRemove}
          />
          <div className="bg-light rounded p-2 border border-dark m-2">
          <h2>Edit Attributes</h2>
          <PropertiesPanel
            selectedComponent={selectedComponent}
            handleAttributeChange={handleAttributeChange}
            handleStyleChange={handleStyleChange}
            handleTextEdit={handleTextEdit}
            textContent={textContent}
          />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
