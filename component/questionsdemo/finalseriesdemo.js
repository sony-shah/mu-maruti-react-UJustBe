import React from 'react'

const FinalSeriesDemo = () => {
  return (
   <>
        <section class="wrapper p-demo-question" >
            <div class="c-qestion-header">
                <h2>MU Intelligence Test</h2>
            </div>
            <div class="custom-container">
                <div class="content-row">
                    <div class="content-img"><img src="/images/instruction3.jpg" alt="" /></div>

                    <div class="question-con instruction">

                        <strong>Instructions:</strong>
                        <p className='instruction-p'>This test includes some figures that follow a specific sequence. You have to understand the sequence and choose a figure from the options that would come in place of the blank space. There is only one correct answer
                        </p>
                        <p>
                            In the given example, there is a black circle, then a black square, then a circle then a square; in the blank space, we need a black circle. So, here, B is the correct answer.
                        </p>
                        <p>
                            In some questions, you will be required to fill in the option in the middle of the sequence. Use the figures before and after the blank space to understand the sequence and figure out the option that would come in the blank space.

                        </p>
                        <p>Mark your answer by clicking on the option you choose.</p>


                    </div>
                </div>
            </div>

            <div class="c-question-footer">
                <div class="custom-container">
                    <div class="pagination">
                     
                    </div>

                    <div class="timer">00:00(Timer)</div>
                    <div class="actions-btn">
                        <button class="btn">Start Demo</button>
                    </div>
                </div>
            </div>
        </section>


    {/* <!-- demo question 1  --> */}

    {/* <section class="wrapper p-demo-question" >
        <div class="c-qestion-header">
            <h2>MU Intelligence Test</h2>
        </div>
        <div class="custom-container">
            <div class="custom-container">

                <div class="question-mainDiv onlyQuestion">
                    <h4>Select Correct Answer</h4>
                    <div class="answer-box box square-box">
                        <img src="/images/demo-question/series/example1/eg1_q.png" alt="" />
                    </div>
                    <div class="answer-box box square-box">
                        <form action="">
                            <ul class="box-layout">
                                <li class="form-input square-check">
                                    <input  type="radio" name="series1" id="11" />
                                    <label htmlFor="11"><img src="/images/demo-question/series/example1/eg1_a.png" alt="" /></label>
                                   
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series1" id="12" />
                                    <label htmlFor="12"><img src="/images/demo-question/series/example1/eg1_b.png" alt="" /></label>
                                 
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series1" id="13" />
                                    <label htmlFor="13"><img src="/images/demo-question/series/example1/eg1_c.png" alt="" /></label>
                                
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series1" id="14" />
                                    <label htmlFor="14"><img src="/images/demo-question/series/example1/eg1_d.png" alt="" /></label>
                                    
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series1" id="15" />
                                    <label htmlFor="15"><img src="/images/demo-question/series/example1/eg1_e.png" alt="" /></label>
                                   
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <span  class="rightAnswer">You have selected Correct Answer !</span>
                <span  class="wrongAnswer">You have selected Wrong Answer !</span>

            </div>
        </div>

        <div class="c-question-footer">
            <div class="custom-container">
                <div class="pagination">
               
                </div>

                <div class="timer">
                    00:00(Timer)
                </div>
                <div class="actions-btn">
                    <button  class="btn">Next</button>
                </div>
            </div>
        </div>
    </section> */}

    {/* <!-- demo question 2  --> */}

    {/* <section class="wrapper p-demo-question" >
        <div class="c-qestion-header">
            <h2>MU Intelligence Test</h2>
        </div>
        <div class="custom-container">
            <div class="custom-container">
                <div class="question-mainDiv onlyQuestion">
                    <h4>Select Correct Answer</h4>
                    <div class="answer-box box square-box">
                        <img src="/images/demo-question/series/example2/eg2_q.png" alt="" />
                    </div>
                    <div class="answer-box box square-box">
                        <form action="">
                            <ul class="box-layout">
                                <li class="form-input square-check">
                                    <input  type="radio" name="series2" id="21" />
                                    <label for="21"><img src="/images/demo-question/series/example2/eg2_a.png" alt="" /></label>
                                  
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series2" id="22" />
                                    <label for="22"><img src="/images/demo-question/series/example2/eg2_b.png" alt="" /></label>
                                   
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series2" id="23" />
                                    <label for="23"><img src="/images/demo-question/series/example2/eg2_c.png" alt="" /></label>
                                   
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series2" id="24" />
                                    <label for="24"><img src="/images/demo-question/series/example2/eg2_d.png" alt="" /></label>
                                  
                                </li>
                                <li class="form-input square-check">
                                    <input  type="radio" name="series2" id="25" />
                                    <label for="25"><img src="/images/demo-question/series/example2/eg2_e.png" alt="" /></label>
                                 
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <span  class="rightAnswer">You have selected Correct Answer !</span>
                <span class="wrongAnswer">You have selected Wrong Answer !</span>
            </div>
        </div>
        <div class="c-question-footer">
            <div class="custom-container">
                <div class="pagination">
                  
                </div>

                <div class="timer">
                    00:00(Timer)
                </div>
                <div class="actions-btn">
                    <button class="btn">Next</button>
                    <button  class="btn">Start Test</button>
                </div>
            </div>
        </div>
    </section> */}
   </>
  )
}

export default FinalSeriesDemo