import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import { UPDATE_USER } from '../utils/mutations';


function EditUser(props){
    const data = JSON.parse(localStorage.getItem("userData"))
    console.log(data)
    const [editUser, { error }] = useMutation(UPDATE_USER) 
    const[formState, setFormState]=useState({ _id: data._id, first_name: data.first_name, last_name: data.last_name, phone: data.phone, email: data.email, address: data.address, admin: data.admin, status: data.status});
    


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log(formState);
            
            const mutationResponse = await editUser({
                variables:{
                    _id: formState._id, first_name: formState.first_name, last_name: formState.last_name, phone: formState.phone, email: formState.email, address: formState.address, admin: formState.admin, status: formState.status 
                }
            });

            localStorage.removeItem('userData')
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
    };

    
    return(
        <div className="container-fluid bg-primary bg-opacity-25 pb-5 mb-5">
                <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Edit User</h1>
                </div>
                </div>

            <div className="d-flex column-8 container justify-content-center">
            <form onSubmit={handleFormSubmit}>
            <div className="row my-2">
                <label className="col control-label" htmlFor="first_name">First Name</label>  
                <input id="first_name" name="first_name" type="first_name" placeholder={data.first_name} className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

            <div className="row my-2">
                <label className="col control-label" htmlFor="last_name">Last Name</label>  
                <input id="last_name" name="last_name" type="text" placeholder={data.last_name} className="form-control input-md border border-primary shadow" onChange={handleChange}/> 
            </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="email">Email</label>  
                    <input id="email" name="email" type="email" placeholder={data.email} className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="phone" placeholder={data.phone} className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" placeholder={data.address} className="form-control input-md border border-primary shadow" onChange={handleChange}/>
                </div>

                <div className="row my-2">
                    <label className="col control-label" htmlFor="status">Status</label>
                    <input id="status" name="status" type="text" placeholder={data.status} className="form-control input-md border border-primary shadow" onChange={handleChange}/>
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
                    <button className="btn btn-danger shadow" type="submit">Update User</button>
                </div>
            </form>
            </div>
            </div>

    )
}

export default EditUser;
