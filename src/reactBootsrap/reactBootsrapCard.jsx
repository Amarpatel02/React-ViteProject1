import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBootsrapCard(props) {
  const {title,text,img}=props
  return (
    <div style={{display:"flex"}}>
    <Card style={{ width: '22rem', height: '32rem' }}>
      <Card.Img variant="top" src={img} style={{ height: '200px', width: "200px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Click here</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ReactBootsrapCard;