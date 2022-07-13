import { Router, useRouter } from 'next/router'
import React from 'react'

const MyReport = () => {
  const router = useRouter();


  const handleimageReport=() =>{
    router.push("/navbar/imagereport");
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


    {/*  myreport  start here */}
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

                  <h1>My Report</h1>

                  
                    <div className="test-container" >
                            <div className="con-img">
                                <img src="/images/orange test img.png" alt="" />
                            </div>
                            <div className="con-text">
                                <h2>user test category name</h2>
                                <ul>
                                    <li>
                                        <button onClick={handleimageReport} className="btn"><label htmlFor="">Show Report</label></button>
                                    </li>
                                    {/* <li>
                                        <button className="btn"><label for="">Download report</label></button>
                                    </li>  */}
                                </ul>
                            </div>
                    </div>
               
               
                    <div className="test-container">
                        <div className="con-text">
                            <h2>No Report has been generated Yet. Please Attempt a Test to view your Report</h2> 
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

    {/*  myreport end here */}


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
  )
}

export default MyReport