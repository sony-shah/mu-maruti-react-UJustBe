import React from 'react'

const LanguagePopup = () => {
  return (
  
    // POPUP SECTION START 
            <section className="popup-window" >
                <div className="main-container">
                    <h2>Select preferred language</h2>
                    
                    <ul className="language-list">
                        <li className="form-input" >
                            
                            <input  type="radio" id="r{{i}}" name="language-name-{{i}}" />
                            <label for="r{{i}}">cat_2.language</label>
                        </li>
                    </ul>
                    
                    <div>
                        <button  className="btn">Next</button>

                        <button  className="btn">Next</button>

                    
                        <button className="btn">Close</button>
                        
                    </div>

                </div>
            </section>

    
                                    
        // POPUP SECTION END 
  )
}

export default LanguagePopup