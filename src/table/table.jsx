

const TableReuseableComponent = ({ data = [] }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((each) => {
              return (
                <tr>
                  <td>{each.username}</td>
                  <td>{each.email}</td>
                  <td>{each.phone}</td>
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