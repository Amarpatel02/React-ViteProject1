import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBootsrapCard(props) {
  const {title,image,description,price}=props
  return (
    <Card style={{margin:"10px"}}>
      <Card.Img variant="top" src={image} style={{height:"300px", width:"100%", objectFit:"cover"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Place your order</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBootsrapCard;