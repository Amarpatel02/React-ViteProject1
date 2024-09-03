

const TableReuseableComponent = ({ data = [] }) => {
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

          <tr>
            <td>Amar</td>
            <td>amarchinna02@gmail.com</td>
            <td>9963118136</td>
            <td>Telangana</td>
          </tr>
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