function FAQ(props){
    
    return(
        <div className="container-fluid bg-primary bg-opacity-25 pb-5 mb-5">
            <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Frequently Asked Questions</h1>
                    <p className='fs-5'></p>
                </div>
            </div>

            <div className="d-flex ps-5 col-12 justify-content-center row">
                <div className="card ">
                    <h4 className="card-header">Where are you located?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">We have two locations:</h5>
                        <p className="card-text">Heritage Site: 2310 South SR3, Hartford City, IN 47348</p>
                        <p className="card-text">Hometown Site: 1030 West Kickapoo St, Hartford City, IN 47348</p>                    
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">What are your hours?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">While the units are accessible 24/7, normal business hours are 8am-5pm Monday through Friday.</h5>                    
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">Do you offer other storage services?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">We no longer offer storage for boats, cars and RVs.</h5>                    
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">What size storage units do you offer?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">We offer 4 sizes at each location:</h5>
                        <p className="card-text">5' x 10', 10' x 10', 10' x 15', 10' x 20'</p>                    
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">Do you require a security deposit?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">Yes, one month's rent.</h5>                    
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">When is rent due?</h4>
                    <div className="card-body ms-5">
                        <h5 className="card-title">At the beginning of the month</h5>                    
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FAQ;
