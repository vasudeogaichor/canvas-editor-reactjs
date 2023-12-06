import { ButtonGroup, Button, Col, Row } from 'react-bootstrap';

import '../styles/Components.css';

const Components = ({ setCurrentComponents }) => {

  const addComponent = (type) => {
    let newComponent;
    switch (type) {
      case 'text':
        newComponent = <div className="text-component" style={{}} >Dummy Text</div>;
        break;
      case 'image':
        newComponent = <img alt="Inserted Image" className='image-component' />;
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
    <>
      <div className="component-section bg-light rounded p-2 border border-dark m-2">
        <h2 className="section-heading">Add Components</h2>
        <Col>
          <Row className="component-buttons d-flex flex-column">
            <Col>
              <ButtonGroup vertical>
                <Button variant="info" onClick={() => handleButtonClick('text')} className="w-100 m-1">
                  Add Text
                </Button>
                <Button variant="info" onClick={() => handleButtonClick('image')} className="w-100 m-1">
                  Add Picture
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Components