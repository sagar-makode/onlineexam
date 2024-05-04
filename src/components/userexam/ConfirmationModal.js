import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

const ConfirmationModal = ({ show, onHide, onConfirm, onCancel, attemptedQuestionsData }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Submission</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to submit the test?</p>
               
                    <div>
                        <p>Attempted Questions:{attemptedQuestionsData}</p>
                       
                    </div>
               
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
