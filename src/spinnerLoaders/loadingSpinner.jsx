
import { ColorRing , RotatingLines, Hourglass,} from "react-loader-spinner"
import React, { useState } from "react";
import Heart from "react-animated-heart"

let LoadingSpinner =()=>{
return(
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
)
}
export default LoadingSpinner


export let LoadingCircleSpinner = (props)=>{
    return(
        <RotatingLines
            visible={true}
            color="red"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            {...props}
        />
    )
}

export const LoadingHourglass = ()=>{
    return(
        <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
        />
    )
}


export let HeartComponent =()=>{
    const [isClick, setClick] = useState(false);
    return (
      <div className="App">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
    );
}

