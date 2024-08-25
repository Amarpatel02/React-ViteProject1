import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBootsrapCard(props) {
  const {title,text,img,removeCard,ind}=props
  console.log(ind)
  return (
    <Card >
      <Card.Img variant="top" src={img} height={200}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={(e)=>{ console.log('calling here'); removeCard(ind)}}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootsrapCard;