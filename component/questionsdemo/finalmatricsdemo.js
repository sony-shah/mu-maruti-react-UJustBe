import React from 'react'

const FinalMatricsDemo = () => {
    
  return (
    <>

        <section className="wrapper p-demo-question" >
            <div className="c-qestion-header">
                <h2>MU Intelligence Test</h2>
            </div>
            
            <div className="custom-container">
                <div className="content-row">
                    <div className="content-img"><img src="/images/instruction2.jpg" alt="" /></div>

                    <div className="question-con instruction">

                        <strong>Instructions:</strong>
                        <p className='instruction-p'>Instructions: In this test, you will be shown a box with four or nine figures. The elements follow a principle when seen vertically as well as horizontally. You have to understand the relationship between the given figures, and choose
                            a figure from the options that fits the blank space. The figures may follow same or different rules vertically and horizontally.
                        </p>
                        <p>
                            In the given example, horizontally, one dot gets added to the figure and when seen vertically, two dots get added to the figure. So, in the blank space, there would be figure with four dots. So, here, C is the correct answer
                        </p>
                        <p>
                            Mark your answer by clicking on the option you choose.
                        </p>

                    </div>
                </div>
            </div>
            <div className="c-question-footer">
                <div className="custom-container">
                    <div className="pagination">
                        {/* <!-- 1 / 50 --> */}
                    </div>

                    <div className="timer">00:00(Timer)</div>
                    <div className="actions-btn">
                        <button className="btn">Start Demo</button>
                    </div>
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
                    <div className="question-mainDiv">
                        <h4>Select Correct Answer</h4>
                        <div className="answer-box box square-box">
                            <img src="/images/demo-question/matrices/example1/eg1_q.png" alt="" />
                        </div>
                        <div className="answer-box box square-box">
                            <form action="">
                                <ul className="box-layout">
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1" id="11" />
                                            <label for="11"><img src="/images/demo-question/matrices/example1/eg1_a.png" alt="" /></label>
                                            <p>A</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1" id="12" />
                                            <label for="12"><img src="/images/demo-question/matrices/example1/eg1_b.png" alt="" /></label>
                                            <p>B</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1" id="13" />
                                            <label for="13"><img src="/images/demo-question/matrices/example1/eg1_c.png" alt="" /></label>
                                            <p>C</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input  type="radio" name="classifcation1" id="14"/>
                                            <label for="14"><img src="/images/demo-question/matrices/example1/eg1_d.png" alt="" /></label>
                                            <p>D</p>
                                        </li>
                                        <li className="form-input square-check">
                                            <input type="radio" name="classifcation1" id="15" />
                                            <label for="15"><img src="/images/demo-question/matrices/example1/eg1_e.png" alt="" /></label>
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
                            <img src="/images/demo-question/matrices/example2/eg2_q.png" alt="" />
                        </div>
                        <div className="answer-box box square-box">
                            <form action="">
                                <ul className="box-layout">
                                    <li className="form-input square-check">
                                        <input  type="radio" name="classifcation2" id="21" />
                                        <label htmlFor="21"><img src="/images/demo-question/matrices/example2/eg2_a.png" alt="" /></label>
                                        <p>A</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input  type="radio" name="classifcation2" id="22" />
                                        <label htmlFor="22"><img src="/images/demo-question/matrices/example2/eg2_b.png" alt="" /></label>
                                        <p>B</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input  type="radio" name="classifcation2" id="23" />
                                        <label htmlFor="23"><img src="/images/demo-question/matrices/example2/eg2_c.png" alt="" /></label>
                                        <p>C</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input  type="radio" name="classifcation2" id="24" />
                                        <label htmlFor="24"><img src="/images/demo-question/matrices/example2/eg2_d.png" alt="" /></label>
                                        <p>D</p>
                                    </li>
                                    <li className="form-input square-check">
                                        <input  type="radio" name="classifcation2" id="25" />
                                        <label htmlFor="25"><img src="/images/demo-question/matrices/example2/eg2_e.png" alt="" /></label>
                                        <p>E</p>
                                    </li>
                                    </ul>
                            </form>
                        </div>
                    </div>
                    <span  className="rightAnswer">You have selected Correct Answer !</span>
                    <span className="wrongAnswer">You have selected Wrong Answer !</span>
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
                        <button  className="btn">Next</button>
                        <button  className="btn">Start Test</button>
                    </div>
                </div>
            </div>
        </section> */}

    
    </>
  )
}

export default FinalMatricsDemo