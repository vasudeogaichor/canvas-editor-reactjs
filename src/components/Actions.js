import { Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUndo, FaRedo } from "react-icons/fa";

const Actions = ({ handleUndo, handleRedo, history, currentStep }) => {
    return (
        <>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="undo-tooltip">Undo</Tooltip>}
            >
                <Button
                    variant="primary"
                    onClick={handleUndo}
                    disabled={currentStep === 0}
                    className='m-1'
                >
                    <FaUndo />
                </Button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="redo-tooltip">Redo</Tooltip>}
            >
                <Button
                    variant="primary"
                    onClick={handleRedo}
                    disabled={currentStep === history.length - 1}
                    className='m-1'
                >
                    <FaRedo />
                </Button>
            </OverlayTrigger>
        </>

    )
}

export default Actions