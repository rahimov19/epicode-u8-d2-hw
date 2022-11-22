import { Component } from "react";
import fantasy from "../fantasy.json";

import { Card, Button, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
class LatestRelease extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row id="CardRow">
          {fantasy.map((book) => (
            <SingleBook book={book} key={book.asin} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
