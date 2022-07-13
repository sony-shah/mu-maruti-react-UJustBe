import React from 'react'

const ViewDetailsPopup = props => {
    
    return (

        <>
        
            <div className="modal fade show">
                <div className="modal-dialog modal-lg" >
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className="modal-title pull-left" >
                                    category_name
                            </h4>
                            <button type="button" className="close pull-right">
                                <span aria-hidden="true" onClick={props.handleClose}>x</span>
                            </button>

                        </div>
                
                        <div className='modal-body'>
                        <p>
                            <p> <strong>Interests</strong>
                                represent preferences for certain types of tasks associated with work activities. 
                                They are what keep us motivated and energized. With a firm understanding of our interests,
                                we can pursue enjoyment and satisfaction within our lives as well as our careers.
                                Interest Inventory is a test designed to measure and evaluate the level of interest in different areas. </p>
                            <p> <strong>The Mumbai University  Interest Inventory (MU-II)</strong> measures the extent of interest in<strong> 9 vocational areas,</strong>
                                namely Leadership, Artistic, Altruism, Social, Investigative, Conventional, Realistic (Production), Realistic (Adventure) and Erudition. 
                                It is based on two interest models; John Holland’s RIASEC model which classifies six major types of interests; Realistic, Investigative, Artistic, Social, Enterprising and Conventional;
                                that are influential in vocational careers and ORVIS (Oregon Vocational Interest Scale) which adds the dimension of Erudition and two divisions of Realistic Interests. </p>

                            <p>  <strong>*This is a beta version of the online test</strong></p>

                        </p>

                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-default'  onClick={props.handleClose}>Close</button>
                        </div>
                        {props.contentInstructions}

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
  
  export default ViewDetailsPopup