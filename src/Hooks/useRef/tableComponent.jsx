


const TableReuseableComponent = ({rowData=[],setSubmitedData}) => {

    const handleRemove=(id)=>{
    const filterData = rowData.filter((value,index)=>id !==index)
    console.log(filterData,'filter');
    setSubmitedData(filterData)
    
    }
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>MobileNumber</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        rowData.map((each,index)=>{
                            return(
                                <tr>
                        <td>{each.username}</td>
                        <td>{each.email}</td>
                        <td>{each.mobileNumber}</td>
                        <td>{each.state}</td>
                        <td><button onClick={()=>{handleRemove(index)}}>Remove</button></td>
                               </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

        </>
    )
}
export default TableReuseableComponent