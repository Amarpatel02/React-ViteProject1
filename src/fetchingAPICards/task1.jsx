import { Component } from "react";




class FetchingAPICards extends Component{

    state={
        data:[],
        loader:true
    }

    componentDidMount(){
        this.funCalling()
    }

    funCalling = async ()=>{
        const fetchingData = await fetch("https://fakestoreapi.com/products")
        const data = await fetchingData.json()
        console.log(data)
    }

    render(){
        return(
            <> 
                <h3>Hello</h3>
                {
                    this.state.loader ?
                }
            </>
        )
    }
}

export default FetchingAPICards