import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import { ADD_TO_WAIT } from '../utils/mutations';
// import { onError } from 'apollo-link-error';
// import { ApolloLink } from 'apollo-link';

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//       console.log('graphQLErrors', graphQLErrors);
//     }
//     if (networkError) {
//       console.log('networkError', networkError);
//     }
//   });

//   const httpLink = ...

//   const link = ApolloLink.from([errorLink, httpLink]);
  
//   const client = new ApolloClient({
//     ...,
//     link,
//     ...
//   });

function Waitlist(props){
    const [addToWait, { error }] = useMutation(ADD_TO_WAIT) 
    const[formState, setFormState]=useState({ first_name: '', last_name: '', phone: '', email: '', location: '', size: ''});


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log(formState);
            
            const mutationResponse = await addToWait({
                variables:{
                    first_name: formState.first_name, last_name: formState.last_name, phone: formState.phone, email: formState.email, location: formState.location, size: formState.size 
                }
            });
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = event =>{
        const{name, value}=event.target;
        setFormState({
            ...formState, [name]:value
        });
    };

    return(
        <div className="container-fluid bg-primary bg-opacity-25 pb-5 mb-5">
                <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Join the Waitlist</h1>
                    <p className='fs-5'> Please add your information to the waitlist and we will contact you when a unit is available.</p>
                </div>
                </div>

            <div className="d-flex column-8 container justify-content-center">
            <form onSubmit={handleFormSubmit}>
            <div className="row my-2">
                <label className="col control-label" htmlFor="first_name">First Name</label>  
                <input id="first_name" name="first_name" type="first_name" placeholder="" className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

            <div className="row my-2">
                <label className="col control-label" htmlFor="last_name">Last Name</label>  
                <input id="last_name" name="last_name" type="text" placeholder="" className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="email">Email</label>  
                    <input id="email" name="email" type="email" placeholder="email@address.com" className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="phone" placeholder="(###)###-####" className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="location">Preferred Location</label>
                    <select id="location" name="location" className="form-select border border-primary shadow" onChange={handleChange}>
                        <option value="hometown">Hometown Site (Kickapoo St)</option>
                        <option value="heritage">Heritage Site (SR 3)</option>
                    </select>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="size">Unit Size</label>
                        <select id="size" name="size" className="form-select border border-primary shadow" onChange={handleChange}>
                        <option value="5x10">5' x 10'</option>
                        <option value="10x10">10' x 10'</option>
                        <option value="10x15">10' x 15'</option>
                        <option value="10x20">10' x 20'</option>
                        </select>
                </div>
                <div className="flex-row space-between my-2 col-6 mx-auto">
                    <button className="btn btn-danger shadow" type="submit">Get Added to the Waitlist</button>
                </div>
            </form>
            </div>
            </div>

    )
}

export default Waitlist;
