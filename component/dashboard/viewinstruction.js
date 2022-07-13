import React from 'react'

const ViewInstructionPopup = props => {
  return (
   <>
         <div className="modal fade show">
                <div className="modal-dialog modal-lg" >
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className="modal-title pull-left" >
                                   Interest-Test
                            </h4>
                            <button type="button" className="close pull-right">
                                <span aria-hidden="true" onClick={props.handleCloseInstruction}>x</span>
                            </button>

                        </div>
                
                        <div className='modal-body'>
                        <p>
                            <p> <strong>MU-II INSTRUCTIONS- INTEREST INVENTORY</strong></p>
                            <p>As you click on <strong>Take a Test, </strong> you will see a list of activities that you may or may not like to do.</p>
                            <p>For example, <strong>"Reading books and poetry"</strong> </p>

                            <p> You have to decide whether you like or do not like this activity and indicate your degree of liking by choosing one of the following options:</p>
                            <p><strong>Like: </strong>You generally <strong>LIKE </strong> this activity</p>
                            <p><strong>Maybe: </strong>You <strong>MIGHT OR MIGHT NOT LIKE </strong> this activity</p>
                            <p><strong>Dislike: </strong>You generally<strong> DISLIKE </strong>this activity</p>
                            <p>In this way, many activities are listed towards which you must indicate your liking. There are no right or wrong answers. Please responds as honestly as you can.</p>
                            <p><strong>You can start now.</strong></p>

                        </p>

                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-default'  onClick={props.handleCloseInstruction}>Close</button>
                        </div>
                        {props.content}

                    </div>
                    
                    {/* <div className="popup-box">       
                        <div className="box">
                            <span className="close-icon" onClick={props.handleClose}>x</span>
                            {props.content}
                        </div>
                    </div> */}
                </div>
         </div>
   </>
  ) 
}

export default ViewInstructionPopup