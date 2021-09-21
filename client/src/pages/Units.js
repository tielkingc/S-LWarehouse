// import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNITS } from '../utils/queries';
import UnitsList from '../components/UnitsList';


 
function GetAllUnits() {
    const { loading, error, data } = useQuery(QUERY_UNITS);
    console.log(data)
    const units = data?.GetUnits || [];
    // console.log(units);
    return (
        <div className="row justify-content-center g-2">
        <div className="col-6 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <div className="container row text-center">
              <h1 className="mb-3">Available Units</h1>
            <UnitsList units={units} title="Available Units" />
            </div>
          )}
        </div>
      </div>
    )};

export default GetAllUnits;