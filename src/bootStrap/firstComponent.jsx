import ReactBootsrapCard from "../reactBootsrap/reactBootsrapCard"
let BootstrapFirstComponent = ()=>{

    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Upcoming Movies</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <ReactBootsrapCard title={"Devara"} text={"NTR"} img={"https://tse3.mm.bing.net/th?id=OIP.zZpVkjONdfY7KS8_8_KbswHaFj&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>
      <div className="col-sm-4">
      <ReactBootsrapCard title={"OG"} text={"PawanKalyan"} img={"https://tse1.mm.bing.net/th?id=OIP.DiA92gnLFTN7Aucz8wG-6wHaHa&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>
      <div className="col-sm-4">
      <ReactBootsrapCard title={"GameChanger"} text={"RamCharan"} img={"https://tse4.mm.bing.net/th?id=OIP.EOrFaed48lhD2WuO3f87eAHaHa&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>

      <div className="col-sm-4">
        <ReactBootsrapCard title={"Spirit"} text={"Prabhas"} img={"https://tse2.mm.bing.net/th?id=OIP.rsphJNE0kdCBb1N3OgN1PQHaFj&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>
      <div className="col-sm-4">
      <ReactBootsrapCard title={"Pushpa"} text={"AlluArjun"} img={"https://tse2.mm.bing.net/th?id=OIP.aAi2uwShGJD5gZnAK4Fj9AHaLS&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>
      <div className="col-sm-4">
      <ReactBootsrapCard title={"Saalar"} text={"Prabhas"} img={"https://tse1.mm.bing.net/th?id=OIP.POKpIwkhkROoACEH9RDlrgHaEK&pid=Api&P=0&h=180"}></ReactBootsrapCard>
      </div>
    </div>
  </div>
</>
    )


}
export default BootstrapFirstComponent