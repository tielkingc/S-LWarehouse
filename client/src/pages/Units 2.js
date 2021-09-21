import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNITS } from '../utils/queries';
//  import UnitsList from '../components/UnitsList';


 
function GetAllUnits() {
    const { loading, error, data } = useQuery(QUERY_UNITS);
    const [units, setUnits] = useState([]);
    useEffect(() => {
        if(data){
        console.log(data.getUnits);
        setUnits(data.getUnits);
        }
    }, [data])



    return (
        <div> 
            <h1> Available Units</h1>
            {''}
            {units.map((val) => {
                return <h1> {val.number} </h1>
            })}
        </div>
    )};

export default GetAllUnits;