import React from 'react'

const FinalTopologyDemo = () => {
  return (
    <>  
        <section className="wrapper p-demo-question" >
            <div className="c-qestion-header">
                <h2>MU Intelligence Test</h2>
            </div>
            <div className="custom-container">
                <div className="content-row">
                    <div className="content-img"><img src="/images/instruction4.jpg" alt="" /></div>

                    <div className="question-con instruction">

                        <strong>Instructions:</strong>
                        <p className="instruction-p">In this test, you will be shown a figure in which a dot is placed in some relations with other shapes in the figure. Among the options, you have to choose the one where the dot can be placed such that it follows the relationships with
                            the shapes as shown in the figure. There is only one correct answer.
                        </p>
                        <p>
                            In the given example, the dot is placed inside both, the triangle and the square. Here, C is the only option where the dot can be placed inside both, the triangle and the square. So, here, C is the correct answer.

                        </p>
                        <p>Mark your answer by clicking on the option you choose.
                        </p>


                    </div>
                </div>
            </div>
            <div className="c-question-footer">
                <div className="custom-container">
                    <div className="pagination">

                    </div>

                    <div className="timer">00:00(Timer)</div>
                    <div className="actions-btn">
                        <button  className="btn">Start Demo</button>
                    </div>
            </div>
            </div>
        </section>
    </>
    
  )
}

export default FinalTopologyDemo