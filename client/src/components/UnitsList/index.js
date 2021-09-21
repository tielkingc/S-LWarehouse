const UnitsList = ({units}) => {
    if (!units.length) {
        return <h3>No Units Available</h3>;
    } else{      
        const availableUnits = units.filter(function(e) {
        return  e.status==="Available";      
    })
    units= availableUnits;
    console.log(units);

}
    return (

        <section>
            <div>
                <h2>Heritage Units Available</h2>

                



                
            </div>

            {units &&
                units.map((unit => (
                    
                <div key={unit._id} className="card mb-3">
                        <p className="card-header">
                            {unit.location}
                        </p>
                    <div className="card-body">
                        <p>{unit.number}</p>
                        <p className="mb-0">Status: {unit.status}</p>
                    </div>
                </div>
                )))
            }
        </section>
    )
        };


export default UnitsList;