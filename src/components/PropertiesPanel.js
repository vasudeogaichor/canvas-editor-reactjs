import TextProperties from './TextProperties';
import ImageProperties from './ImageProperties';
import '../styles/PropertiesPanel.css'

const PropertiesPanel = ({ selectedComponent, handleStyleChange, handleAttributeChange, handleTextEdit, textContent }) => {
  if (!selectedComponent) {
    return null;
  }

  if (selectedComponent.props.className === 'text-component') {
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
          selectedComponent={selectedComponent}
          handleAttributeChange={handleAttributeChange}
        />
      </>
    );
  }

  return null;
};
export default PropertiesPanel;
