import React, {useState} from 'react'
import ImageReport from '../navbar/imagereport'
import MyTest from '../navbar/mytest'
import Report from '../navbar/report'
import Registration from '../registration'
import ViewDetailsPopup from './viewdetailspopup'
import ViewInstructionPopup from './viewinstruction'


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenInstruction, setisOpenInstruction] = useState(false);
    const [isLanguagePopup, setIsLanguagePopup] = useState(false);
    const [languageChoose ,setlanguageChoose]=useState("");

    // popup view details
    const togglePopupDetails = () => {
        setIsOpen(!isOpen);
        setisOpenInstruction(false);
      }

    //popup view instruction 
      const togglePopupInstructions = () => {
        setisOpenInstruction(!isOpenInstruction);
        setIsOpen(true);
      }

    //   popup language window 
      const togglelanguagepopup=()=>{
          setIsLanguagePopup(!isLanguagePopup);

      }
        //   popup language window
      const  handlecloselanguage=()=>{
          setIsLanguagePopup(false);

      }

      const handlelanguagechoose=(e)=>{
        const target = e.target;
        console.log(e.target.value);
        if (target.checked) {
            setlanguageChoose(target.value);
          // console.log(e.target.value);
        }
    
      }

           
    


  return (
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


    {/*  dashboard start here */}
    <section className="wrapper p-dashboard question-page  ">
        <div className="custom-container">
            <div className="left-side">
                <ul className="dropdown-list">
                    <li><a href="#" >Dashboard</a></li>
                    <li><a href="#">My Report</a></li>
                    <li><a href="#" >Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>

            
            <div  className="right-side dashboard-container">
                <div className="con-row">
                    <h1>Hi Name, Welcome to MU-OPC</h1>
                    <h2>Tests assigned to you</h2>
                    {/* SLICE DATA 0:2 */}
                    <div className="test-container" >
                        <div className="con-img" >
                            <img src="/images/12-9-2020_7-30_Interestfinal.png" alt="" />
                        </div>
                        
                        <div className="con-text">
                            <h2>Interest Test</h2>
                            
                            <ul>
                                <li ><a href="#" onClick={togglePopupDetails}>View Details</a></li>
                                <li> <a  href="#" onClick={togglePopupInstructions}>View Instruction</a></li>    
                                <li><a className="btn"  
                                // style={{cursor: "not-allowed; pointer-events: none;"}} 
                                onClick={togglelanguagepopup}>Take a test</a>

                                {/* viewdetails popup */}
                                {isOpen && <ViewDetailsPopup
                                    content={ <>
                                       
                                        {/* <h2>Event Agenda</h2>
                                        <b>Design your Popup</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button>Test button</button>  */}
                                        <div className='agendaDetails'></div>
                                      
                                    </>}
                                    handleClose={togglePopupDetails}
                                    />}

                                     {/* viewinstruction popup */}
                                  {isOpenInstruction && <ViewInstructionPopup
                                    contentInstructions={ <>
                                       
                                        {/* <h2>Event Agenda</h2>
                                        <b>Design your Popup</b>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button>Test button</button>  */}
                                        <div className='agendaDetails'></div>
                                      
                                    </>}
                                    handleCloseInstruction={togglePopupDetails}
                                    />}

                              
                                
                                    
                                    {/* POPUP SECTION START */}
                        {isLanguagePopup ?  

                                    <section className="popup-window" >
                                        <div className="main-container">
                                            <h2>Select preferred language</h2>
                                         
                                            <ul className="language-list">
                                                <li className="form-input" >
                                                 
                                                    <input  type="radio" id="r{{i}}" name="language-name-{{i}}" value="English" onChange={handlelanguagechoose} />
                                                    <label htmlFor="r{{i}}">English</label>
                                                </li>
                                                <li className="form-input" >
                                                 
                                                 <input  type="radio" id="r{{j}}" name="language-name-{{i}}" value="Hindi" onChange={handlelanguagechoose} />
                                                 <label htmlFor="r{{j}}">Hindi</label>
                                             </li>
                                            </ul>
                                           
                                            <div>
                                               <button  className="btn">Next</button>

                                                {/* <button  className="btn">Next</button> */}

                                          
                                                <button className="btn" onClick={handlecloselanguage} >Close</button>
                                               
                                            </div>

                                        </div>
                                    </section>: null }
                                  
                                    {/* POPUP SECTION END */}
                                </li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className="test-container" >
                        <div className="con-img" >
                            <img src="/images/12-9-2020_7-30_Interestfinal.png" alt="" />
                        </div>
                        {/* <div className="con-img">
                            <img src="/images/orange test img.png" alt="" />
                        </div> */}
                        <div className="con-text">
                            <h2>Personality Test</h2>
                            
                            <ul>
                                <li><a  href="#" >View Details</a></li>
                                <li> <a  href="#">View Instruction</a></li>    
                                <li><a className="btn"  style={{cursor: "not-allowed; pointer-events: none;"}} >Take a test</a>
                                    {/* <a className="btn" btn-{{cat_1.categoryId}}" >Take a test</a> */}


                                
                                </li>
                            </ul>
                            
                        </div>
                    </div>  

                    <div className="test-container" >
                        <div className="con-img" >
                            <img src="/images/12-9-2020_7-30_Interestfinal.png" alt="" />
                        </div>
                        {/* <div className="con-img">
                            <img src="/images/orange test img.png" alt="" />
                        </div> */}
                        <div className="con-text">
                            <h2>Intelligence Test</h2>
                            
                            <ul>
                                <li><a  href="#">View Details</a></li>
                                <li> <a  href="#">View Instruction</a></li>    
                                <li><a className="btn"  style={{cursor: "not-allowed; pointer-events: none;"}} >Take a test</a>
                                    {/* <a className="btn" btn-{{cat_1.categoryId}}" >Take a test</a> */}
                                    {/* POPUP SECTION START */}
                                    {/* <section className="popup-window" >
                                        <div className="main-container">
                                            <h2>Select preferred language</h2>
                                         
                                            <ul className="language-list">
                                                <li className="form-input" >
                                                 
                                                    <input  type="radio" id="r{{i}}" name="language-name-{{i}}" />
                                                    <label for="r{{i}}">cat_2.language</label>
                                                </li>
                                            </ul>
                                           
                                            <div>
                                                <button  className="btn">Next</button>

                                                <button  className="btn">Next</button>

                                          
                                                <button className="btn">Close</button>
                                               
                                            </div>

                                        </div>
                                    </section> */}
                                    {/* POPUP SECTION END */}
                                </li>
                            </ul>
                            
                        </div>
                    </div> 

                    <div className="test-container" >
                        <div className="con-img" >
                            <img src="/images/orange test img.png" alt="" />
                        </div>
                        {/* <div className="con-img">
                            <img src="/images/orange test img.png" alt="" />
                        </div> */}
                        <div className="con-text">
                            <h2>Mental Health</h2>
                            
                            <ul>
                                <li><a  href="#">View Details</a></li>
                                <li> <a  href="#">View Instruction</a></li>    
                                <li><a className="btn"  style={{cursor: "not-allowed; pointer-events: none;"}} >Take a test</a>
                                    {/* <a className="btn" btn-{{cat_1.categoryId}}" >Take a test</a> */}
                                    {/* POPUP SECTION START */}
                                    {/* <section className="popup-window" >
                                        <div className="main-container">
                                            <h2>Select preferred language</h2>
                                         
                                            <ul className="language-list">
                                                <li className="form-input" >
                                                 
                                                    <input  type="radio" id="r{{i}}" name="language-name-{{i}}" />
                                                    <label for="r{{i}}">cat_2.language</label>
                                                </li>
                                            </ul>
                                           
                                            <div>
                                                <button  className="btn">Next</button>

                                                <button  className="btn">Next</button>

                                          
                                                <button className="btn">Close</button>
                                               
                                            </div>

                                        </div>
                                    </section> */}
                                    {/* POPUP SECTION END */}
                                </li>
                            </ul>
                            
                        </div>
                    </div> 


                </div>
               
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

    {/*  dashboard end here */}


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
        <p>Copyright © 2020 Vivek Belhekar | Department of Applied Psychology, University of Mumbai | <strong ><a className='termsconditions' href='/termconditions'>Terms & Conditions</a></strong></p>
    </footer>
    {/* footer end here */}
    
    </>
    
  )
}

export default Dashboard