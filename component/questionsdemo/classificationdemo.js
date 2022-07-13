import React,{useState} from 'react'

const ClassificationDemo = () => {
    const [demoquestionone, setdemoquestionone] = useState('');
    const [questionTwoDemo, setQuestionTwoDemo] = useState('');

    const handleDemoOne=(e)=>{
        const target = e.target;
        console.log(e.target.value);
        if (target.checked) {
            setdemoquestionone(target.value);
          // console.log(e.target.value);
        }
    
      }

      const handleDemoTwo=(e)=>{
        const target = e.target;
        console.log(e.target.value);
        if (target.checked) {
            setQuestionTwoDemo(target.value);
          // console.log(e.target.value);
        }
    
      }


   return (
      
        <>
        <section class="wrapper p-demo-question" >
            <div class="c-qestion-header">
                <h2>MU Intelligence Test</h2>
            </div>

            <div class="custom-container">
                <div class="content-row">
                    <div class="content-img"><img src="/images/instruction1.jpg" alt="" /></div>

                    <div class="question-con instruction">

                        <strong>Instructions:</strong>
                        
                        <p className='instruction-p'>In this test, you will be shown five figures. All the figures have some common properties, except one figure. You have to identify and choose the figure that does not share that property. There is only one correct answer. </p>
                        <p>In the given example, there are 5 circles. 4 of the circles are black and only 1 is white. So, B is the answer. </p>
                        <p>Mark your answer by clicking on the option you choose.</p>
                        <p>Mark your answer by clicking on the option you choose.</p>
                        <p>Mark your answer by clicking on the option you choose.</p> 

                    </div>
                </div>
            </div>

            <div class="c-question-footer">
                <div class="custom-container">
                        <div class="pagination">
                   
                    </div>

                    <div class="timer">00:00(Timer)</div>
                    <div class="actions-btn"> <button  class="btn">Start Demo</button> </div>
                </div>
            </div>
        </section>


        
        {/* <!-- demo question 1  --> */}

            {/* <section className="wrapper p-demo-question">
                <div className="c-qestion-header">
                    <h2>MU Intelligence Test</h2>
                </div>
                <div className="custom-container">
                    <div className="custom-container">
                        <div className="question-mainDiv onlyQuestion">
                            <h4>Select Correct Answer</h4>
                            <div className="answer-box box square-box">
                                <img src="/images/demo-question/classification/example1/eg1_q.png" alt="" />
                            </div>
                            <div className="answer-box box square-box">
                                <form action="">
                                    <ul className="box-layout">
                                        <li  className="form-input square-check">
                                            <input type="radio" name="classifcation1" value="value1" id="11" onChange={handleDemoOne} />
                                            <label htmlFor="11"><img src="/images/demo-question/classification/example1/eg1_a.png" alt="" /></label>
                                            <p>A</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1"  value="value" id="12" onChange={handleDemoOne} />
                                            <label htmlFor="12"><img src="/images/demo-question/classification/example1/eg1_b.png" alt="" /></label>
                                            <p>B</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1" value="value1" id="13" onChange={handleDemoOne} />
                                            <label htmlFor="13"><img src="/images/demo-question/classification/example1/eg1_c.png" alt="" /></label>
                                            <p>C</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1"  value="value1" id="14" onChange={handleDemoOne} />
                                            <label htmlFor="14"><img src="/images/demo-question/classification/example1/eg1_d.png" alt="" /></label>
                                            <p>D</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1"  value="value1" id="15" onChange={handleDemoOne} />
                                            <label htmlFor="15"><img src="/images/demo-question/classification/example1/eg1_e.png" alt="" /></label>
                                            <p>E</p>
                                        </li>
                                        </ul>
                                </form>
                            </div>
                        </div>
                        <span  className="rightAnswer">You have selected Correct Answer !</span>
                    //   <span  className="wrongAnswer">You have selected Wrong Answer !</span> 
   
                    </div>
                </div>
                <div className="c-question-footer">
                    <div className="custom-container">
                        <div className="pagination">

                        </div>

                        <div className="timer">
                            00:00(Timer)
                        </div>
                        <div className="actions-btn">
                            <button className="btn">Next</button>
                        </div>
                    </div>
                </div>
            </section> */}


    {/* <!-- demo question 2  --> */}

        {/* <section className="wrapper p-demo-question" >
            <div className="c-qestion-header">
                <h2>MU Intelligence Test</h2>
            </div>
            <div className="custom-container">
                <div className="custom-container">
                    <div className="question-mainDiv onlyQuestion">
                        <h4>Select Correct Answer</h4>
                        <div className="answer-box box square-box">
                            <img src="/images/demo-question/classification/example2/eg2_q.png" alt="" />
                        </div>
                        <div className="answer-box box square-box">
                            <form action="">
                                <ul className="box-layout">
                                    <li className="form-input square-check">
                                        <input  type="radio" value="ans1" name="classifcation2" onChange={handleDemoTwo} id="21" />
                                        <label htmlFor="21"><img src="/images/demo-question/classification/example2/eg2_a.png" alt="" /></label>
                                        <p>A</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input  type="radio" value="ans2" name="classifcation2" onChange={handleDemoTwo} id="22" />
                                        <label htmlFor="22"><img src="/images/demo-question/classification/example2/eg2_b.png" alt="" /></label>
                                        <p>B</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input type="radio"  value="ans3" name="classifcation2"  onChange={handleDemoTwo} id="23" />
                                        <label htmlFor="23"><img src="/images/demo-question/classification/example2/eg2_c.png" alt="" /></label>
                                        <p>C</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input type="radio" value="ans4" name="classifcation2" onChange={handleDemoTwo} id="24" />
                                        <label htmlFor="24"><img src="/images/demo-question/classification/example2/eg2_d.png" alt="" /></label>
                                        <p>D</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input type="radio" value="ans5" name="classifcation2" onChange={handleDemoTwo} id="25" />
                                        <label htmlFor="25"><img src="/images/demo-question/classification/example2/eg2_e.png" alt="" /></label>
                                        <p>E</p>
                                    </li>
                                    </ul>
                            </form>
                        </div>
                    </div>
                    <span  className="rightAnswer">You have selected Correct Answer !</span>
                    <span  className="wrongAnswer">You have selected Wrong Answer !</span>
                </div>
            </div>
            <div className="c-question-footer">
                <div className="custom-container">
                    <div className="pagination">
               
                    </div>

                    <div className="timer">
                        00:00(Timer)
                    </div>
                    <div className="actions-btn">
                        <button className="btn">Next</button>
                        <button className="btn">Start Test</button>
                    </div>
                </div>
            </div>
        </section> */}

       
       </>
   )
}

export default ClassificationDemo