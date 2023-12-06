import { Button } from 'react-bootstrap';

const DeleteComponentButton = ({selectedComponent, handleRemove}) => {
    return (
        <Button variant="danger" onClick={handleRemove} disabled={!selectedComponent}>
            Remove Selected Component
          </Button>
    )
}

export default DeleteComponentButton
