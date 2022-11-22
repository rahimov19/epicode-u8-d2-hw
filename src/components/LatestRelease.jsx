import { Component } from "react";
import fantasy from "../fantasy.json";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Card, Button, Container, Row } from "react-bootstrap";
class LatestRelease extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row id="CardRow">
          {fantasy.map((book) => (
            <Card key={book.asin} style={{ width: "14rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="title">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="primary">{book.price}</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
