import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WAITLIST } from "../utils/queries";
import { DELETE_WAIT } from "../utils/mutations";

// async function Waitdelete(id) {
//     // event.preventDefault();

    

//     try {
//         const mutationResponse = await deleteWait({
//             variable: {
//                 _id: id
//             }
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }

function GetWaitlist() {
    const { data, error } = useQuery(QUERY_WAITLIST);
    const [deleteWait, {loading}] = useMutation(DELETE_WAIT);

    const clients = data?.waitlist || [];

    return (

        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Size</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clients && clients.map((waitlist) => (
                        <tr key={waitlist._id}>
                            <td>{waitlist.first_name}</td>
                            <td>{waitlist.last_name}</td>
                            <td>{waitlist.email}</td>
                            <td>{waitlist.phone}</td>
                            <td>{waitlist.location}</td>
                            <td>{waitlist.size}</td>
                            <td><button value={waitlist._id} onClick={e => deleteWait({
                                variables:{
                                    _id: e.target.value}
                                }, window.location.reload())}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // <div>
        //     {clients &&
        //         clients.map((waitlist) => (
        //             <div key={waitlist._id}>
        //                 <p>{waitlist.first_name} {waitlist.last_name} {waitlist.email} {waitlist.phone} {waitlist.location} {waitlist.size}</p>
        //             </div>
        //         ))}
        // </div>
    )
}

export default GetWaitlist;