import { Form, InputGroup } from 'react-bootstrap';

import TextProperties from './TextProperties';
import ImageProperties from './ImageProperties';
import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent, selectedRef }) => {

  if (!selectedComponent) {
    return null;
  }

  const handleEdit = (attribute, value) => {
    console.log('attribute, value - ', attribute, value)
    const currentStyle = selectedRef?.current?.getAttribute('style') || '';

    const currentStyleObject = currentStyle
      .split(';')
      .filter(Boolean)
      .reduce((styleObject, style) => {
        const [key, val] = style.split(':').map(s => s.trim());
        styleObject[key] = val;
        return styleObject;
      }, {});

    currentStyleObject[attribute] = value;

    const newStyle = Object.entries(currentStyleObject)
      .map(([key, val]) => `${key}:${val}`)
      .join(';');

    selectedRef?.current?.setAttribute('style', newStyle);
  }

  if (['text-component', 'paragraph-component'].includes(selectedComponent.props.className)) {
    return <><TextProperties handleEdit={handleEdit} selectedComponent={selectedComponent} /></>
  } else if (selectedComponent.props.className === 'image-component') {
    return <><ImageProperties handleEdit={handleEdit} selectedComponent={selectedComponent} /></>
  }

  return null;
};
export default PropertiesPanel;
