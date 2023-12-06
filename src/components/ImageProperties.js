import { Form, InputGroup } from 'react-bootstrap';

const ImageProperties = ({ selectedComponent, handleStyleEdit, imageSrc, handleSrcChange }) => {
    return (
        <>
            <Form>
                {/* <Form.Group controlId="formImageWidth">
                    <Form.Label>Width</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="number"
                            value={selectedComponent.width}
                            onChange={(e) => handleStyleEdit('width', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group> */}
                <Form.Group controlId="formImageSrc">
                    <Form.Label>Image Source</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Enter image source URL"
                            value={imageSrc}
                            onChange={handleSrcChange}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
        </>
    )
}

export default ImageProperties;