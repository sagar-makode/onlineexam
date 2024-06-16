import React, {useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Modal from 'react-bootstrap/Modal';

const ImageCropModal = ({ show, onHide, image, onCrop, handleImageUpload }) => {
    const editorRef = useRef(null);
    const [croppedImage, setCroppedImage] = useState(null);

const handelCancel = ()=>{
    onHide()
    setCroppedImage(null)
}
    const handleImageCrop = () => {
        if (editorRef.current) {
            // Get the canvas containing the cropped image
            const canvas = editorRef.current.getImage();

            // Convert canvas to data URL
            const croppedImageData = canvas.toDataURL();

            // Update state with the cropped image data
            setCroppedImage(croppedImageData);
        }
    };
    const handleUploadCropedClick = async () => {
        // Call handleImageUpload only if croppedImage is not null
        if (croppedImage) {
            // Convert base64 to Blob
            const blob = await fetch(croppedImage).then((res) => res.blob());

            // Create a File object from Blob
            const file = new File([blob], 'cropped_image.jpg', { type: 'image/jpeg' });

            // Pass the file to handleImageUpload

            await handleImageUpload(file);

            handelCancel()
        }
    }

    return (
        <Modal show={show} onHide={handelCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Crop Image</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {croppedImage ? (
                    <img src={croppedImage} alt="Cropped" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                ) : (
                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <AvatarEditor
                                ref={editorRef}
                                image={image}
                                width={250}
                                height={250}
                                border={0} // Set border to 0 to remove the border
                                color={[255, 255, 255, 0.6]} // RGBA
                                scale={1.2}
                                borderRadius={250} // Set borderRadius equal to the radius of the circular container
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            />
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                {!croppedImage && <button className="btn btn-primary" onClick={handleImageCrop}>Crop Image</button>}
                {croppedImage && <button className="btn btn-primary" onClick={handelCancel}>Cancel</button>}
                {croppedImage && <button className="btn btn-primary" onClick={handleUploadCropedClick}>Upload</button>}
            </Modal.Footer>
        </Modal>
    );
};

export default ImageCropModal;
