import { Form, InputGroup } from 'react-bootstrap';

const TextProperties = ({ selectedComponent, handleStyleEdit, handleTextEdit, internalText }) => {
    return (
        <>
            <Form>
                <Form.Group controlId="formText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        type="text"
                        value={internalText || ''}
                        onChange={(e) => handleTextEdit(e.target.value)}
                        placeholder="Enter text for the div"
                    />
                </Form.Group>
                <Form.Group controlId="formTextColor">
                    <Form.Label>Text Color</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="color"
                            value={selectedComponent?.style?.color}
                            onChange={(e) => handleStyleEdit('color', e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formFontFamily">
                    <Form.Label>Font Family</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedComponent?.style?.['font-family']}
                        onChange={(e) => handleStyleEdit('font-family', e.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="monospace">monospace</option>
                        {/* Add more font family options as needed */}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formFontSize">
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedComponent?.style?.['font-size']}
                        onChange={(e) => handleStyleEdit('font-size', e.target.value)}
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
                        value={selectedComponent?.style?.['font-weight']}
                        onChange={(e) => handleStyleEdit('font-weight', e.target.value)}
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