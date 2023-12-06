import { useState } from 'react';
import TextProperties from './TextProperties';
import ImageProperties from './ImageProperties';
import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent, selectedRef }) => {
  const [internalText, setInternalText] = useState("")
  const [imageSrc, setImageSrc] = useState('');
  
  if (!selectedComponent) {
    return null;
  }

  const handleTextEdit = (text) => {
     if (selectedRef && selectedRef.current) {
      selectedRef.current.innerText = text
      setInternalText(text);
    }
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
          handleStyleEdit={handleStyleEdit}
          selectedComponent={selectedComponent}
          handleTextEdit={handleTextEdit}
          internalText={internalText}
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
