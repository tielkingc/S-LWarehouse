import React, {useState} from 'react';
import emailjs, {init} from 'emailjs-com';
init("user_TElUtaf71wvBz8tT6fn72")

function Contact(props){
    
    
    function sendEmail(e) {
        e.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_wl0xwja';

        emailjs.sendForm(serviceID, templateID, e.target)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    return(
        <div className ="container-fluid bg-primary bg-opacity-25 pb-5">
            <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Need to talk to S&L Warehouse?</h1>
                    <p className='fs-5'> Please use this form for your questions and concerns</p>
                </div>
            </div>
            <div className='d-flex column-8 container justify-content-center '>
                <form className='contact-form ' onSubmit={sendEmail} id="contact">
                    <div className="row my-2">
                        <label for="from_name">Your Name</label>
                        <input type="text" name="from_name" id="from_name" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="row my-2">
                        <label for="message">What Can We Help With?</label>
                        <textarea rows='3' name="message" id="message" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="row my-2">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="(###)###-####" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="row my-2">
                        <label for="email">Email Address</label>
                        <input type="text" name="email" id="email" placeholder="email@address.com" className="form-control input-md border border-primary shadow"/>
                    </div>
                    <div className="flex-row space-between my-2 col-6 mx-auto">
                    <button className="btn btn-danger shadow" type="submit">Connect with S&L</button>
                </div>
                </form>
            </div>
        </div>    )
};

export default Contact;