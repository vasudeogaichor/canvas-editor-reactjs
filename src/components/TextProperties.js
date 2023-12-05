import { Form, InputGroup } from 'react-bootstrap';

const TextProperties = ({ selectedComponent, handleEdit }) => {
    return (
        <>
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
                <Form.Group controlId="formFontFamily">
                    <Form.Label>Font Family</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedComponent?.style?.['font-family'] || 'Arial'}
                        onChange={(e) => handleEdit('font-family', e.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Helvetica">Helvetica</option>
                        {/* Add more font family options as needed */}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formFontSize">
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedComponent?.style?.['font-size']}
                        onChange={(e) => handleEdit('font-size', e.target.value)}
                    >
                        {Array.from({ length: 50 }, (_, index) => index + 5).map(size => (
                            <option key={size} value={`${size}px`}>{size}px</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formFontWeight">
                    <Form.Label>Font Weight</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedComponent?.style?.['font-weight'] || 'normal'}
                        onChange={(e) => handleEdit('font-weight', e.target.value)}
                    >
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
    )
}

export default TextProperties