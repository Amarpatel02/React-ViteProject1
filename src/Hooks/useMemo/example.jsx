import { useMemo, useState } from "react"







const UseMemoExample1 = ()=>{

    const[milk,setMilk]=useState(1)
    const[biryani,setBiryani]=useState(1)

    const quntityMilkHandler = ()=>{
        setMilk(milk+1)
    }

    const milkPriceFunction = useMemo( ()=>{
        const milkRate = 50;
        console.log("milk Called")
        return milk*milkRate
    },[milk])

    const removeHandler = ()=>{
        setMilk(milk-1)
    }

    const biryaniPriceFunction = useMemo(()=>{
        const briyaniRate = 150
        console.log("Biryani Called")
        return briyaniRate*biryani
    },[biryani])

    const quntityBriyaniHandler = ()=>{
        setBiryani(biryani+1)

    }
    const removeBiryaniHandler = ()=>{
        setBiryani(biryani-1)
    }

    return(
        <>
        <h3>MilkQuantity: {milk} price: {milkPriceFunction}</h3>
        <button onClick={quntityMilkHandler}>Qty</button> <button onClick={removeHandler}>remove</button>
        <h3>BiryaniSinglePack: {biryani} price: {biryaniPriceFunction}</h3>
        <button onClick={quntityBriyaniHandler}>Qty</button> <button onClick={removeBiryaniHandler}>remove</button>
        </>
    )
}

export default UseMemoExample1
