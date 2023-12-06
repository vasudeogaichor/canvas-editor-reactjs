import { Button } from 'react-bootstrap';

const DeleteComponentButton = ({selectedComponent, handleRemove}) => {
    return (
        <Button variant="danger" className='m-2' onClick={handleRemove} disabled={!selectedComponent}>
            Remove Selected Component
          </Button>
    )
}

export default DeleteComponentButton
