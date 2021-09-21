import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../utils/mutations';


function AddUser(props){
    const [addUser, { error }] = useMutation(ADD_USER) 
    const[formState, setFormState]=useState({ first_name: '', last_name: '', phone: '', email: '', address: '', admin: '', passwor: ''});
    


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log(formState);
            
            const mutationResponse = await addUser({
                variables:{
                    _id: formState._id, first_name: formState.first_name, last_name: formState.last_name, password: formState.password, phone: formState.phone, email: formState.email, address: formState.address, admin: formState.admin 
                }
            });

            window.location.replace('/clients')
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = event =>{
        let {name, value}=event.target;
        if (value === 'true') {
            value = true;
        } else if (value === 'false') {
            value = false;
        }
        setFormState({
            ...formState, [name]:value
        });
        console.log(formState)
    };

    
    return(
        <div className="container-fluid bg-primary bg-opacity-25 pb-5 mb-5">
                <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Add User</h1>
                </div>
                </div>

            <div className="d-flex column-8 container justify-content-center">
            <form onSubmit={handleFormSubmit}>
            <div className="row my-2">
                <label className="col control-label" htmlFor="first_name">First Name</label>  
                <input id="first_name" name="first_name" type="first_name" placeholder="First Name" className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

            <div className="row my-2">
                <label className="col control-label" htmlFor="last_name">Last Name</label>  
                <input id="last_name" name="last_name" type="text" placeholder="Last Name" className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="email">Email</label>  
                    <input id="email" name="email" type="email" placeholder="Email" className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="phone" placeholder='Phone' className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" placeholder="Address" className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="password">Password</label>
                    <input id="password" name="password" type="text" placeholder="Password" className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="admin">Admin</label>
                    <select id="admin" name="admin" className="form-select border border-primary shadow" onChange={handleChange}>
                        <option value="">Select One:</option>
                        <option value="true">Yes</option>
                        <option value="false" >No</option>
                        </select>
                </div>
                <div className="flex-row space-between my-2 col-6 mx-auto">
                    <button className="btn btn-danger shadow" type="submit">Add User</button>
                </div>
            </form>
            </div>
            </div>

    )
}

export default AddUser;
