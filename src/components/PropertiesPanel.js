import { Form, InputGroup } from 'react-bootstrap';

import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent }) => {

  if (!selectedComponent) {
    return null;
  }

  const { style, width } = selectedComponent.props;

  console.log('selectedComponent = ', selectedComponent.props.className)

  const textAttributes = (
    <>
      <Form.Label><h2>Edit Attributes</h2></Form.Label>
      <Form>
        <Form.Group controlId="formTextColor">
          <Form.Label>Text Color</Form.Label>
          <InputGroup>
            <Form.Control
              type="color"
              value={selectedComponent?.style?.color}
              onChange={(e) => handleEdit('color', e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        {/* Add more input fields for other text attributes */}
      </Form>
    </>
  );

  const imageAttributes = (
    <>
      <Form.Label><h2>Edit Attributes</h2></Form.Label>
      <Form>
        <Form.Group controlId="formImageWidth">
          <Form.Label>Width</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              value={selectedComponent.width}
              onChange={(e) => handleEdit('width', e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        {/* Add more input fields for other image attributes */}
      </Form>
    </>
  );

  const handleEdit = (attribute, value) => {
    console.log(`Editing ${attribute} to ${value} for component:`, selectedComponent);
  }

  if (['text-component', 'paragraph-component'].includes(selectedComponent.props.className)) {
    return <>{textAttributes}</>
  } else if (selectedComponent.props.className === 'image-component') {
    return <>{imageAttributes}</>
  }

  // Default case or additional component types can be handled here
  return null;
};
export default PropertiesPanel;
