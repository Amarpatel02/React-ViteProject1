







const TableReuseableComponent = ({rowData=[]}) => {
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        rowData.map((each)=>{
                            return(
                                <tr>
                        <td>{each.username}</td>
                        <td>{each.email}</td>
                        <td>{each.state}</td>
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