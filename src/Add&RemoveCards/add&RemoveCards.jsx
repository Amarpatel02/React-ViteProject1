import { Component } from "react";
import ReactBootsrapCard from "../reactBootsrap/reactBootsrapCard";
import { Button } from "react-bootstrap";


class AddAndRemoveCards extends Component{

    state={
        data:[{name:"ViratKohli",born:"Nov 05, 1988 (35 years)", image:"https://static.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg"},
              {name:"Rohit Sharma", born:"Apr 30, 1987 (37 years)",image:"https://static.cricbuzz.com/a/img/v1/152x152/i1/c352478/rohit-sharma.jpg"}
             ]
    }

    cardFunCalling =()=>{
          const newData={name:"Rishabh Pant",born:"Oct 04, 1997 (26 years)",image:"https://static.cricbuzz.com/a/img/v1/152x152/i1/c244978/rishabh-pant.jpg"}
          const updatedData = [...this.state.data,newData]
          
          this.setState({
            data:updatedData
           })
    }

    removeCard=(index,event)=>{
        console.log('function main',event);
       const filteredData = this.state.data.filter((_,id)=>id!==index)

       this.setState({
        data:filteredData
       })

    }

    render(){
        return(
            <>
                <Button variant="primary" onClick={this.cardFunCalling} >Add New Card</Button>

                <div className="container mt-5">
                <div className="row">
                    
                {
                    this.state.data.map((profile,index)=>{
                        return(
                    <div className="col-sm-4">
                        <ReactBootsrapCard title={profile.name} text={profile.born} ind={index} img={profile.image} removeCard={this.removeCard} ></ReactBootsrapCard>
                    </div>
                        )
                    })
                }
                </div>
                </div>

            </>
        )
    }
}
export default AddAndRemoveCards