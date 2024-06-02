import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, userProfileUpdateRequest } from '../../actions/userActions';
import ImageCropModal from '../StudentDashboard/ImageCropModel';
import { fetchUserDataRequest } from '../../actions/dashboardActions';
import { notification } from 'antd';
import profileImage from "../../assets/profile image.png"
import GetfirstAndLastName from '../../common/GetfirstAndLastName';
function UserProfile() {
    const teacherProfileData = useSelector(state => state.dashboard.userData);

    const trachertestData = useSelector(state => state.tests.teacherCreatedTest);
    const studenttresultforteacher = useSelector(state => state.tests.teacherCreatedTest);

    const [isEditing, setIsEditing] = useState(false); // State to track editing mode
    const [errors, setErrors] = useState({});
    const [showCropModal, setShowCropModal] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state

    const [imgloading, setImgLoading] = useState(false); // Add loading state


    function countPassFailStudents(studenttresultforteacher) {
        let passCount = 0;
        let failCount = 0;
        studenttresultforteacher.forEach(student =>{
            student.submitedBy.forEach(status =>{
                console.log("call 1");
                if (status.passStatus === "Pass") {
                    passCount++;
                    console.log(passCount);
                }else if (status.passStatus === "Fail") {
                    failCount++;
                }
            })
        })
    
        return { passCount, failCount };
    }
    const { passCount, failCount } = countPassFailStudents(studenttresultforteacher);


    const updateprofileSucess = useSelector(state => state.user.updateprofileSucess);

    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        name: teacherProfileData.name || "",
        email: teacherProfileData.email || "",
        dateOfBirth: teacherProfileData.dateOfBirth || "",
        gender: teacherProfileData.gender || "",
        mobileNumber: teacherProfileData.mobileNumber || "",
        password: teacherProfileData.password || "",
        address: teacherProfileData.address || "",
        role: teacherProfileData.role,
        id: teacherProfileData._id


    });
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });

    };
    const handleSaveChanges = (e) => {
        setLoading(true)
        e.preventDefault();
        if (validateForm()) {
            dispatch(userProfileUpdateRequest(formData));

            // Implement logic to save changes to user profile data
            // You can dispatch an action to update the Redux store with the new data
            setIsEditing(false); // Exit editing mode after saving changes
        };


    };

    const validateForm = () => {
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!String(formData.mobileNumber).trim()) {
            errors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            errors.mobileNumber = 'Mobile number is invalid';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };
    const [image, setImage] = useState(); // State to hold the selected image file



    const handleImageChange = e => {
        setImage(e.target.files[0]); // Capture the selected image file
        setShowCropModal(true); // Show the crop modal when an image is selected
    };



    const handleImageUpload = (croppedImage) => {
        if (croppedImage) {
            setImgLoading(true)
            console.log("ths is cropped image", croppedImage);
            const newFormdata = {
                ...formData,
                image: croppedImage
            }
            dispatch(userProfileUpdateRequest(newFormdata));
        }
    };


  
    useEffect(() => {
        // Fetch user data when component mounts

        if (updateprofileSucess) {

            dispatch(fetchUserDataRequest());
            openNotification();
            setLoading(false);
            setTimeout(() => {
                setImgLoading(false)
                dispatch(clearMessage())
            }, 2000);
        }

    }, [updateprofileSucess, dispatch]);

    const openNotification = () => {
        const args = {
            message: "Profile Details Updated Successfuly",
            description: "Congratulations, Now you are added your latest details.",
            duration: 2,
        };
        notification.open(args);
    };

    return (
        <>
            <div className="user-profile-container container-fluid">
                <h1>User Profile</h1>
                <div className="main-body">
                    <div className="row">

                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" name="name" className="form-control" onChange={handleChange} value={formData.name} disabled={!isEditing} />
                                            {errors.name && <div className="  error">{errors.name}
                                            </div>}
                                        </div>
                                    </div>
                                    {/* Other profile fields */}
                                    {/* Email, Date of Birth, Gender, Mobile Number, Password, Address */}
                                    {/* Implement similar input fields for other profile data */}
                                    {/* Make them editable based on the isEditing state */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name="email" onChange={handleChange} value={formData.email} disabled={!isEditing} />
                                            {errors.email && <div className="  error">{errors.email}
                                            </div>}
                                        </div>
                                    </div>
                                    {/* Date of Birth */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date of Birth</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="date" name='dateOfBirth' className="form-control" onChange={handleChange} value={formData.dateOfBirth} disabled={!isEditing} />

                                        </div>
                                    </div>
                                    {/* Gender */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <select
                                                className="form-select"
                                                name="gender"
                                                onChange={handleChange}
                                                value={formData.gender}
                                                disabled={!isEditing} // Disable select field when not editing
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>


                                        </div>
                                    </div>
                                    {/* Mobile Number */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="number" onChange={handleChange} name='mobileNumber' className="form-control" value={formData.mobileNumber} disabled={!isEditing} />
                                            {errors.mobileNumber && <div className="  error">{errors.mobileNumber}
                                            </div>}
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Password</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="password" className="form-control" name='password' onChange={handleChange} value={formData.password} disabled={!isEditing} />
                                            {errors.password && <div className="  error">{errors.password}
                                            </div>}
                                        </div>
                                    </div>
                                    {/* Address */}
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name='address' onChange={handleChange} value={formData.address} disabled={!isEditing} />
                                            {errors.address && <div className="  error">{errors.address}
                                            </div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            {loading ? (
                                                <button className="btn btn-primary px-4" disabled>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Loading...
                                                </button>
                                            ) : (
                                                <>
                                                    {isEditing ? (
                                                        <input type="button" className="btn btn-primary px-4" value="Save Changes" onClick={handleSaveChanges} />
                                                    ) : (
                                                        <input type="button" className="btn btn-primary px-4" value="Edit" onClick={() => setIsEditing(true)} />
                                                    )}
                                                </>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* this is profile */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {imgloading ? (
                                            <div className="position-relative" style={{ width: '110px' }}>
                                                <img src={teacherProfileData.imagepath || profileImage} alt="Admin" className="rounded-circle p-1 bg-primary" width="110" style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }} />
                                                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: '1' }}>
                                                    <div className="spinner-border text-primary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div style={{ position: 'relative', width: '110px' }}>
                                                <img src={teacherProfileData.imagepath || profileImage} alt="Admin" className="rounded-circle p-1 bg-primary" width="110" style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }} />
                                                <span className="material-symbols-outlined text-danger" style={{ position: 'absolute' }} onClick={() => document.getElementById('fileInput').click()}>
                                                    edit_square
                                                </span>
                                                <input type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} id="fileInput" />
                                            </div>
                                        )}
                                        <div className="mt-1">
                                            <h4 className='mt-3'>{GetfirstAndLastName(teacherProfileData.name)}</h4>
                                            <p className="text-secondary mb-1">{teacherProfileData.role}</p>
                                        </div>
                                    </div>



                                    <hr className="my-4" />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <span className="material-symbols-outlined text-danger" style={{ marginRight: "8px" }}>subscriptions</span>
                                                Subscribers
                                            </h6>
                                            <span className="text-secondary">{teacherProfileData.subscribers.length}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0 d-flex align-items-center">

                                                <span className="material-symbols-outlined text-primary" style={{ marginRight: "8px" }}>
                                                    quiz
                                                </span>Test Created
                                            </h6>
                                            <span className="text-secondary">{trachertestData.length}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0 d-flex align-items-center">

                                                <span className="material-symbols-outlined text-success" style={{ marginRight: "8px" }}>
                                                    emoji_events
                                                </span>No. Of Passed Student
                                            </h6>
                                            <span className="text-secondary">{passCount}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0 d-flex align-items-center">

                                                <span className="material-symbols-outlined" style={{ marginRight: "8px" }}>
                                                    <span className="material-symbols-outlined text-warning">
                                                        thumb_down
                                                    </span>
                                                </span>No. of Failed Student
                                            </h6>
                                            <span className="text-secondary">{failCount}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageCropModal
                show={showCropModal}
                onHide={() => setShowCropModal(false)}
                image={image}
                // onCrop={handleImageCrop} 
                handleImageUpload={handleImageUpload} // Pass handleImageUpload function as a prop
            />
        </>
    )
}






export default UserProfile





