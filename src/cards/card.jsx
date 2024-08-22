import "./card.css"
export const Card = ()=>{
   return (
        <div className="mainDiv">
         <div className="photo_name">
        <img src ="https://static.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg" className="img"/>
        <span> <b>Virat Kohli</b>
               <p>India</p>
        </span>
         </div>
         <div className="personalInfo">
            <b>Personal Information</b>
            <table>
               <tr>
                  <td><b>Born</b></td>
                  <td>:</td>
                  <td><p>Nov 05,1988 (35 years)</p></td>
               </tr>
               <tr>
                  <td><b>Birth Place</b></td>
                  <td>:</td>
                  <td><p>Delhi</p></td>
               </tr>

               <tr>
                  <td><b>height</b></td>
                  <td>:</td>
                  <td><p>5ft 9 in (175 cm)</p></td>
               </tr>

               <tr>
                  <td><b>Role:</b></td>
                  <td>:</td>
                  <td><p>Batsman</p></td>
               </tr>

               <tr>
                  <td></td>
                  <td></td>
               </tr>
            </table>


         </div>
        </div>
   )
}

let arr = [
   {img:"https://static.cricbuzz.com/a/img/v1/i1/c352478/rohit-sharma.jpg?d=low&p=gthumb",
    name:"Rohit Sharma",
    born:"April 30, 1987 (35 years)",
    place:"Nagpur,Maharashtra",
    role:"Batsman"
   },

   {
      img:"https://static.cricbuzz.com/a/img/v1/i1/c352479/shubman-gill.jpg?d=low&p=gthumb",
      name:"Shubaman Gill",
      born:"September 08, 1999 (24 years)",
      place:"Firozpur, Punjab",
      role:"Batsman"
   },

   {
      img:"https://static.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg",
      name:"Virat Kohli",
      born:"November 05, 1988 (35 years)",
      place:"Delhi",
      role:"Batsman"
   },
   {
      img:"https://static.cricbuzz.com/a/img/v1/i1/c244978/rishabh-pant.jpg?d=low&p=gthumb",
      name:"Rishabh Pant",
      born:"October 04, 1997 (26 years)",
      place:"Haridwar, Uttarakhand",
      role:"Batsman"
   },{
      img:"https://static.cricbuzz.com/a/img/v1/i1/c352480/shreyas-iyer.jpg?d=low&p=gthumb",
      name:"Shreyas Iyer",
      born:"December 06, 1994 (29 years)",
      place:"Mumbai",
      role:"Batsman"
   },{
      img:"https://static.cricbuzz.com/a/img/v1/i1/c332897/axar-patel.jpg?d=low&p=gthumb",
      name:"Axar Patel",
      born:"January 20, 1994 (30 years)",
      place:"Anand, Gujarat",
      role:"Bowling Allrounder"
   },{
      img:"https://static.cricbuzz.com/a/img/v1/i1/c171035/washington-sundar.jpg?d=low&p=gthumb",
      name:"Washington Sundar",
      born:"October 05, 1999 (24 years)",
      place:"Chennai, Tamil Nadu",
      role:"Bowling Allrounder"
   },{
      img:"https://static.cricbuzz.com/a/img/v1/i1/c352490/kuldeep-yadav.jpg?d=low&p=gthumb",
      name:"Kuldeep Yadav",
      born:"December 14, 1994 (29 years)",
      place:"Kanpur, Uttar Pradesh",
      role:"Bowler"
   },{
      img:"https://static.cricbuzz.com/a/img/v1/i1/c352491/mohammed-siraj.jpg?d=low&p=gthumb",
      name:"Mohammed Siraj",
      born:"March 13, 1994 (30 years)",
      place:"Hyderabad",
      role:"Bowler"
   },

]

export const Players = ()=>{
   return(
<div className="Total">      {
         arr.map((val)=>{
            return(
               <div className="parentDiv">
               <div className="mainDiv">
         <div className="photo_name">
        <img src ={val.img} className="img"/>
        <span> <b>{val.name}</b>
               <p>India</p>
        </span>
         </div>
         <div className="personalInfo">
            <b>Personal Information</b>
            <table>
               <tr>
                  <td><b>Born</b></td>
                  <td>:</td>
                  <td><p>{val.born}</p></td>
               </tr>
               <tr>
                  <td><b>Birth Place</b></td>
                  <td>:</td>
                  <td><p>{val.place}</p></td>
               </tr>
               <tr>
                  <td><b>Role:</b></td>
                  <td>:</td>
                  <td><p>{val.role}</p></td>
               </tr>
            </table>
         </div>
        </div>
               </div>
            )
         })
      }
      <Name></Name>
      <Name></Name>
      <Name></Name>
      <Name></Name>
      <Name></Name>
      <Name></Name>

</div> 
   )
}

function Name(){
   return(
      <h2>Hey Amar</h2>
   )
}