import { Component } from "react";


class TableComponent extends Component{
    render(){
        const {data}=this.props
        return(
            <>
            <table className="table table-condensed">
  <thead>
    <tr>
      <th>Item</th>
      <th>Title</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((each)=>{
            return(
                    <tr>
                    <td><img src={each.image} alt="" style={{height:"100px"}} /></td>
                    <td>{each.title}</td>
                    <td>{each.price}</td>
                    </tr>
                 )
    
        })
    }
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr>
      <td>Mary</td>
      <td>Moe</td>
      <td>mary@example.com</td>
    </tr>
    <tr>
      <td>July</td>
      <td>Dooley</td>
      <td>july@example.com</td>
    </tr> */}
  </tbody>
</table>

            </>
        )
    }

}

export default TableComponent