import { useState } from 'react';
import TextProperties from './TextProperties';
import ImageProperties from './ImageProperties';
import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent, selectedRef, handleStyleChange, handleAttributeChange, handleTextEdit, textContent }) => {
  const [imageSrc, setImageSrc] = useState('');
  
  if (!selectedComponent) {
    return null;
  }

  const handleStyleEdit = (attribute, value) => {
    console.log(attribute, value);
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

  const handleSrcChange = (e) => {
    if (selectedRef && selectedRef.current) {
      const imgElement = selectedRef.current.children[0];
      if (imgElement) {
        imgElement.src = e.target.value;
      }
      setImageSrc(e.target.value);
    }
  }

  if (['text-component', 'paragraph-component'].includes(selectedComponent.props.className)) {
    return (
      <>
        <TextProperties
          selectedComponent={selectedComponent}
          handleTextEdit={handleTextEdit}
          handleStyleChange={handleStyleChange}
          textContent={textContent}
        />
      </>
    );
  } else if (selectedComponent.props.className === 'image-component') {
    return (
      <>
        <ImageProperties
          handleStyleEdit={handleStyleEdit}
          handleSrcChange={handleSrcChange}
          selectedComponent={selectedComponent}
          imageSrc={imageSrc}
          selectedRef={selectedRef}
        />
      </>
    );
  }

  return null;
};
export default PropertiesPanel;
