import { Component } from "react";


class TableComponent extends Component{
    render(){
        const {data,handleRemove}=this.props
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
                    <td><button style={{border:"none"}} onClick={()=>handleRemove(each.id)}>remove</button></td>
                    </tr>
                 )
    
        })
    }
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

            </>
        )
    }

}

export default TableComponent