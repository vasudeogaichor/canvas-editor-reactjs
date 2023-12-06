import { Form, InputGroup } from 'react-bootstrap';

const ImageProperties = ({ selectedComponent, handleAttributeChange }) => {
    return (
        <>
            <Form>
                <Form.Group controlId="formImageWidth">
                    <Form.Label>Width</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="number"
                            value={selectedComponent?.props?.width}
                            onChange={(e) => handleAttributeChange('width', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formImageHeight">
                    <Form.Label>Height</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="number"
                            value={selectedComponent?.props?.height}
                            onChange={(e) => handleAttributeChange('height', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formImageSrc">
                    <Form.Label>Image Source</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Enter image source URL"
                            value={selectedComponent?.props?.src || "" }
                            onChange={(e) => handleAttributeChange('src', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
        </>
    )
}

export default ImageProperties;