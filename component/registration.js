import React from 'react'

const Registration = () => {
    
    return ( 
    <>

        <header className="wrapper m-header innerpage">
            <div className="custom-container">
                <div className="logo">
                    <span>
                        <img src="/images/University-logo321.png" alt="header_img" />
                    </span>
                </div>
                <div className="main-nav"></div>
            </div>
        </header>

        <section className="c-innerbanner">
        <div className="custom-container">
            <h1>
                Please fill the details below <br />
                to complete the Registration.
            </h1>
        </div>
    </section>

    <section className="wrapper p-register">
        <form >
            <div className="custom-container">
                <div className="con-row">
                    <div className="section-heading">
                        <h3>
                            Basic Information
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <ul>
                            <li>
                                <label for="">
                                    Name
                                </label>
                                <input type="text" name="" id="" />
                                {/* <div  className="invalid-feedback">
                                    <div>User Name is required</div>
                                </div> */}
                            </li>
                            <li>
                                <label for="">
                                    Email
                                </label>
                                <input type="email" name="" id="" />
                                {/* <div className="invalid-feedback">
                                    <div >Email is required</div>
                                </div>
                                <div className="invalid-feedback">
                                    <div >Email must be a valid email address</div>
                                </div>
                                <div  className="invalid-feedback">
                                    <div >Email Already Exists !</div>
                                </div> */}
                            </li>
                            <li>
                                <label for="">
                                    Mobile No
                                </label>
                                <input  type="tel"   />
                                {/* <div className="invalid-feedback">
                                    <div >Mobile Number is required</div>
                                </div> */}
                            </li>
                            <li>
                                <label for="">
                                    Contact No
                                </label>
                                <input type="tel"  />
                            </li>
 
                            <li>
                                <label for="">
                                    Gender :
                                </label>
                                <div className="custom-control custom-radio">
                                    <input id="male" type="radio" 
                                    className="custom-control-input"
                                     value="male"
                                    name="Gender" />
                                    <label className="custom-control-label" htmlFor="male">
                                        <div className='custom-control-radio'></div>
                                        Male</label>
                                </div>

                                <div className="custom-control custom-radio">
                                    <input id="female" 
                                     type="radio" className="custom-control-input"
                                     value="female"
                                    name="Gender" />
                                    <label className="custom-control-label" htmlFor="female">
                                    {/* <div className='custom-control-radio'></div> */}
                                    Female</label>
                                </div>
                               
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="con-row">
                    <div className="section-heading">
                        <h3>
                            Personal Details
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <ul>
                            <li>
                                <label for="">
                                    Father's Name*
                                </label>
                                <input type="text" name="" id="" />
                                {/* <div  className="invalid-feedback">
                                    <div >Father's Name is required</div>
                                </div> */}
                            </li>
                            <li>
                                <label for="">
                                    Mother's Name*
                                </label>
                                <input type="text" name="" id="" />
                                {/* <div className="invalid-feedback">
                                    <div>Mother's Name is required</div>
                                </div> */}
                            </li>
                            <li>
                                <label for="">
                                    Date of Birth*
                                </label>
                                <input type="text" name="" id="" />
                                {/* <div  className="invalid-feedback">
                                    <div >Date of Birth is required</div>
                                </div> */}
                            </li>
                           
                            <li>

                                {/* <div className="profile-pic">
                                    <a href="#" target="blank" >
                                        <img src="PhotographImgPreview" width="100" height="100" alt="" />
                                    </a>
                                </div> */}

                                <label for="">
                                    Photograph
                                </label>
                                <div className="file-upload-wrapper" >
                                    <input  
                                        name="file-upload-field"
                                        type="file" 
                                        className="file-upload-field" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="con-row">
                    <div className="section-heading">
                        <h3>
                            Address
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <ul>
                            <li>
                                <label for="">
                                    Current Residence address *
                                </label>
                                <textarea name="" id="" cols="30" rows="10" >
                                </textarea>
                                {/* <div  className="invalid-feedback">
                                    <div >Current Address is required</div>
                                </div> */}

                            </li>
                            <li>
                                <label for="">
                                    Permanent Residence address *
                                </label>
                                <textarea name="" id="" cols="30" rows="10" >
                                </textarea>
                                {/* <div className="invalid-feedback">
                                    <div >Permanent Address is required</div>
                                </div> */}

                            </li>
                            <li>
                                <input  type="checkbox"
                                         name=""
                                         id="sameaddress" />
                                <label for="sameaddress">Same as Current Address</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="con-row">
                    <div className="section-heading">
                        <h3>
                            Education Details
                        </h3>
                    </div>
                    <div className="form-wrapper">
                        <ul>
                            <li>
                                {/* <div className="profile-pic">
                                    <a href="SSCCertificateImgPreview" target="blank">
                                        <img src="SSCCertificateImgPreview" width="100" height="100" alt="" />
                                    </a>
                                </div> */}
                                <label for="">
                                    SSC or Equivalent- Mark sheet / Certificate (upload image)*
                                </label>
                                <div className="file-upload-wrapper">
                                    <input  name="file-upload-field"
                                        type="file" className="file-upload-field" />

                                </div>
                                
                            </li>
                            <li>
                                {/* <div className="profile-pic">
                                    <a href="HSCCertificateImgPreview" target="blank">
                                        <img src="HSCCertificateImgPreview" width="100" height="100" alt="" />
                                    </a>
                                </div> */}
                                <label for="">
                                    HSC or Equivalent- Mark sheet/ Certificate
                                </label>
                                <div className="file-upload-wrapper">
                                    <input
                                      name="file-upload-field"
                                      type="file" 
                                      className="file-upload-field" />
                                    {/* <div  className="invalid-feedback">
                                        <div >HSC or Equivalent- Mark sheet / Certificate
                                            is required</div>
                                    </div> */}
                                </div>
                                
                            </li>
                            <li>
                                <label for="">
                                    Graduation- Board/ University
                                </label>
                                <input type="text" name="" id="" />
                            </li>
                            <li>
                                <label for="">
                                    Graduation- Year & Month of passing
                                </label>
                                <input type="text" name="" id="" />
                            </li>
                            <li>
                                <label for="">
                                    Graduation- Percentage
                                </label>
                                <input type="text" name="" id="" />
                            </li>
                            <li>
                                {/* <div className="profile-pic">
                                    <a href="GraduationCertificateImgPreview" target="blank">
                                        <img src="GraduationCertificateImgPreview" width="100" height="100" alt="" />
                                    </a>
                                </div> */}
                                <label for="">
                                    Graduation- Mark sheet/ Certificate
                                </label>
                                <div className="file-upload-wrapper">
                                    <input  name="file-upload-field"
                                        type="file"
                                         className="file-upload-field" />
                                </div>
                            </li>
                            <li>
                                {/* <div className="profile-pic" >
                                    <a href="SelfDeclarationCertificatePreview" target="blank">
                                        <img src="SelfDeclarationCertificatePreview" width="100" height="100" alt="" />
                                    </a>
                                </div> */}
                                <label for="">
                                    Self-Declaration in case of marksheet & documents unavailable for uploading
                                </label>
                                
                                <div className="file-upload-wrapper" data-text="Select your file!">
                                    <input name="file-upload-field" type="file" className="file-upload-field" />
                                </div>
                            </li>
                        </ul>
                        <ul className='form-content-bottom'>
                            <li>
                                <input id="sameresponse" type="checkbox"  name="" />
                                <label for="sameresponse">Send me a copy of my responses.</label>
                            </li>
                            {/* <div className="alert alert-danger alert-dismissible fade show mt-2" >
                              empty messge
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div> */}
                            <li>
                                <button type="submit" className="btn">Submit</button>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </form>
    </section>
        
    </>
       
    )
}

export default Registration