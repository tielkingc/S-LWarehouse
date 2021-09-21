import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CLIENTS } from "../utils/queries";
import { DELETE_USER } from '../utils/mutations';
import { Link } from "react-router-dom";

function GetClients() {
    const { data, error } = useQuery(QUERY_CLIENTS);
    const [deleteUser, { loading }] = useMutation(DELETE_USER);

    const clients = data?.users || [];

    console.log(data)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Units</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clients && clients.map((user) => (
                        <tr key={user._id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.units}</td>
                            <td>{user.status}</td>
                            <td><button onClick={() => {
                                localStorage.setItem('userData', JSON.stringify(user));
                                window.location.replace('/edit');
                            }}>Edit</button></td>
                            <td><button value={user._id} onClick={e => deleteUser({
                                variables:{
                                    _id: e.target.value}
                                }, window.location.reload())}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-danger shadow" onClick={() => {
                window.location.replace('/add');
            }}>Add User</button>
            {/* {clients &&
                clients.map((user) => (
                    <div key={user._id}>
                        <p>{user.first_name} {user.last_name} {user.email} {user.address} {user.phone}</p>
                    </div>
                ))} */}
        </div>
    )
}

export default GetClients;