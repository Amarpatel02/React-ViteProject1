import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OrderListComponent from './list';
import { useState } from 'react';

// function ReactBootsrapCard({title,text,img,id,ingredients,}) {
//   const [showData,setShowData]= useState( false)
 
//   return (
//     <Card style={{ width: '22rem' }}>
//       <Card.Img variant="top" src={img}/>
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{text}</Card.Text>
//         <Button variant="primary"onClick={()=>{ 
//                 console.log(showData);
//                 setShowData(!showData) 
                 
//             }}>see more</Button>
//         {showData && <OrderListComponent ingredients={ingredients}   />}
//       </Card.Body>
//     </Card>
//   );
// }

// export default ReactBootsrapCard;


function ReactBootsrapCard({title,text,img,onClick}) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img} style={{width:"200px", height:"200px"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={onClick}>see more</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootsrapCard;



