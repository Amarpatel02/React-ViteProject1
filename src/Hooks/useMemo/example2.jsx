



// const UseMemoExample2 = ()=>{
//     return(
//         <>
//         </>
//     )
// }
// export default UseMemoExample2

import { useMemo, useState } from "react"


// import React, { useMemo, useState } from 'react';

// const FilteredList = () => {
//   const [filter, setFilter] = useState('');
//   const list = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

//   const filteredList = useMemo(() => {
//     return list.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
//   }, [filter]);

//   return (
//     <div>
//       <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter list" />
//       <ul>
//         {filteredList.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilteredList;




const FilteredList = ()=>{

    const [input,setInput] = useState("")
    const list = ["apple","banana","kiwi","orange","watermellow"]

    const FilteredFun = (event)=>{
        setInput(event.target.value)
        console.log(input)
    }

    const filteredList = useMemo(()=>{
        return list.filter(item=>item.toLowerCase().includes(input.toLowerCase()))
    },[input])


    return(
        <>
        <h3>FilteredData List</h3>
        <input type="text" value={input} onChange={FilteredFun} />

        <ul>
            {filteredList.map(item=>{
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
        </>
    )
}
export default FilteredList
