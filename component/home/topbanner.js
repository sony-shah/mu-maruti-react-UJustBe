import React,{useState} from 'react'


const Topbanner = () => {

const [registrationType, setregistrationType] = useState("")
const [radioVisible, setradioVisible] = useState(false);



const handleRegistrationType= async(e)=>{
    const target = e.target;
    if (target.checked) {
        setregistrationType(target.value);
        console.log(e.target.value);
    }
}






  return (
  
     <section className="wrapper c-topbanner">
        <div className="custom-container">
            <div className="con-box">
                <div>
                    <h1 className="h1">Making the right career
                        and role choices</h1>
                    <p>Career guidance across one’s lifetime</p>
                    <a href="#" className="btn">Take a Test</a>
                </div>
            </div>

            {/* login section start here */}

            {/* <div>
                <form>
                    <div className="login-form">
                        <ul>
                                <div className="form-group">
                                    <input type="email" placeholder="Enter email address" />
                                   
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Enter password" /> 
                             
                                </div>
                            
                         
                           
                            <li className="forgot">
                                <div>
                                    <input type="checkbox" name="checkbox" id=""/>
                                    <label>Remember Me</label>
                                </div>
                                <div>
                                    <a href="#">Forgot password?</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button type="submit"> Login </button>
                                </div>
                                <div>
                                    <a href="#">New User</a>
                                </div>
                            </li>
                        </ul>
                    </div>
            </form>
            </div> */}

            {/* login end here */}

            {/* registration start here */}

            <div>
                <div class="login-form">
                    <form>

                            <ul>
                                
                                 <li>
                                    <div>
                                        <input
                                         type="radio"
                                          name="handleRegistrationType"
                                          value="Individual" 
                                          onChange={handleRegistrationType}
                                          onClick={()=>setradioVisible(false)}
                                          id="indvidual"    />
                                        <label htmlFor="indvidual">Individual</label>
                                    </div>
                                    <div>
                                        <input type="radio" 
                                        name="handleRegistrationType" 
                                        value="Institution"  
                                        id="instistutional" 
                                        onChange={handleRegistrationType}
                                        onClick={()=>setradioVisible(true)} />
                                        <label htmlFor="instistutional">Institution</label>
                                    </div>
                                
                                    {/* <div>
                                        The Registration Type is required
                                    </div> */}
                                </li> 
                                {radioVisible && 
                                     <li>
                                     <select class="form-control" placeholder="Organization/Institute Name" name="instituteName"   >
                                          <option value="">Please Select your Organization</option>
                                        
                                          
                                      </select>
                                      {/* <span class="error-msg">
                                          <div >Organization Name is required.</div>
                                      </span> */}
                                  </li>

                                }    
                                <li>
                                    <input type="text" placeholder="Your Name" name="Name"   />
                                    {/* <span class="error-msg">
                                        <div >Name is required.</div>
                                    </span> */}
                                </li>
                                <li>
                                    <input type="email" placeholder="Your Email" name="Email"     />
                                    {/* <span class="error-msg">
                                        <div >Email is required.</div>
                                        <div >Email ID not valid.</div>
                                    </span> */}
                                </li>
                                <li>
                                    <input 
                                    type="phone"
                                     placeholder="Your Mobile Number" 
                                   />
                                    {/* <span class="error-msg">
                                    
                                        <div >Contact is required.</div>
                                        <div >Enter a valid Contact Number.</div>
                                    </span> */}
                                </li>
                                <li>
                                    <input 
                                    type="password" 
                                    placeholder="Enter Password"
                                      />
                                    {/* <span class="error-msg">
                                        <div >Password is required.</div>
                                    </span> */}
                                </li>
                                <li>
                                    <input 
                                    type="password"
                                     placeholder="Confirm Password" 
                                  />
                                    {/* <span class="error-msg">
                                        <div>Confirm Password is required.</div>
                                    </span> */}
                                </li>

                                <li className='checkboxterm' >
                                    <input
                                      type="checkbox" 
                                      id="chk_terms" />
                                   
                                    <span>I agree to the <a href="#" >Terms & Conditions</a></span>
                                </li>

                                <li>
                                    <div>
                                        <button type="submit" > Generate OTP </button>
                                    </div>
                                    <div>
                                        Already User? <a href="#">Login</a>
                                    </div>
                                </li> 
                            </ul>

                    </form>
                </div>
            </div>
            {/* registration end here */}
        </div>
    </section>

  )
}

export default Topbanner