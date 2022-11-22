import { Card, Button } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="title">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.category}</Card.Text>
        <Button variant="primary">{book.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
