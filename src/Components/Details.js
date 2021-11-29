import React from 'react';

const linknav = [
    {navitem:"Developments - Merger and Reconfiguration"},
    {navitem:"Contacting the University"},
    {navitem:"Yr Athrofa"},
    {navitem:"University Council"},
    {navitem:"Alumni"},
    {navitem:"Register for the Alumni Association"},
    {navitem:"Vice-Chancellor's Statement to Alumni"},
    {navitem:"News and Events"},
    {navitem:"Services"},
    {navitem:"Benefits"},
    {navitem:"Further Study Opportunities"},
    {navitem:"Magazine - Campus"},
    {navitem:"Alumni Association Branches"},
    {navitem:"Alumni Liaison"},
    {navitem:"Robes and Regalia"},
    {navitem:"Welsh Language Scheme"},
    {navitem:"Vacancies"},
    {navitem:"Website Information"},
    {navitem:"Publication Scheme"},
    {navitem:"Data Protection"}
]

const Details = () => {
    return (
        <div className="container border border-bottom-0">
           <div className="row mt-2">
                <div className="col-3">
                    <h5>About Us</h5>
                    {
                      linknav.map(item=><p style={{fontSize:"14px"}} key={item.navitem}><hr/><i style={{color:"#c9c9c9"}} className="fas fa-angle-right"></i> <span className="regi-achor"> {item.navitem}</span></p>)  
                }
               </div>
                <div className="col-9">
                    <p style={{fontSize:"14px"}}> <span className="regi-achor">Home</span>  &#62; <span className="regi-achor">About Us</span> &#62; Alumni</p>
                    <hr/>
                    <div className="row">
                        <div className="col-8">
                            <h2 className="welcome-title">
                                Welcome to the University of <br/>Wales Alumni Association
                            </h2>
                            <p style={{color:"#034ea2"}}>
                                Every student who has successfully completed a Degree, Diploma or Certificate awarded by the University of Wales, be it studying at an institution in Wales or at one of our many international collaborative centres, is entitled to become a member of the University of Wales Alumni Association.
                            </p>
                            <p>
                                Many graduates will already be a part of their respective institution’s alumni schemes, but by also joining the University of Wales Alumni, you can expand your global network further and increase opportunities for collaboration and co-operation.
                            </p>
                            <p>
                                Membership is free and with alumni in all four corners of the world, you will have the opportunity to connect with people on a global scale, be it socially or professionally. As well as a way of keeping in touch with the University and each other, you’ll also be entitled to a range of benefits and be kept up to date on alumni news and events happening worldwide.
                            </p>
                            <p>
                                Our aim is to create a strong, world-wide, fully interactive community of alumni and we would like you to be part of it.
                            </p>
                            <p>
                                To become a member of the Alumni association today, please <a className="my-4 regi-achor">Register now.</a>
                            </p>
                            <img className="w-100 border border-4" src="https://www.wales.ac.uk/Resources/Images/Alumni/Cameralookupgrad454x302.jpg" alt=""/>
                        </div>
                        <div className="col-4 shadow p-3 mb-5 bg-body rounded">
                            <img src="https://www.wales.ac.uk/Resources/Images/Alumni/Graduatesillhouete220x311.jpg" alt="" srcSet="" />
                            <h4 className="my-3">KEEP IN TOUCH</h4>
                            We love to be kept up to date and informed about our alumni, so if you have any news, stories or photographs of your own that you think would be of interest to others, please email your items to alumni@wales.ac.uk
                            
                            <br />
                            
                            <br />
                            
                            Alternatively, please write to: University of Wales Alumni Association, University Registry, King Edward VII Avenue, Cathays Park, Cardiff, CF10 3NS.
                            <br/>
                            <br/>
                            <a className="my-4 regi-achor">Register your contact details<br/> now.</a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Details;