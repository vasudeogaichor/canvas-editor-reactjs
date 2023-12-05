import { Form, InputGroup } from 'react-bootstrap';

const ImageProperties = ({ selectedComponent, handleEdit }) => {
    return (
        <>
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
    )
}

export default ImageProperties;