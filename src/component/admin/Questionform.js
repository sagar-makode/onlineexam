import React, { useState } from 'react';
// import axios from 'axios';

export default function Questionform({ onFormSubmit }) {
    //This useState is for form data 
    const [formData, setFormData] = useState({
        question: "",
        questionDetails:"",
        option_A: "",
        option_B: "",
        option_C: "",
        option_D: "",
        answer: "",
        solution: ""
    });

    //This useState is for toggle (image or text)
    const [imageOrTextToggle, setImageOrTextToggle] = useState({
        question: false,
        option_A: false,
        option_B: false,
        option_C: false,
        option_D: false,
        solution: false
    });

    //This useState is for toggle (image and text)
    const [imageAndTextToggle, setImageAndTextToggle] = useState({
        question: false,
        option_A: false,
        option_B: false,
        option_C: false,
        option_D: false,
        solution: false
    });

    //For storing the data in the Form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //This is used for handle the Image
    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //This function is used for change the input mode for both image and text
    const changeTextAndImageMode = (e) => {
        setImageAndTextToggle({
            ...imageAndTextToggle, [e.target.name]: !imageAndTextToggle[e.target.name]
        })
    }

    //This function is used for change the input mode between image or text
    const changeInputMode = (e) => {
        setImageOrTextToggle({
            ...imageOrTextToggle, [e.target.name]: !imageOrTextToggle[e.target.name],
        })


    }

    //This is used for handeling the submit and post the data in the json file
    const handleSubmit = async (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        setFormData({
            question: "",
            questionDetails:"",
            option_A: "",
            option_B: "",
            option_C: "",
            option_D: "",
            answer: "",
            solution: ""
        })
    };


    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className='col-md-10' style={{ marginTop: "20px", border: "1px solid black", padding: "20px" }}>

                    {/* This div is for question */}
                    <div className='mb-3' style={{ marginTop: "20px", marginBottom: "10px" }}>
                        <label className="form-label" htmlFor='question'>Question</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="question" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.question && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="question" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.question ?
                            <div>
                                <input className='form-control' type='text' id='question' onChange={handleChange} name='question' placeholder='Enter your question Here' />
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='question' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.question ?
                                    <input className='form-control' type='text' id='question' onChange={handleChange} name='question' placeholder='Enter your question Here' />
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='question' />
                                }
                            </div>

                        }

                    </div>

                    {/* This div is for adding question details. */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='questionDetails'>Question Details</label>
                        <input className='form-control' type='text' id='questionDetails' onChange={handleChange} name='questionDetails' placeholder='Enter your questionDetails here' />
                    </div>

                    {/* This div is for option_A */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='option_A'>option_A</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="option_A" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.option_A && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="option_A" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.option_A ?
                            <div>
                                <input className='form-control' type='text' id='option_A' onChange={handleChange} name='option_A' placeholder='Enter your option_A Here' />
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_A' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.option_A ?
                                    <input className='form-control' type='text' id='option_A' onChange={handleChange} name='option_A' placeholder='Enter your option_A Here' />
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_A' />
                                }
                            </div>

                        }

                    </div>


                    {/* This div is for option_B */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='option_B'>option_B</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="option_B" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.option_B && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="option_B" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.option_B ?
                            <div>
                                <input className='form-control' type='text' id='option_B' onChange={handleChange} name='option_B' placeholder='Enter your option_B Here' />
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_B' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.option_B ?
                                    <input className='form-control' type='text' id='option_B' onChange={handleChange} name='option_B' placeholder='Enter your option_B Here' />
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_B' />
                                }
                            </div>

                        }

                    </div>


                    {/* This div is for option_C */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='option_C'>option_C</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="option_C" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.option_C && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="option_C" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.option_C ?
                            <div>
                                <input className='form-control' type='text' id='option_C' onChange={handleChange} name='option_C' placeholder='Enter your option_C Here' />
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_C' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.option_C ?
                                    <input className='form-control' type='text' id='option_C' onChange={handleChange} name='option_C' placeholder='Enter your option_C Here' />
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_C' />
                                }
                            </div>

                        }

                    </div>


                    {/* This div is for option_D */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='option_D'>option_D</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="option_D" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.option_D && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="option_D" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.option_D ?
                            <div>
                                <input className='form-control' type='text' id='option_D' onChange={handleChange} name='option_D' placeholder='Enter your option_D Here' />
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_D' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.option_D ?
                                    <input className='form-control' type='text' id='option_D' onChange={handleChange} name='option_D' placeholder='Enter your option_D Here' />
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='option_D' />
                                }
                            </div>

                        }

                    </div>


                    {/* This div is for Answer */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='answer'>Answer</label>
                        <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='answer' />
                    </div>


                    {/* This div is for solution */}
                    <div className='mb-3' style={{ marginTop: "30px", borderTop: "2px solid black" }}>
                        <label className="form-label" htmlFor='solution'>solution</label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" name="solution" type="checkbox" role="switch" onClick={changeTextAndImageMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add both (Image and Text)</label>
                        </div>
                        {!imageAndTextToggle.solution && <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" name="solution" type="checkbox" role="switch" onClick={changeInputMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Do you want to add Image </label>
                            </div>
                        </div>
                        }
                        {imageAndTextToggle.solution ?
                            <div>
                                <textarea className='form-control' type='text' id='solution' onChange={handleChange} name='solution' placeholder='Enter your solution Here' rows={3}></textarea>
                                <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='solution' />
                            </div>
                            :
                            <div>
                                {!imageOrTextToggle.solution ?
                                    <textarea className='form-control' type='text' id='solution' onChange={handleChange} name='solution' placeholder='Enter your solution Here' rows={3} ></textarea>
                                    :
                                    <input className='form-control' type='file' id='answer' onChange={handleImageChange} name='solution' />
                                }
                            </div>

                        }

                    </div>
                    <button type="submit" className='text-center'>Add Question</button>
                </div>
            </div>
        </form >
    );
};
