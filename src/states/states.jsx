import { countries } from "."








const StatesTask = ()=>{
return(
    <>
    <form action="">
        <label for="states">Select your Country</label>
        <select name="country" id="">
            <option value="">----Select here----</option>
            {
                countries.map((each)=>{
                    return(
                        <option value={each}>{each}</option>
                    )

                })
            }
        </select>
    </form>
    </>
)
}
export default StatesTask