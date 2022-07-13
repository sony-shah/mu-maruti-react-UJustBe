import React from 'react'

const ImageReports = () => {
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


    {/*  myreportDetails  start here */}
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

                  <div className="report-headers">
                      Hi soni Shah,
                  </div>
               {/* <br> */}
              <div className="graphs"> 
                  
                  <div className="chart-wrapper" >
                      <canvas baseChart id="supercool-canvas">
                      graphs
                      
                    </canvas>
                  </div>
              </div>
            


              <div className="reportDetails">
                  <div className="repor-row report-head">
                      <div className="types">Test</div>
                      <div className="types">Correct</div>
                      <div className="types">Incorrect</div>
                      
                  </div>
                  <div className="repor-row" >
                      <div className="types">img_title</div>
                      <div className="types">img_correct</div>
                      <div className="types">img_incorrect</div>
                    
                  </div>
              </div>

               {/* Total COrrect Score  */}
              <div className="reportDescription">
                  <h3>Total Score : 105</h3>
              </div>

              <div className="reportDescription"> 
                  <ul>
                      <li>
                          <h3>0 to 20 : Low</h3>
                          <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                      </li>
                      {/* <li   >
                          <h3>21 to 26 : Medium</h3>
                          <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                      </li>
                      <li >
                          <h3>27 & above : High</h3>
                          <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                      </li> */}
                  </ul>
              </div>

              <div className="action-button text-right">
                  <button className="btn btn-danger btn-block">Download PDF</button>
              </div> 

              {/* <!-----------------------PRINT VALUES--------------------------------------------------> */}

              {/* style="display: none;"  */}
              {/* <div style="display: none;" class="container print-report" id="htmlData">  */}
                 

                   {/* header  */}
                  {/* <div>
                      <img src="/images/pdf-header.jpg" style="width: 552px;" alt="" />
                  </div>

                  <div>
                      <img src="/images/blank-image.jpg" style="width: 552px;" alt="" />
                  </div>

                  <div  style="font-size: 16px !important; padding: 10px 0;">
                      <p>Name: soni shah | Gender: female | Unique code: 001 | Age: 23</p>
                  </div>
                  <div  style="width:500px; font-size: 16px !important; padding: 10px 0;" >
                      <p>Institution: Academic Institution Partner for this assessment
                          PSYCHOMETRIC REPORT OF  TEST/ INVENTORY</p>
                  </div>
                  <div>
                      <img src="assets/images/blank-image.jpg" style="width: 552px;" alt="" />
                  </div>
                 
                  <img id="mock" alt="Graph Image" />
                  <div>
                      <img src="/images/blank-image.jpg" style="width: 552px;" alt="" />
                  </div> */}
                  

                  {/* <div >
                      <div>
                          <h3>img_title - img_correct</h3>
                          <p>img_remark</p> 
                      </div>
                  </div> */}

                  {/* Total Correct Score shown in PDF Here */}
                  {/* <div>
                      <h3>Total Score - 105</h3>
                  </div> */}

                  {/* <div class="reportDescription"> 
                      <ul>
                          <li >
                              <h3>0 to 20 : Low</h3>
                              <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                          </li>
                          <li>
                              <h3>21 to 26 : Medium</h3>
                              <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                          </li>
                          <li >
                              <h3>27 & above : High</h3>
                              <p>The overall score of the individual falls below the average score. The result could be due to lapse of attention, technical difficulty, not being fluent with the use of computer/mobile/tab or poor network, or other environmental distractors. It could also be that the individual taking the test does not fall in the defined age group. The current academic records do not match with the obtained score, hence we recommend getting the intelligence assessment done in person with a trained psychologist.</p>
                          </li>
                      </ul>
                  </div> */}
          
                  {/* <div>
                      <img src="/images/blank-image.jpg" style="width: 552px;" alt="" />
                  </div>

                  <div style="padding: 20px 0; font-size: 10px; line-height: 12px;" >
                      <p><strong>Vivek Belhekar, PhD</strong></p>
                  <p>Associate Professor, Department of Applied Psychology, University of Mumbai <br/> Principal Investigator, Online Psychometrics: Data-Science and Public Policy Project</p>
                
                  </div>
                  <div style="padding: 20px 0; font-size: 10px; line-height: 12px;">
                      <p>Disclaimer: This is a computer-generated report. The report(s) are based purely on the responses given by the respondent and as of now, are not controlled for random and desirable responding. The result(s) may vary if the responses change. The result(s) are in no way diagnostic of any psychological condition, disorder or behaviour. It is for the purpose of feedback and general understanding of psychological functioning. It should not be used for any specific academic or professional decisions without consulting a psychologist. This is not a clinical diagnosis or job recommendation. The test(s) used are standardized and psychometrically sound. The test theory used is CTT. Standard online procedures for administration and scoring have been followed. The tests have been normed on a sample of college and university students. However, online conduction and factors other than students true ability/trait level may influence the scores. It is recommended to seek advice from a  qualified psychologist or opt for retesting. Do not contact the principal investigator for further clarification of the report. This is part of research conducted under MU-OPC.
                    </p>
                    <p>Copyright © 2020 Vivek Belhekar. All rights reserved.</p>
                  </div>
                  <div>
                      <img src="/images/blank-image.jpg" style="width: 552px;" alt="" />
                  </div> */}

                  {/* <!-- footer  --> */}
                  {/* <div>
                      <img src="/images/pdf-footer.jpg" style="width: 552px;" alt="" />
                  </div> */}
              {/* </div> */}
                  
               
               
                    {/* <div className="test-container">
                        <div className="con-text">
                            <h2>No Report has been generated Yet. Please Attempt a Test to view your Report</h2> 
                        </div>
                    </div> */}
             
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

    {/*  myreportDetails end here */}


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

export default ImageReports