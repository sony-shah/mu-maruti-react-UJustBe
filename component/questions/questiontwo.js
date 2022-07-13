import React,{useState} from 'react'


const QuestionTwo = () => {
    const [questionTwoSelect, setQuestionTwoSelect] = useState('');

    const handlequestiontwo=(e)=>{
        const target = e.target;
        console.log(e.target.value);
        if (target.checked) {
          setQuestionTwoSelect(target.value);
          // console.log(e.target.value);
        }
    
      }
  return (
    <>
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
                    <span></span>
                    <p>User Name</p>
                </div>
            </div>
        </header>


        <section className="question-page">
        <form>
            <section className="wrapper p-question-wrapper">
                <div className="c-qestion-header">
                    <h2>categoryHeading</h2>
                    <p>categoryName</p>
                </div>
                <div className="custom-container">
                    <div className="question-mainDiv {{imageCheck}}">
                        <h4>Select Correct Answer</h4>
                    
                            {/* <h2>Slots have been end for testCategoryName</h2> */}
                        
                        <div className="question-box box square-box">
                            <div className="question-row">
                                <img src="/images/demo-question.png" alt="" />
                            </div>
                        </div>
                        {/* <div className="question-box box verbal-box" >
                            <div className="question-row">
                                <img src="/images/instruction2.jpg" alt="" />
                            </div>
                        </div> */}
                        <div className="answer-box box square-box">
                            <div >
                                <div>
                                
                                    <ul className="box-layout">
                                        
                                        <li className="form-input square-check">
                                            <input Name="answer" type="radio" value="qalist1" id="answer_1" onChange={handlequestiontwo} />
                                            <label htmlFor="answer_1">
                                                <img src="/images/demo-question/classification/example1/eg1_a.png" alt="" />
                                            </label>
                                        </li>
                                        <li className="form-input square-check">
                                            <input Name="answer" type="radio" value="qalist2" id="answer_2" onChange={handlequestiontwo} />
                                            <label htmlFor="answer_2">
                                                <img src="/images/demo-question/classification/example1/eg1_a.png" alt="" />
                                            </label>
                                        </li>
                                        <li className="form-input square-check">
                                            <input Name="answer" type="radio" value="qalist3" id="answer_3" onChange={handlequestiontwo} />
                                            <label htmlFor="answer_3">
                                                <img src="/images/demo-question/classification/example1/eg1_a.png" alt="" />
                                            </label>
                                        </li>
                                        <li className="form-input square-check">
                                            <input Name="answer" type="radio" value="qalist4" id="answer_4" onChange={handlequestiontwo} />
                                            <label htmlFor="answer_4">
                                                <img src="/images/demo-question/classification/example1/eg1_a.png" alt="" />
                                            </label>
                                        </li>
                                        <li className="form-input square-check">
                                            <input Name="answer" type="radio" value="qalist5" id="answer_5"  onChange={handlequestiontwo} />
                                            <label htmlFor="answer_5">
                                                <img src="/images/demo-question/classification/example1/eg1_a.png" alt="" />
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="c-question-footer">
                    <div className="custom-container">
                        <div className="pagination">
                            {/* <!-- 1 / 50 --> */}

                        </div>

                          <div class="timer">10:00</div> 
                        

                        <div className="actions-btn">
                            {/* <button  type="submit" className="btn">Submit</button>
                            <button type="button"  className="btn">Next</button> */}
                        </div>
                    </div>
                    <div className="copy">
                        <p>Copyright © 2020 Vivek Belhekar | Department of Applied Psychology, University of Mumbai.</p>
                    </div>
                </div>
            </section>
        </form>
        </section>
        
    </>
  )
}

export default QuestionTwo
