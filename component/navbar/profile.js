import React from 'react'

// import '../../styles/pages/register.scss';

const Profile = () => {
  return (

    //  PROFILE SECTION HERE START //

    <>
        {/* header start here */}
        <header className="wrapper m-header innerpage question-page">
                <div className="custom-container">
                    <div className="logo">
                      
                        <span>
                            <img src="/images/University-logo321.png" alt="" />
                        </span>
                    </div>

                    <div className="logo">
                      
                        <span>
                            <img src="/images/Logo-OCP-Hor.jpg" alt="" />
                        </span>
                    </div>
                    
                    <div className="user-profile">
                        <span>
                          <img src="/images/image1.png" alt="" />
                        </span>
                        <p>name</p>
                    </div>
                </div>
        </header>
        {/*  header end here */}

        {/*  profile start here */}
        <section className="wrapper p-dashboard question-page">
            <div className="custom-container">
                <div className="left-side">
                    <ul className="dropdown-list">
                        <li><a href="#" >Dashboard</a></li>
                        <li><a href="#">My Report</a></li>
                        <li><a href="#" >Profile</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>

                <div className="right-side dashboard-container">    
                    <form>
                        <div className="con-row">
                            <div className="section-heading">
                                <h3>
                                    Basic Information
                                </h3>
                            </div>
                            <div className="form-wrapper-reg">
                                <ul>
                                    <li>
                                        <label htmlFor="">
                                            Name
                                        </label>
                                        <input disabled type="text" />
                                        {/* <div  className="invalid-feedback">
                                            <div >Name is required</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">Email</label>
                                        <input disabled type="email" />

                                        {/* <div  className="invalid-feedback">
                                            <div>Email is required</div>
                                        </div> */}
                                        {/* <div className="invalid-feedback">
                                            <div>Email must be a valid email address</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Mobile No
                                        </label>
                                        <input disabled  type="text" />
                                        {/* <div  className="invalid-feedback">
                                            <div >Mobile No is required</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Contact No
                                        </label>
                                        <input  type="text" />
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                        Gender :
                                    </label>
                                        <div className="custom-control custom-radio">
                                            <input id="male" type="radio" className="custom-control-input" value="male" name="Gender" />
                                            <label className="custom-control-label" htmlFor="male">Male</label>
                                        </div>

                                        <div className="custom-control custom-radio">
                                            <input id="female" type="radio" className="custom-control-input" value="female" name="Gender" />
                                            <label className="custom-control-label" htmlFor="female">Female</label>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="con-row">
                            <div className="section-heading">
                                <hr />
                                <h3>
                                    Personal Details
                                </h3>
                            </div>
                            <div className="form-wrapper-reg">
                                <ul>
                                    <li>
                                        <label htmlFor="">
                                            Father's Name <span className="red-star">*</span>
                                        </label>
                                        <input type="text" />
                                        {/* <div  className="invalid-feedback">
                                            <div >Father's Name is required</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Mother's Name <span className="red-star">*</span>
                                        </label>
                                        <input type="email" />
                                        {/* <div  className="invalid-feedback">
                                            <div >Mother's Name is required</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Date of Birth <span className="red-star">*</span>
                                        </label>
                                        <input type="text"  maxDate="maxDate" />
                                        {/* <div  className="invalid-feedback">
                                            <div >Date of Birth is required</div>
                                        </div> */}
                                    </li>
                                    
                                    {/* <div className="profile-pic" >
                                        <a href="#" target="blank">
                                            <img src="#" width="100" height="100" alt="" />
                                        </a>
                                    </div> */}
                                    <li>
                                        <label htmlFor="">
                                            Photograph
                                        </label>
                                        <div className="file-upload-wrapper" >
                                            <input name="file-upload-field" accept="image/*" type="file" className="file-upload-field" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="con-row">
                            <div className="section-heading">
                                <hr/>
                                <h3>
                                    Address
                                </h3>
                            </div>
                            <div className="form-wrapper-reg">
                                <ul>
                                    <li>
                                        <label htmlFor="">
                                            Current Residence address <span className="red-star">*</span>
                                        </label>
                                        <textarea cols="30" rows="10" >
                                    </textarea>
                                        {/* <div  className="invalid-feedback">
                                            <div >Current Address is required</div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Permanent Residence address <span className="red-star">*</span>
                                        </label>
                                        <textarea cols="30" rows="10" >
                                    </textarea>
                                        {/* <div  className="invalid-feedback">
                                            <div >
                                              Permanent Address is required
                                            </div>
                                        </div> */}
                                    </li>
                                    <li>
                                        <input id="sameaddress" type="checkbox" />
                                        <label htmlFor="sameaddress">Same as Current Address</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="con-row">
                            <div className="section-heading">
                                <hr/>
                                <h3>
                                    Education Details
                                </h3>
                            </div>
                            <div className="form-wrapper-reg">
                                <ul>
                                    <li>
                                        {/* <div className="profile-pic" >
                                            <a href="#" target="blank">
                                                <img src="#" width="100" height="100" alt="" />
                                            </a>
                                        </div> */}
                                        <label htmlFor="">
                                            SSC or Equivalent- Mark sheet / Certificate (upload image) <span className="red-star">*</span>
                                        </label>
                                        <div className="file-upload-wrapper" >
                                            <input  name="file-upload-field" type="file" className="file-upload-field" />
                                            {/* <div  className="invalid-feedback">
                                                <div >SSC or Equivalent- Mark sheet / Certificate is required</div>
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        {/* <div className="profile-pic" >
                                            <a href="#" target="blank">
                                                <img src="#" width="100" height="100" alt="" />
                                            </a>
                                        </div> */}
                                        <label htmlFor="">
                                            HSC or Equivalent- Mark sheet/ Certificate
                                        </label>
                                        <div className="file-upload-wrapper" >
                                            <input  name="file-upload-field" type="file" className="file-upload-field" />
                                        </div>
                                        
                                            {/* <div  className="invalid-feedback">
                                                <div >HSC or Equivalent- Mark sheet /
                                                    Certificate is required</div>
                                            </div> */}
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Graduation- Board/ University
                                        </label>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Graduation- Year & Month of passing
                                        </label>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <label htmlFor="">
                                            Graduation- Percentage
                                        </label>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        {/* <div className="profile-pic" >
                                            <a href="#" target="blank">
                                                <img src="#" width="100" height="100" alt="" />
                                            </a>
                                        </div> */}
                                        <label htmlFor="">
                                            Graduation- Mark sheet/ Certificate
                                        </label>
                                        <div className="file-upload-wrapper" >
                                            <input name="file-upload-field" type="file" className="file-upload-field" />
                                        </div>
                                    </li>
                                    <li className='self-declaration'>
                                        {/* <div className="profile-pic" >
                                            <a href="#" target="blank">
                                                <img src="#" width="100" height="100" alt="" />
                                            </a>
                                        </div> */}
                                        <label htmlFor="">
                                            Self-Declaration in case of marksheet & documents unavailable for uploading
                                        </label>
                                    
                                        <div className="file-upload-wrapper" >
                                            <input  name="file-upload-field" type="file" className="file-upload-field" />
                                        </div>
                                    </li>
                                </ul>
                                <ul>

                                    {/* <div className="alert alert-danger alert-dismissible fade show mt-2" >
                                        emptyFormMessage
                                        <button type="button" className="close"  aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div> */}
                                    <li>
                                        <button type="submit" className="btn">Submit</button>
                                    </li>
                                </ul>
                            </div>

                        </div>


                    </form>
                 </div>

              {/* MY REPORT SECTION START */}
                {/* <div  className="right-side dashboard-container">
                  <MyTest/>
                </div> */}
                {/* MY REPORT SECTION END */}

                

                {/* REPORT SECTION STARTS HERE */}
                {/* <div className="right-side dashboard-container" >
                    <Report/>   
                </div> */}
              {/* REPORT SECTION ENDS HERE  */}

                {/* IMAGE REPORT SECTION STARTS HERE  */}
                {/* <div className="right-side dashboard-container" >
                  <ImageReport/>
                </div> */}
                {/* IMAGE REPORT SECTION ENDS HERE  */}

            </div>



        </section>
        {/*  profile end here */}


        {/* footer start here */}
        <section className="wrapper powerdby">
            <div className="custom-container">
                <div>
                    <p>Partially supported by</p>
                </div>
                <div><img src="/images/ge-iconlogo.png" alt="" /></div>
                <div><img src="/images/disaster-logo.png" alt="" /></div>
                <div><img src="/images/DellTech_Logo_Stk_Blue_rgb.png" alt="" /></div>
                <div><img src="/images/AIF_logo_B&W (3).png" alt="" /></div>
            </div>
        </section>
            
      <footer class="m-footer wrapper">
          <p>Copyright © 2020 Vivek Belhekar | Department of Applied Psychology, University of Mumbai | <strong href="#">Terms & Conditions</strong></p>
      </footer>
    {/* footer end here */}
    
    </>
         

    //  PROFILE SECTION HERE END  //
  )
}

export default Profile