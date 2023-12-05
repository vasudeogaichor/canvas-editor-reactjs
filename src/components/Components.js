import { Button, Col, Row } from 'react-bootstrap';

import '../styles/Components.css';

const Components = ({ setCurrentComponents }) => {    

  const addComponent = (type) => {
    let newComponent;
    switch (type) {
      case 'text':
        newComponent = <div className="text-component">Text Component</div>;
        break;
      case 'paragraph':
        newComponent = <div className="paragraph-component">Paragraph Component</div>;
        break;
      case 'image':
        newComponent = <div className="image-component">Image Component</div>;
        break;
      default:
        newComponent = <div className="default-component">Default Component</div>;
    }

    setCurrentComponents((prevComponents) => [...prevComponents, newComponent]);
  };


  const handleButtonClick = (type) => {
    addComponent(type);
  };

  return (
    <Col>
      <Row className="component-buttons d-flex flex-column">
        <Col>
          <Button variant="primary" onClick={() => handleButtonClick('text')} className="w-100 m-1">
            Add Text
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => handleButtonClick('paragraph')} className="w-100 m-1">
            Add Paragraph
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={() => handleButtonClick('image')} className="w-100 m-1">
            Add Picture
          </Button>
        </Col>
      </Row>
    </Col>

  );
};

export default Components