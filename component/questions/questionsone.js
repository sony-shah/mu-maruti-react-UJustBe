import React,{ useState }from 'react'

const QuestionOne = () => {
  const [questionType, setquestionType] = useState('');

  const handlequestionone=(e)=>{
    const target = e.target;
    console.log(e.target.value);
    if (target.checked) {
      setquestionType(target.value);
      // console.log(e.target.value);
    }

  }


  return (
  <>
    <header class="wrapper m-header innerpage question-page">
        <div class="custom-container">

            <div class="logo">
              
                <span>
                    <img src="/images/University-logo321.png" alt="" />
                </span>
            </div>

            <div class="logo">
               
                <span>
                    <img src="/images/Logo-OCP-Hor.jpg" alt="" />
                </span>
            </div>
       
            <div class="user-profile">
                <span></span>
                <p>soni shah</p>
            </div>
        </div>
    </header>

    <section class="wrapper p-question-wrapper p-personality-test-page">

        <form >
            <div class="c-qestion-header">
                <h2>Interest Test</h2>
            </div>

            <div class="custom-container" >
                {/* <h2>categoryHeading</h2> */}
                {/* <h2>Your psychological test is over. Click on okay to view or report. testCategoryName</h2> */}
            
                {/* <!-- <form #Form="ngForm" (ngSubmit)="onNext(personalityTestForm)" >
                    <div class="question-row" *ngFor="let qlist of questionList;let i = index"> 
                        <h3> {{qlist.question_text}}</h3>
                        <ul class="page-list">
                            <li class="form-input">
                                <input type="radio" id="answer-{{qlist.option.option_1}}-{{i}}" name="option_{{i+1}}" 
                                [value]="qlist.option.option_1" ngModel> 
                                <label for="answer-{{qlist.option.option_1}}-{{i}}">{{qlist.option.option_1}}</label>
                            </li>
                            <li class="form-input">
                                <input type="radio" id="answer-{{qlist.option.option_2}}-{{i}}" name="option_{{i+1}}" 
                                [value]="qlist.option.option_2" ngModel> 
                                <label for="answer-{{qlist.option.option_2}}-{{i}}">{{qlist.option.option_2}}</label>
                            </li>   
                            <li class="form-input">
                                <input type="radio" id="answer-{{qlist.option.option_3}}-{{i}}" name="option_{{i+1}}" 
                                [value]="qlist.option.option_3" ngModel> 
                                <label for="answer-{{qlist.option.option_3}}-{{i}}">{{qlist.option.option_3}}</label>
                            </li>
                            <li class="form-input">
                                <input type="radio" id="answer-{{qlist.option.option_4}}-{{i}}" name="option_{{i+1}}" 
                                [value]="qlist.option.option_4" ngModel> 
                                <label for="answer-{{qlist.option.option_4}}-{{i}}">{{qlist.option.option_4}}</label>
                            </li>
                            <li class="form-input">
                                <input type="radio" id="answer-{{qlist.option.option_5}}-{{i}}" name="option_{{i+1}}" 
                                [value]="qlist.option.option_5" ngModel> 
                                <label for="answer-{{qlist.option.option_5}}-{{i}}">{{qlist.option.option_5}}</label>
                            </li>
                        </ul>
                    </div>
                    <div class="actions-btn">
                        <button class="btn">next</button>
                    </div>
                </form> --> */}

                
                  <div class="question-row"> 
                      
                      <h3> question_text</h3>
                    
                      <ul class="page-list">
                        
                          <li class="form-input">
                              <input name="answer"  type="radio" 
                              value="optionVal" id="answer_{{i}}_{{j}}" onChange={handlequestionone} /> 
                              <label htmlFor="answer_{{i}}_{{j}}" >optionVal</label>
                          </li>
                          
                           <li class="form-input">
                              <input name="answer" type="radio"
                              value="dislike" id="answer_{{i}}_2" onChange={handlequestionone} /> 
                              <label htmlFor="answer_{{i}}_2">dislike</label>
                          </li>   
                          <li class="form-input">
                              <input 
                              name="answer" 
                              type="radio" 
                              value="like" 
                              id="answer_{{i}}_3"
                              onChange={handlequestionone} /> 
                              <label htmlFor="answer_{{i}}_3">like</label>
                          </li>
                          
                      </ul>
                    
                      {/* <!-- <span class="error-msg">
                          <div>select one answer for question</div>
                      </span> --> */}
                        {/*                         
                          Question Text
                          <input type="text" Name="questionText" value="" /> Questionare Id
                          <input type="text" Name="questionId" value="" /> slotEnd
                          <input type="text" Name="slotEnd" value="" /> scale
                          <input type="text" Name="scale" value="" /> direction
                          <input type="text" Name="direction" value="" /> */}
                          
                    
                  
                  
                  </div>

               
                
                  
                  
          
          {/* <input type="text" Name="userId" value="{{studentId}}" /> */}
                    
                    
            </div>
            <div class="c-question-footer">
                    
                <div class="custom-container">
                    <div class="pagination">
                        
                    </div>
                    <div >At least one option must be selected</div>

                    {/* <div class="timer">
                    10:00
                    </div>  */}
                    
                    {/* <div class="actions-btn">
                        <button  type="submit" class="btn">Submit</button>
                        <button  type="button"  class="btn">Next</button>
                        
                    </div> */}
                </div>
              
                <div class="copy">
                    <p>Copyright © 2020 Vivek Belhekar | Department of Applied Psychology, University of Mumbai.</p>
                </div>
            </div> 
        </form>

    </section>


  </>
  )
}

export default QuestionOne