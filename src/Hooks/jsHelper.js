


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


export const countries = [
    "India", 
    "United States", 
    "China", 
    "Brazil", 
    "Canada", 
    "Australia", 
    "Germany", 
    "Japan", 
    "Russia", 
    "United Kingdom", 
    "France", 
    "Mexico", 
    "South Africa", 
    "Saudi Arabia", 
    "Argentina", 
    "Italy", 
    "South Korea", 
    "Indonesia", 
    "Egypt", 
    "Turkey"
  ];
  

 export const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  