


export const itemFunction = ()=>{
    let data = [];

    for(let i=1;i<=100;i++){
        const myObject = {
            "id":i,
            "item":`Button ${i}`
        }
        data.push(myObject)
    }
    return data
}
console.log(itemFunction())