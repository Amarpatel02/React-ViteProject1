import { Component } from "react";
import axios from "axios"


// class WheatherAPI extends Component{

//     state = {

//         latitude:"",
//         longitude:"",
//         cityName:"",
//         humidity:"",
//         temp:""

//     }

//     componentDidMount(){
//         if(navigator?.geolocation){
//             navigator?.geolocation?.getCurrentPosition(
//                 (position)=>{
//                     const {latitude,longitude}=position.coords
//                     if(latitude&&longitude){
//                         this.fetchData(latitude,longitude)
//                     }
//                 })
//         }
//     }

//     fetchData = async (lat,long)=>{
//        const finalData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=35f11a89f523b231227b4a19d004adf9`);
//        const cityName=finalData.data.name
//        const{humidity,temp}=finalData.data.main
//        const{status}=finalData

//        if(status==200){
//         this.setState({
//         latitude:lat,
//         longitude:long,
//         cityName:cityName,
//         humidity:humidity,
//         temp:temp

//         })

//        }
//        else{
//         <h3>Oops! You have a Error</h3>
//        }
//     }

//     render(){

//         return(
//             <>

//             <div>
//                 <h3>CityName:{this.state.cityName}</h3>
//                 <h3>Latitude:{this.state.latitude}</h3>
//                 <h3>Longitude:{this.state.longitude}</h3>
//                 <h3>Humidity:{this.state.humidity}</h3>
//                 <h3>Temperature:{(this.state.temp -273.15).toFixed(2)} °C</h3>
//             </div>
//             </>
//         )
//     }
// }
// export default WheatherAPI


class WeatherAPI extends Component {
  state = {
    latitude: "",
    longitude: "",
    cityName: "",
    humidity: "",
    temp: "",
  };

  componentDidMount() {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          this.fetchData(latitude, longitude);
        }
      });
    }
  }

  fetchData = async (lat, long) => {
    const finalData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=35f11a89f523b231227b4a19d004adf9`
    );
    const cityName = finalData.data.name;
    const { humidity, temp } = finalData.data.main;
    const { status } = finalData;

    if (status === 200) {
      this.setState({
        latitude: lat,
        longitude: long,
        cityName: cityName,
        humidity: humidity,
        temp: temp,
      });
    } else {
      return <h3>Oops! There is an error.</h3>;
    }
  };

  render() {
    const containerStyle = {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url('https://example.com/your-background-image.jpg')`, // Add your image URL here
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
    };

    const infoBoxStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      borderRadius: "10px",
    };

    const headingStyle = {
      fontSize: "2rem",
      margin: "10px 0",
    };

    const tempStyle = {
      fontSize: "3rem",
      fontWeight: "bold",
    };

    return (
      <div style={containerStyle}>
        <div style={infoBoxStyle}>
          <h3 style={headingStyle}>City: {this.state.cityName}</h3>
          <h3 style={headingStyle}>Latitude: {this.state.latitude}</h3>
          <h3 style={headingStyle}>Longitude: {this.state.longitude}</h3>
          <h3 style={headingStyle}>Humidity: {this.state.humidity}%</h3>
          <h3 style={tempStyle}>
            Temperature: {(this.state.temp - 273.15).toFixed(2)} °C
          </h3>
        </div>
      </div>
    );
  }
}

export default WeatherAPI;
